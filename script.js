document.addEventListener('DOMContentLoaded', () => {
    // Плавное появление блоков при скролле
    const blocks = document.querySelectorAll('.block');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    blocks.forEach(block => {
        block.style.opacity = '0';
        block.style.transform = 'translateY(20px)';
        block.style.transition = 'all 0.6s ease-out';
        observer.observe(block);
    });
}); 