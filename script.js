const wheel = new Winwheel({
    'numSegments': 8,
    'outerRadius': 200,
    'segments': [
        { 'fillStyle': '#eae56f', 'text': '10% OFF' },
        { 'fillStyle': '#89f26e', 'text': 'FREE' },
        { 'fillStyle': '#7de6ef', 'text': '20% OFF' },
        { 'fillStyle': '#e7706f', 'text': 'You WON' },
        { 'fillStyle': '#f9c74f', 'text': 'Buy One, Get One' },
        { 'fillStyle': '#f94144', 'text': '15% OFF' },
        { 'fillStyle': '#f3722c', 'text': 'You WON' },
        { 'fillStyle': '#f8961e', 'text': 'Free Gifts' }
    ],
    'animation': {
        'type': 'spinToStop',
        'duration': 5,
        'spins': 8,
        'callbackFinished': 'alertPrize()',
        'callbackAfter': 'playSound()'
    }
});

document.getElementById('spinButton').addEventListener('click', () => {
    wheel.startAnimation();
});

function alertPrize() {
    const winningSegment = wheel.getIndicatedSegment();
    document.getElementById('result').innerText = `You won: ${winningSegment.text}`;
    document.getElementById('claimMessage').style.display = 'block';
    if (winningSegment.text.includes('WON')) {
        confetti.start();
    }
}

function playSound() {
    const audio = new Audio('click-sound.mp3');
    audio.play();
}
