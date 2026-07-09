document.addEventListener('DOMContentLoaded', () => {
    const scrollTopButton = document.querySelector('.scroll-top');
    const externalLinks = document.querySelectorAll('a[target="_blank"]');

    if (scrollTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                scrollTopButton.classList.add('visible');
            } else {
                scrollTopButton.classList.remove('visible');
            }
        });

        scrollTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    externalLinks.forEach(link => {
        if (!link.rel.includes('noopener')) {
            link.rel = `${link.rel} noopener noreferrer`.trim();
        }
    });
});