document.addEventListener('DOMContentLoaded', function() {
    // Меню для мобильных устройств
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Модальное окно с фразой
    const bamModal = document.getElementById("bamModal");
    const bamBtn = document.getElementById("bamBtn");
    const closeModal = document.querySelectorAll(".close-modal");
    
    bamBtn.onclick = function() {
        bamModal.style.display = "flex";
        document.body.style.overflow = "hidden";
    }
    
    closeModal.forEach(btn => {
        btn.onclick = function() {
            bamModal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
    
    window.onclick = function(event) {
        if (event.target == bamModal) {
            bamModal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
    
     const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Проверяем сохраненную тему в localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
    
    // Обработчик клика по переключателю
    themeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Летающие баги при клике
    document.addEventListener('click', function(e) {
        if (e.target.id !== 'bamBtn' && !e.target.closest('.modal') && e.target.id !== 'themeToggle') {
            const bugs = ['🐛', '💥', '🔥', '💻'];
            const randomBug = bugs[Math.floor(Math.random() * bugs.length)];
            
            const bug = document.createElement('div');
            bug.className = 'bug';
            bug.textContent = randomBug;
            bug.style.left = e.clientX + 'px';
            bug.style.top = e.clientY + 'px';
            bug.style.animation = 'fly 5s linear forwards';
            document.body.appendChild(bug);
            
            setTimeout(() => {
                bug.remove();
            }, 5000);
        }
    });
});
