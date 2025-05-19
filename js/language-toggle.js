
document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');
    let currentLanguage = 'en'; // По умолчанию английский

    // Тексты для перевода
    const translations = {
        'en': {
            'hero-title': 'Realistic 3D visualization for your projects',
            'hero-description': 'Immerse yourself in the future of design with ArtHome! We create photorealistic 3D visualizations of interiors and exteriors, helping architects, designers and developers bring ideas to life.',
            'gallery-title': 'Our Works',
            'about-title': 'About ArtHome',
            'about-description': 'ArtHome is a team of professionals specializing in creating photorealistic 3D visualizations. We help designers, architects and developers bring their ideas to life by providing high-quality images that convey the atmosphere of the future space.',
            'contact-button': 'Contact Us',
            'footer-copyright': '© 2025 All rights reserved | ArtHome'
        },
        'ua': {
            'hero-title': 'Реалістична 3D-візуалізація для ваших проектів',
            'hero-description': 'Пориньте в майбутнє дизайну з ArtHome! Ми створюємо фотореалістичні 3D-візуалізації інтер\'єрів та екстер\'єрів, допомагаючи архітекторам, дизайнерам та забудовникам втілити ідеї в життя.',
            'gallery-title': 'Наші роботи',
            'about-title': 'Про ArtHome',
            'about-description': 'ArtHome – це команда професіоналів, яка спеціалізується на створенні фотореалістичних 3D-візуалізацій. Ми допомагаємо дизайнерам, архітекторам та забудовникам втілити їхні ідеї у життя, надаючи високоякісні зображення, які передають атмосферу майбутнього простору.',
            'contact-button': 'Зв\'язатися з нами',
            'footer-copyright': '© 2025 Всі права захищені | ArtHome'
        }
    };

    // Функция для перевода страницы
    function translatePage(lang) {
        document.querySelector('.hero__title-lang').textContent = translations[lang]['hero-title'];
        document.querySelector('.hero__title-description').textContent = translations[lang]['hero-description'];
        document.querySelector('.hero__button').textContent = translations[lang]['contact-button'];
        document.querySelector('.gallery__title').textContent = translations[lang]['gallery-title'];
        document.querySelector('.about__title').textContent = translations[lang]['about-title'];
        document.querySelector('.about__description').textContent = translations[lang]['about-description'];
        document.querySelector('.footer__template').textContent = translations[lang]['footer-copyright'];
        
        // Обновляем текст в модальном окне контактов
        const contactModal = document.querySelector('.contact-modal__title');
        if (contactModal) {
            contactModal.textContent = lang === 'en' ? 'Contact Us' : 'Зв\'язатися з нами';
        }
    }

    // Обработчик клика по кнопке
    languageToggle.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'en' ? 'ua' : 'en';
        languageToggle.textContent = currentLanguage === 'en' ? 'UA' : 'EN';
        translatePage(currentLanguage);
        
        // Сохраняем выбор языка в localStorage
        localStorage.setItem('language', currentLanguage);
    });

    // Проверяем сохраненный язык при загрузке
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        languageToggle.textContent = currentLanguage === 'en' ? 'UA' : 'EN';
        translatePage(currentLanguage);
    }
});
