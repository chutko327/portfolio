// Mobile menu toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle nav
    nav.classList.toggle('nav-active');
    
    // Animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger animation
    burger.classList.toggle('toggle');
});

// Scroll animations for all pages
function initScrollAnimations() {
    // Animate elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    };
    
    // Add event listener
    window.addEventListener('scroll', animateOnScroll);
    // Run once on page load
    animateOnScroll();
    
    // Add animation classes to elements
    document.querySelectorAll('section h2').forEach(heading => {
        heading.classList.add('animate-on-scroll');
    });
    
    document.querySelectorAll('.project-card, .skill-category, .form-group').forEach(element => {
        element.classList.add('animate-on-scroll');
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    
    // Add specific animations for each page
    if (document.querySelector('.about-grid')) {
        // About page animations
        anime({
            targets: '.profile-photo',
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 1000,
            easing: 'easeOutExpo',
            delay: 300
        });
    }
    
    if (document.querySelector('.projects-grid')) {
        // Projects page animations
        anime({
            targets: '.project-card',
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 800,
            easing: 'easeOutExpo',
            delay: anime.stagger(100)
        });
    }
    
    if (document.querySelector('.contact-container')) {
        // Contact page animations
        anime({
            targets: '.contact-info, .contact-form',
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 800,
            easing: 'easeOutExpo',
            delay: anime.stagger(100)
        });
    }
    
    if (document.querySelector('.login-container')) {
        // Login page animations
        anime({
            targets: '.login-container',
            opacity: [0, 1],
            scale: [0.9, 1],
            duration: 800,
            easing: 'easeOutExpo'
        });
    }
});

// Hero section animation with Anime.js
document.addEventListener('DOMContentLoaded', function() {
    // Animate the hero text
    anime.timeline({loop: false})
        .add({
            targets: '.hero h1',
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 1000,
            easing: 'easeOutExpo'
        })
        .add({
            targets: '.tagline',
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 800,
            easing: 'easeOutExpo'
        })
        .add({
            targets: '.cta-button',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 600,
            easing: 'easeOutExpo'
        });
    
    // Add hover effect to CTA button
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mouseenter', () => {
        anime({
            targets: ctaButton,
            scale: 1.05,
            duration: 300,
            easing: 'easeOutExpo'
        });
    });
    
    ctaButton.addEventListener('mouseleave', () => {
        anime({
            targets: ctaButton,
            scale: 1,
            duration: 300,
            easing: 'easeOutExpo'
        });
    });
});

// Loader animation
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    
    anime({
        targets: loader,
        opacity: 0,
        duration: 500,
        easing: 'easeOutExpo',
        complete: function() {
            loader.style.visibility = 'hidden';
        }
    });
});