// Получаем элементы
const modal = document.getElementById("modal");
const contactUsButton = document.querySelector(".hero__button");
const contactLinks = document.querySelectorAll(".contact__modal");
const closeModalButton = document.querySelector(".contact-modal__close");
const contactForm = document.getElementById("contactForm");

// Функция для открытия модального окна
function openModal() {
    modal.style.display = "block";
}

// Функция для закрытия модального окна
function closeModal() {
    modal.style.display = "none";
}

// Открытие модального окна по клику на кнопку "Contact Us"
if (contactUsButton) {
    contactUsButton.addEventListener("click", (e) => {
        e.preventDefault();
        openModal();
    });
}

// Открытие модального окна по клику на ссылки "Contact"
if (contactLinks) {
    contactLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            openModal();
        });
    });
}

// Закрытие модального окна по клику на кнопку закрытия
if (closeModalButton) {
    closeModalButton.addEventListener("click", closeModal);
}

// Закрытие модального окна по клику вне его области
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Закрытие модального окна по нажатию клавиши Esc
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
        closeModal();
    }
});

// Отправка формы через EmailJS
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Параметры для отправки
        const serviceID = "Form-contact"; // Замените на ваш Service ID
        const templateID = "template_wv46rsy"; // Замените на ваш Template ID

        // Отправка формы
        emailjs.sendForm(serviceID, templateID, contactForm)
            .then(() => {
                alert("Your message has been sent successfully!");
                contactForm.reset(); // Очистка формы
                closeModal(); // Закрытие модального окна
            }, (error) => {
                alert("Oops... Something went wrong. Please try again.");
                console.error("Error:", error);
            });
    });
}