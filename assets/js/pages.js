document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img');
    const thumbnails = document.querySelectorAll('.thumbnail-nav img');
    let currentImageIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
            thumbnails[i].classList.toggle('active', i === index);
        });
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            currentImageIndex = index;
            showImage(currentImageIndex);
        });
    });
});

const toggleButton = document.querySelector('.nav-toggle');
const sidebar = document.querySelector('.sidebar');
toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.main-nav a, .secondary-nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href.includes(currentPath)) {
            link.classList.add('current-page');
        }
    });
});