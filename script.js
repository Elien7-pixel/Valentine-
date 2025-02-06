document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const ofCourseBtn = document.getElementById('ofCourseBtn');
    const mainContent = document.getElementById('mainContent');
    const thankYouMessage = document.getElementById('thankYouMessage');

    function handleResponse() {
        mainContent.classList.add('hidden');
        thankYouMessage.classList.remove('hidden');
        startRoseAnimation();
    }

    yesBtn.addEventListener('click', handleResponse);
    ofCourseBtn.addEventListener('click', handleResponse);

    function createRose() {
        const rose = document.createElement('div');
        rose.classList.add('rose');
        rose.innerHTML = '🌹';
        rose.style.left = Math.random() * window.innerWidth + 'px';
        rose.style.top = Math.random() * window.innerHeight + 'px';
        document.body.appendChild(rose);
    }

    function startRoseAnimation() {
        const roseInterval = setInterval(createRose, 100);
        setTimeout(() => {
            clearInterval(roseInterval);
        }, 60000);
    }
});
