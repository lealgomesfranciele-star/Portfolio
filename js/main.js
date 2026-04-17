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

// --- Renderização dinâmica de Projetos ---
const projetos = [
    { id: 1, titulo: 'Projeto Comunitário', descricao: 'Participação em ação voltada ao cuidado com o meio ambiente e engajamento local, com foco em colaboração e impacto social.', tags: ['Voluntariado', 'Natureza', 'Impacto'], emoji: '🌱' },
    { id: 2, titulo: 'Trabalho Acadêmico', descricao: 'Pesquisa em grupo desenvolvida durante o curso, exercitando trabalho colaborativo e comunicação eficaz.', tags: ['Pesquisa', 'Grupo', 'Apresentação'], emoji: '📚' },
    { id: 3, titulo: 'Capacitação Profissional', descricao: 'Participação em cursos e workshops para aprimoramento de habilidades e atualização contínua.', tags: ['Aprendizado', 'Desenvolvimento'], emoji: '🌸' },
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('projetosContainer');
    if (!container) return;
    projetos.forEach(p => {
        const card = document.createElement('div');
        card.className = 'projeto-card';
        card.setAttribute('data-anim', '');
        card.innerHTML = `
            <div class="projeto-emoji">${p.emoji}</div>
            <h3 class="projeto-titulo">${p.titulo}</h3>
            <p class="projeto-descricao">${p.descricao}</p>
            <div class="projeto-tags">${p.tags.map(t => `<span class="projeto-tag">${t}</span>`).join('')}</div>
        `;
        container.appendChild(card);
    });
});
