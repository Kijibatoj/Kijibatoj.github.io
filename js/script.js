// Estado de la aplicación
let currentLang = 'es';
let lastScrollTop = 0;
let isHeaderVisible = true;

// Función para cambiar el idioma
function changeLanguage(lang) {
    currentLang = lang;

    // Guardar preferencia en localStorage
    localStorage.setItem('preferredLang', lang);

    // Actualizar el atributo lang del HTML
    document.documentElement.lang = lang;

    // Actualizar todos los elementos con data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Actualizar botones de idioma
    updateLanguageButtons(lang);
}

// Actualizar estado visual de los botones de idioma
function updateLanguageButtons(lang) {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Smooth scroll mejorado
function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Ajuste por la nav fija

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Efecto de aparición al hacer scroll
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Efecto hover mejorado para las tarjetas de proyecto
function setupProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
}

// Detectar preferencia de color del sistema (opcional)
function detectColorScheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        // El usuario prefiere modo claro, pero mantenemos el tema oscuro por diseño
        console.log('User prefers light mode, but keeping dark theme by design');
    }
}

// Ocultar/mostrar header al hacer scroll
function setupHeaderHide() {
    const nav = document.querySelector('.main-nav');
    const scrollThreshold = 100; // Píxeles antes de activar el efecto

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Evitar valores negativos en navegadores móviles
        if (currentScroll < 0) return;

        // Si estamos cerca del top, siempre mostrar
        if (currentScroll < scrollThreshold) {
            nav.style.transform = 'translateY(0)';
            isHeaderVisible = true;
            lastScrollTop = currentScroll;
            return;
        }

        // Scrolling hacia abajo - ocultar header
        if (currentScroll > lastScrollTop && isHeaderVisible) {
            nav.style.transform = 'translateY(-100%)';
            isHeaderVisible = false;
        }
        // Scrolling hacia arriba - mostrar header
        else if (currentScroll < lastScrollTop && !isHeaderVisible) {
            nav.style.transform = 'translateY(0)';
            isHeaderVisible = true;
        }

        lastScrollTop = currentScroll;
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    // Configurar event listeners para los botones de idioma
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });

    // Cargar idioma preferido o usar español por defecto
    const savedLang = localStorage.getItem('preferredLang') || 'es';
    changeLanguage(savedLang);

    // Configurar navegación suave
    setupSmoothScroll();

    // Configurar animaciones al hacer scroll
    setupScrollAnimations();

    // Configurar efectos de las tarjetas
    setupProjectCards();

    // Detectar preferencias del sistema
    detectColorScheme();

    // Configurar ocultamiento del header al scroll
    setupHeaderHide();

    // Efecto de escritura en el título (opcional)
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        // Añadir un pequeño delay para el efecto visual inicial
        setTimeout(() => {
            heroTitle.style.opacity = '1';
        }, 100);
    }

    console.log('%c🌸 Portafolio cargado exitosamente', 'color: #fc013f; font-size: 16px; font-weight: bold;');
    console.log('%c✨ Idioma actual: ' + currentLang.toUpperCase(), 'color: #f5006a; font-size: 14px;');
});

// Efecto parallax suave en el hero (opcional)
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');

    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Prevenir comportamiento por defecto en enlaces de ejemplo
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('project-link') && e.target.getAttribute('href') === '#') {
        e.preventDefault();
        alert(translations[currentLang]['project-link'] || 'Este es un enlace de ejemplo');
    }
});
