document.querySelector('.shipping-btn').addEventListener('click', function() {
    const text = document.querySelector('.shipping-text');
    const truck = document.querySelector('.shipping-truck');
    const road = document.querySelector('.shipping-road');
    const newText = document.querySelector('.shipping-newText');

    // Fade out text
    text.style.opacity = '0';

    // Move truck from left to right
    truck.style.transform = 'translateY(-50%) translateX(350px)';

    // Move road from right to left
    road.style.transform = 'translateY(-50%) translateX(-385px)';
});

// Listen for the end of the transition on the truck or road
document.querySelector('.shipping-truck').addEventListener('transitionend', function() {
    const newText = document.querySelector('.shipping-newText');
    newText.style.opacity = '1';
});