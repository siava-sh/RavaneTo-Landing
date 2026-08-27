const root = document.documentElement;

const isTouchDevice =
    window.matchMedia("(hover: none)").matches ||
    window.matchMedia("(pointer: coarse)").matches;

let targetX = window.innerWidth * 0.5;
let targetY = window.innerHeight * 0.45;

let currentX = targetX;
let currentY = targetY;

let time = 0;

window.addEventListener("pointermove", (event) => {
    if (isTouchDevice) return;

    targetX = event.clientX;
    targetY = event.clientY;
});

function animate() {

    time += 0.0025;

    if (isTouchDevice) {

        /*
         * Autonomous light.
         *
         * Slow movement around the page,
         * deliberately avoiding a mechanical path.
         */

        const width = window.innerWidth;
        const height = window.innerHeight;

        targetX =
            width * (
                0.5 +
                Math.sin(time * 0.75) * 0.30 +
                Math.sin(time * 0.31) * 0.10
            );

        targetY =
            height * (
                0.48 +
                Math.cos(time * 0.62) * 0.22 +
                Math.sin(time * 0.27) * 0.08
            );
    }

    currentX += (targetX - currentX) * 0.035;
    currentY += (targetY - currentY) * 0.035;

    root.style.setProperty(
        "--pointer-x",
        `${currentX}px`
    );

    root.style.setProperty(
        "--pointer-y",
        `${currentY}px`
    );

    requestAnimationFrame(animate);
}

animate();