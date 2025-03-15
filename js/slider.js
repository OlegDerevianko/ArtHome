document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('slider-modal');
    const modalTitle = document.getElementById('slider-modal-title');
    const sliderImage = document.getElementById('slider-image');
    const imageCounter = document.getElementById('image-counter');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentItem = null;
    let currentIndex = 0;

    document.querySelectorAll('.gallery__item').forEach(item => {
        item.addEventListener('click', function() {
            currentItem = this;
            currentIndex = 0;
            openModal();
        });
    });

    function openModal() {
        modal.style.display = 'block';
        updateModal();
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function updateModal() {
        const images = currentItem.querySelectorAll('.gallery__item-image');
        modalTitle.textContent = currentItem.querySelector('.gallery__item-title').textContent;
        imageCounter.textContent = `${currentIndex + 1} / ${images.length}`;
    
        // Плавное исчезновение текущего изображения
        sliderImage.style.opacity = 0;
    
        // После исчезновения обновляем src и плавно показываем новое изображение
        setTimeout(() => {
            sliderImage.src = images[currentIndex].src;
            sliderImage.style.opacity = 1;
        }, 300); // Задержка должна совпадать с длительностью анимации
    }
    
    // Добавляем стили для плавного перехода
    sliderImage.style.transition = 'opacity 0.2s ease-in-out';

    closeBtn.addEventListener('click', closeModal);

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateModal();
        }
    });

    nextBtn.addEventListener('click', function() {
        const images = currentItem.querySelectorAll('.gallery__item-image');
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateModal();
        }
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});