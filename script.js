/* ========================================
   ORBIXEL - AI-Powered Chatbot
   We Design You Grow
   
   SETUP INSTRUCTIONS:
   1. Go to https://huggingface.co/settings/tokens
   2. Create a free account
   3. Copy your API token
   4. Replace "YOUR_HUGGINGFACE_TOKEN_HERE" below with your token
   ======================================== */

// ===== CONFIGURATION =====
const HUGGINGFACE_API_KEY = "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"; // REPLACE THIS with your token
const AI_MODEL = "facebook/blenderbot-400m-distill"; // Free model, works well

const SYSTEM_PROMPT = `You are Orbixel AI Assistant for Orbixel - a web development company.
Company Info:
- Name: Orbixel
- Tagline: "We Design You Grow"
- Services: Business Websites, E-Commerce Websites, Portfolio Websites, Mobile Apps, Fast Delivery
- Pricing: Starter ₹5,000 (5 pages), Professional ₹15,000 (10 pages + e-commerce), Enterprise custom
- Delivery: 3-5 days
- Contact: +91 8910040655, +91 6291621550, orbixel@gmail.com

Be friendly, helpful, and mention Orbixel naturally. Keep responses concise (2-3 sentences).`;

// ===== MAIN CODE =====
document.addEventListener('DOMContentLoaded', function() {
    
    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const nav = document.getElementById('nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            const spans = mobileMenuBtn.querySelectorAll('span');
            if (nav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                if (nav && nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            }
        });
    });

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = {};
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }
            
            if (!data.name || !data.email) {
                alert('Please fill in all required fields.');
                return;
            }
            
            console.log('Form submitted:', data);
            alert('Thank you! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // ===== AI CHATBOT =====
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const quickReplies = document.querySelectorAll('.quick-reply');

    let conversationHistory = [];

    // Toggle chatbot
    if (chatbotToggle) {
        chatbotToggle.addEventListener('click', function() {
            chatbotToggle.classList.toggle('active');
            chatbotWindow.classList.toggle('active');
            
            if (chatbotWindow.classList.contains('active')) {
                chatbotInput.focus();
            }
        });
    }

    // Send message to AI
    async function sendMessage(message) {
        if (!message.trim()) return;
        
        // Add user message
        addMessage(message, 'user');
        chatbotInput.value = '';
        
        // Show typing indicator
        showTypingIndicator();
        
        try {
            // Call AI API
            const response = await getAIResponse(message);
            removeTypingIndicator();
            addMessage(response, 'bot');
        } catch (error) {
            removeTypingIndicator();
            // Fallback response if API fails
            addMessage(getFallbackResponse(message), 'bot');
            console.log('AI Error - using fallback:', error);
        }
    }

    // Get AI response from Hugging Face
    async function getAIResponse(userMessage) {
        // Add to conversation history
        conversationHistory.push({ role: 'user', content: userMessage });
        
        // Build context from history (last 4 messages)
        const context = conversationHistory.slice(-4).map(m => 
            `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`
        ).join('
');
        
        const fullPrompt = `${SYSTEM_PROMPT}

Conversation:
${context}

User: ${userMessage}
Assistant:`;

        const response = await fetch(
            "https://api-inference.huggingface.co/models/" + AI_MODEL,
            {
                headers: {
                    "Authorization": "Bearer " + HUGGINGFACE_API_KEY,
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({
                    inputs: fullPrompt,
                    parameters: {
                        max_new_tokens: 100,
                        temperature: 0.7,
                        top_p: 0.9
                    }
                })
            }
        );

        if (!response.ok) {
            throw new Error('API request failed');
        }

        const data = await response.json();
        
        // Extract the response
        let botResponse = data[0]?.generated_text;
        
        if (botResponse) {
            // Clean up the response
            botResponse = botResponse.split('Assistant:').pop().trim();
            botResponse = botResponse.split('User:')[0].trim();
            
            // If response is too long, truncate
            if (botResponse.length > 300) {
                botResponse = botResponse.substring(0, 300) + '...';
            }
        }
        
        if (!botResponse || botResponse.length < 5) {
            throw new Error('Empty response');
        }
        
        // Add bot response to history
        conversationHistory.push({ role: 'assistant', content: botResponse });
        
        return botResponse;
    }

    // Fallback responses when API fails
    function getFallbackResponse(message) {
        const m = message.toLowerCase();
        
        if (m.includes('service')) {
            return "We offer Business Websites, E-Commerce Sites, Portfolios & Mobile Apps. Would you like to know about pricing?";
        }
        if (m.includes('price') || m.includes('cost')) {
            return "Our packages: Starter ₹5,000, Professional ₹15,000, Enterprise custom. Which interests you?";
        }
        if (m.includes('time') || m.includes('delivery') || m.includes('fast')) {
            return "We deliver in 3-5 days! Quick process: Discovery → Design → Development → Launch 🚀";
        }
        if (m.includes('get') || m.includes('start') || m.includes('website')) {
            return "Great choice! 🎉 Contact us: +91 8910040655 or fill the form above. We'll call you within 24 hours!";
        }
        if (m.includes('contact') || m.includes('phone') || m.includes('call')) {
            return "Call us: +91 8910040655 or WhatsApp at the same number. Email: orbixel@gmail.com";
        }
        if (m.includes('about') || m.includes('who')) {
            return "We're Orbixel - We Design You Grow! 🎯 We've helped 500+ businesses go online.";
        }
        
        return "Thanks for reaching out! For more info, call us at +91 8910040655 or WhatsApp us. We're happy to help!";
    }

    // Add message to chat
    function addMessage(text, type) {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'chatbot-message ' + type;
        msgDiv.innerHTML = '<p>' + escapeHtml(text) + '</p>';
        chatbotMessages.appendChild(msgDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Typing indicator
    function showTypingIndicator() {
        const typing = document.createElement('div');
        typing.className = 'typing-indicator';
        typing.id = 'typingIndicator';
        typing.innerHTML = '<span></span><span></span><span></span>';
        chatbotMessages.appendChild(typing);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function removeTypingIndicator() {
        const typing = document.getElementById('typingIndicator');
        if (typing) typing.remove();
    }

    // Escape HTML
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Event listeners
    if (chatbotSend) {
        chatbotSend.addEventListener('click', function() {
            sendMessage(chatbotInput.value);
        });
    }

    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage(chatbotInput.value);
            }
        });
    }

    // Quick reply buttons
    quickReplies.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const message = this.getAttribute('data-message');
            sendMessage(message);
        });
    });

    console.log('%c🤖 Orbixel AI Chatbot Ready', 'color: #0D9488; font-size: 16px; font-weight: bold;');
    console.log('%cGet your free API key: https://huggingface.co/settings/tokens', 'color: #666;');
});

    // Escape HTML to prevent XSS
    function escapeHtml(text) {
        var div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
});
