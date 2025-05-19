document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('slider-modal');
    const modalTitle = document.getElementById('slider-modal-title');
    const imageCounter = document.getElementById('image-counter');
    const closeBtn = document.querySelector('.close');
    const sliderContent = document.querySelector('.slider-modal-content');
    
    let currentItem = null;
    let currentIndex = 0;
    let sliderImage = document.getElementById('slider-image');
  
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
        if (sliderImage) sliderImage.style.opacity = 0;
    
        // После исчезновения обновляем src и плавно показываем новое изображение
        setTimeout(() => {
            const imgSrc = images[currentIndex].src;
            // Создаем новую ссылку с изображением
            const newLink = document.createElement('a');
            newLink.href = imgSrc;
            newLink.target = '_blank';
            newLink.rel = 'noopener noreferrer';
            
            const newImg = document.createElement('img');
            newImg.id = 'slider-image';
            newImg.src = imgSrc;
            newImg.alt = 'design';
            newImg.style.opacity = '1';
            newImg.style.transition = 'opacity 0.1s ease-in-out';
            
            newLink.appendChild(newImg);
            
            // Заменяем только изображение, сохраняя кнопки
            const slider = document.querySelector('.slider');
            const oldLink = slider.querySelector('a');
            if (oldLink) {
                slider.replaceChild(newLink, oldLink);
            } else {
                // Если это первая загрузка, вставляем между кнопками
                const nextBtn = slider.querySelector('.next');
                slider.insertBefore(newLink, nextBtn);
            }
            
            sliderImage = newImg;
        }, 100);
    }
  
    // Обработчики для кнопок (привязываем один раз при загрузке)
    document.querySelector('.prev').addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateModal();
        }
    });
  
    document.querySelector('.next').addEventListener('click', function() {
        const images = currentItem.querySelectorAll('.gallery__item-image');
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateModal();
        }
    });
  
    closeBtn.addEventListener('click', closeModal);
  
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
  
    // Инициализация стиля для плавного перехода
    if (sliderImage) {
        sliderImage.style.transition = 'opacity 0.1s ease-in-out';
    }
  });