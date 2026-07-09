document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.theme-button');
    const stored = localStorage.getItem('solarTheme') || 'default';
    const themeClasses = ['theme-default', 'theme-neon', 'theme-retro'];

    function setTheme(theme) {
        document.body.classList.remove(...themeClasses);
        document.body.classList.add(`theme-${theme}`);
        localStorage.setItem('solarTheme', theme);

        buttons.forEach(button => {
            button.classList.toggle('active', button.dataset.theme === theme);
        });
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            setTheme(button.dataset.theme);
        });
    });

    if (buttons.length) {
        setTheme(stored);
    }
});
