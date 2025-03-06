document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Показываем кнопку прокрутки вверх
    window.addEventListener('scroll', function() {
        scrollToTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
    });

    // Прокрутка вверх
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Навигация по кнопкам
    document.getElementById('whyUsButton').addEventListener('click', function() {
        document.getElementById('why-us-section').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('downloadButton').addEventListener('click', function() {
        window.location.href = 'https://raw.githubusercontent.com/Pomidorkaeg/afriklanegtfd/main/LuxVar.zip';
    });

    document.getElementById('openSiteButton').addEventListener('click', function() {
        window.location.href = 'https://raw.githubusercontent.com/Pomidorkaeg/afriklanegtfd/main/LuxVar.zip';
    });

    // Управление модальными окнами
    function openModal(modalId) {
        document.querySelectorAll('.modal').forEach(modal => modal.style.display = 'none');
        document.getElementById(modalId).style.display = 'block';
        document.querySelector('.modal-overlay').style.display = 'block';
    }

    function closeModal() {
        document.querySelectorAll('.modal').forEach(modal => modal.style.display = 'none');
        document.querySelector('.modal-overlay').style.display = 'none';
    }

    document.getElementById('instructionButton').addEventListener('click', function() {
        openModal('instructionModal');
    });

    document.getElementById('videoInstructionButton').addEventListener('click', function() {
        window.open('https://youtu.be/5NHAoFDQQJY', '_blank');
    });

    document.getElementById('socialMediaButton').addEventListener('click', function() {
        openModal('socialMediaModal');
    });

    document.querySelectorAll('.close').forEach(button => {
        button.addEventListener('click', closeModal);
    });

    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal-overlay')) {
            closeModal();
        }
    });
});