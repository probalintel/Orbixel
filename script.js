/* ========================================
   ORBIXEL - Main JavaScript
   We Design You Grow
   ======================================== */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Header Scroll Effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                if (nav && nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    const spans = mobileMenuBtn.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            }
        });
    });

    // Contact Form Handling
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

        fetch("https://script.google.com/macros/s/AKfycbwXtrgPi6RmdvzfokKBc-wUKG11APlYMOffc-nJOp7hYyevbjVsrNFFHKWB27fmf-xn6Q/exec", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(response => {
            alert("✅ Thank you! We will get back to you soon.");
            contactForm.reset();
        })
        .catch(error => {
            console.error("Error:", error);
            alert("❌ Something went wrong.");
        });
    });
}
