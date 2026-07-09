document.addEventListener('DOMContentLoaded', () => {
    const scrollTopButton = document.querySelector('.scroll-top');
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    const revealTargets = document.querySelectorAll('.content-box, .card, .stat-card, .news-card, .highlight, .hero-content, .page-heading');

    if (scrollTopButton) {
        const updateScrollButton = () => scrollTopButton.classList.toggle('visible', window.scrollY > 420);
        window.addEventListener('scroll', updateScrollButton);
        updateScrollButton();

        scrollTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    externalLinks.forEach(link => {
        if (!link.rel.includes('noopener')) {
            link.rel = `${link.rel} noopener noreferrer`.trim();
        }
    });

    if (revealTargets.length) {
        const observer = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observerInstance.unobserve(entry.target);
                }
            });
        }, { threshold: 0.18 });

        revealTargets.forEach(el => {
            el.classList.add('reveal-item');
            observer.observe(el);
        });
    }
});