// Lightbox for gallery images (optional enhancement)
document.querySelectorAll('.gallery img').forEach(image => {
    image.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});
