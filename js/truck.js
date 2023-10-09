function animatePackage() {
    const packageIcon = document.querySelector('.package-icon');
    const truckIcon = document.querySelector('.truck-icon');
    const confirmationSection = document.querySelector('.order-confirmation');
    const orderSuccess = document.querySelector('.order-success');

    confirmationSection.style.opacity = '0';
    packageIcon.style.display = 'block';
    const distanceToMove = window.innerHeight - packageIcon.getBoundingClientRect().top;

    packageIcon.style.transform = `translateY(${distanceToMove - 47}px)`;

    setTimeout(() => {
        truckIcon.style.transform = 'translateX(140vw)';
        packageIcon.style.display = 'none';
        orderSuccess.style.display = 'flex';
    }, 2000);

    setTimeout(() => {
        confirmationSection.style.display = "none";
        orderSuccess.style.opacity = '1';
    }, 4000);
}

window.addEventListener('load', function() {
    const truck = document.querySelector('.truck-icon');
    truck.style.transform = 'translateX(67vw)';
});
