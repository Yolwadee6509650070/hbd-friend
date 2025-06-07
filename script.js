document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        
        const size = Math.random() * 5 + 2; 
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        const duration = Math.random() * 2 + 1; 
        sparkle.style.animationDuration = `${duration}s`;
        
        body.appendChild(sparkle);

        sparkle.addEventListener('animationend', () => {
            sparkle.remove();
        });
    }

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
        .sparkle {
            position: absolute;
            background-color: #ffd700; /* Gold color for sparkle */
            border-radius: 50%;
            opacity: 0;
            animation: twinkle 1s forwards infinite alternate; 
            pointer-events: none; 
            z-index: 5; 
        }

        @keyframes twinkle {
            0% { opacity: 0; transform: scale(0.5); }
            50% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(0.5); }
        }
    `;
    document.head.appendChild(styleSheet);

    setInterval(createSparkle, 200); 
});