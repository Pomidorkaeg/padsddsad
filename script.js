document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Показываем кнопку, когда пользователь прокрутил страницу вниз
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Прокрутка вверх при нажатии на кнопку
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    document.querySelector('.why-us-button').addEventListener('click', function() {
        const section = document.getElementById('why-us-section');
        section.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('downloadButton').addEventListener('click', function() {
        window.location.href = 'https://raw.githubusercontent.com/Pomidorkaeg/afriklanegtfd/main/LuxVar.zip';
    });

    document.getElementById('openSiteButton').addEventListener('click', function() {
        window.location.href = 'https://raw.githubusercontent.com/Pomidorkaeg/afriklanegtfd/main/LuxVar.zip';
    });

    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        const overlay = document.querySelector('.modal-overlay');

        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });

        modal.style.display = 'block';
        overlay.style.display = 'block';
    }

    function closeModal() {
        const overlay = document.querySelector('.modal-overlay');
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
        overlay.style.display = 'none';
    }

    document.querySelector('.instruction-button').addEventListener('click', function() {
        openModal('instructionModal');
    });

    document.getElementById('videoInstructionButton').addEventListener('click', function() {
        window.open('https://youtu.be/5NHAoFDQQJY', '_blank');
    });

    document.querySelector('.social-media-button').addEventListener('click', function() {
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