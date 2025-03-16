window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "flex"; // Показываем кнопку
    } else {
      scrollToTopBtn.style.display = "none"; // Скрываем кнопку
    }
  }
  
  document.getElementById("scrollToTopBtn").onclick = function() {
    document.body.scrollTop = 0; // Для Safari
    document.documentElement.scrollTop = 0; // Для других браузеров
  };