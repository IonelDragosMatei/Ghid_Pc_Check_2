document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.querySelector('#color_mode');
    const body = document.body;
    const nav = document.querySelector('nav');
    const footer = document.querySelector('footer');

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        nav.classList.add('dark-mode');
        footer.classList.add('dark-mode');
        themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', function () {
        if (themeToggle.checked) {
            body.classList.add('dark-mode');
            nav.classList.add('dark-mode');
            footer.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            nav.classList.remove('dark-mode');
            footer.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});
