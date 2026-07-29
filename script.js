lottie.loadAnimation({
    container: document.getElementById('animation-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/morning-tea.json'
});

const revealArea = document.getElementById('reveal-buttons');
const btnNo = document.getElementById('btn-no');
const btnYes = document.getElementById('btn-yes');
const revealSurprise = document.getElementById('reveal-surprise');

function dodgeNo() {
    const areaRect = revealArea.getBoundingClientRect();
    const btnRect = btnNo.getBoundingClientRect();
    const maxLeft = areaRect.width - btnRect.width;
    const maxTop = areaRect.height - btnRect.height;
    const newLeft = Math.random() * Math.max(maxLeft, 0) + btnRect.width / 2;
    const newTop = Math.random() * Math.max(maxTop, 0) + btnRect.height / 2;
    btnNo.style.left = `${newLeft}px`;
    btnNo.style.top = `${newTop}px`;
    btnNo.style.transform = 'translate(-50%, -50%)';
}

btnNo.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    dodgeNo();
});

btnNo.addEventListener('pointerenter', dodgeNo);

function heartBurst() {
    const hearts = ['💚', '🦌', '🐈‍⬛'];
    for (let i = 0; i < 16; i += 1) {
        const heart = document.createElement('span');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${1.5 + Math.random()}s`;
        heart.style.animationDelay = `${Math.random() * 0.4}s`;
        heart.style.fontSize = `${16 + Math.random() * 16}px`;
        document.body.appendChild(heart);
        heart.addEventListener('animationend', () => heart.remove());
    }
}

btnYes.addEventListener('click', () => {
    revealSurprise.textContent = 'Ottima scelta';
    heartBurst();
});