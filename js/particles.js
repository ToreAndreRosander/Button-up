const img = new Image();
img.src = './media/portrait3.png';

const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
const particles = [];
const particleCount = 100; // Number of particles

canvas.width = 200;
canvas.height = 100;

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 4 - 1.5;
        this.speedY = Math.random() * 4 - 1.5;
        this.color = color;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 3);
        ctx.closePath();
        ctx.fill();
    }
}

function createParticles() {
    const scale = 1;
    const translateX = 50; // The amount the image moves on hover

    // Draw the image onto the canvas considering the hover transformation
    ctx.drawImage(img, translateX, 0, canvas.width * scale, canvas.height * scale);

    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

    for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
            const i = (y * 4) * canvas.width + x * 4;
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const a = data[i + 3];

            if (a >= 125) { // Only consider non-transparent pixels
                const pixelColor = `rgba(${r},${g},${b},${a})`;
                particles.push(new Particle(x, y, pixelColor));
            }
        }
    }
}



function handleParticles() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        if (particles[i].size <= 0.2) {
            particles.splice(i, 1);
            i--;
        }
    }
}
document.querySelector('.portfolio-button').addEventListener('click', function() {
    this.classList.add('image-hidden');
    createParticles();
});

document.querySelector('.portfolio-button').addEventListener('click', createParticles);
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}


animate();
