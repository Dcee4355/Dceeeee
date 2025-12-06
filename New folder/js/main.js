// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Close mobile menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.style.display = 'none';
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact Form Handling with Enhanced Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitBtn = document.getElementById('submitBtn');
    
    // Real-time validation on blur
    nameInput.addEventListener('blur', () => validateName());
    emailInput.addEventListener('blur', () => validateEmail());
    messageInput.addEventListener('blur', () => validateMessage());
    
    // Clear error on focus
    [nameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener('focus', () => {
            clearError(input.id);
        });
    });
    
    // Validation Functions
    function validateName() {
        const value = nameInput.value.trim();
        const errorEl = document.getElementById('nameError');
        
        if (!value) {
            showError('nameError', 'Name is required');
            return false;
        } else if (value.length < 2) {
            showError('nameError', 'Name must be at least 2 characters');
            return false;
        } else {
            clearError('name');
            return true;
        }
    }
    
    function validateEmail() {
        const value = emailInput.value.trim();
        const errorEl = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!value) {
            showError('emailError', 'Email is required');
            return false;
        } else if (!emailRegex.test(value)) {
            showError('emailError', 'Please enter a valid email address');
            return false;
        } else {
            clearError('email');
            return true;
        }
    }
    
    function validateMessage() {
        const value = messageInput.value.trim();
        const errorEl = document.getElementById('messageError');
        
        if (!value) {
            showError('messageError', 'Message is required');
            return false;
        } else if (value.length < 10) {
            showError('messageError', 'Message must be at least 10 characters');
            return false;
        } else {
            clearError('message');
            return true;
        }
    }
    
    function showError(errorId, message) {
        const errorEl = document.getElementById(errorId);
        errorEl.textContent = message;
        errorEl.style.display = 'block';
    }
    
    function clearError(fieldId) {
        const errorEl = document.getElementById(fieldId + 'Error');
        if (errorEl) {
            errorEl.style.display = 'none';
            errorEl.textContent = '';
        }
    }
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();
        
        if (isNameValid && isEmailValid && isMessageValid) {
            // Show success message
            showNotification('Thank you! Your message has been sent successfully.', 'success');
            contactForm.reset();
            [nameInput, emailInput, messageInput].forEach(input => clearError(input.id));
            
            // In a real application, you would send this data to a server
            console.log('Form submitted:', {
                name: nameInput.value,
                email: emailInput.value,
                customerType: document.getElementById('customerType').value,
                message: messageInput.value
            });
        } else {
            showNotification('Please fix the errors in the form.', 'error');
        }
    });
}

// Notification Function
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        border-radius: 5px;
        z-index: 10000;
        font-weight: bold;
        animation: slideIn 0.3s ease-in-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in-out';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// CTA Button Handler
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        if (this.textContent === 'GET STARTED') {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add animation to elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe portfolio items and service cards
document.querySelectorAll('.portfolio-item, .service-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Add slide-in/slide-out animations to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Parallax effect on hero section (subtle)
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPosition = `0px ${scrolled * 0.5}px`;
    }
});

// Add active state to navigation links
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--accent-yellow)';
        } else {
            link.style.color = '';
        }
    });
});

// Prevent default form submission for demonstration
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully - Ready to showcase your t-shirt designs!');
});
