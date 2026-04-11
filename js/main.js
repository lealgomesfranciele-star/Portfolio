// ===== TOPNAV SCROLL =====
const topnav = document.getElementById('topnav');
window.addEventListener('scroll', () => {
    topnav.classList.toggle('scrolled', window.scrollY > 40);
});

// ===== MOBILE MENU =====
const toggleMenu = document.getElementById('toggleMenu');
const topnavLinks = document.getElementById('topnavLinks');
toggleMenu.addEventListener('click', () => {
    topnavLinks.classList.toggle('open');
    toggleMenu.classList.toggle('active');
});
topnavLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        topnavLinks.classList.remove('open');
        toggleMenu.classList.remove('active');
    });
});

// ===== SCROLL REVEAL =====
const animEls = document.querySelectorAll('[data-anim]');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('revealed'), i * 100);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });
animEls.forEach(el => revealObserver.observe(el));

// ===== SKILL CIRCLES =====
const skillCircles = document.querySelectorAll('.sl-progress');
const circumference = 2 * Math.PI * 42; // r=42
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const circle = entry.target;
            const percent = parseInt(circle.getAttribute('data-percent'), 10);
            const offset = circumference - (circumference * percent / 100);
            circle.style.strokeDasharray = circumference;
            circle.style.strokeDashoffset = offset;
            skillObserver.unobserve(circle);
        }
    });
}, { threshold: 0.4 });
skillCircles.forEach(c => skillObserver.observe(c));

// ===== SMOOTH ANCHOR SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.topnav-links a');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
});
