
document.addEventListener('DOMContentLoaded', function () {
    const welcomeMessage = document.querySelector('#menu h2');
    welcomeMessage.textContent = 'Explore Our Delicious Menu';
});


document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSectionId = this.getAttribute('href');
        const targetSection = document.querySelector(targetSectionId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
