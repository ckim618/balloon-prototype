const lottieContainer = document.getElementById('container');
const inner = document.querySelector('.inner');

const balloonFullSequence = bodymovin.loadAnimation({
    container: lottieContainer,
    path: '/lottie/22-1118_Coachella_balloon-line.json',
    renderer: 'svg',
    loop: false,
    autoplay: true,
    name: 'Full Sequence',
});

balloonFullSequence.addEventListener('DOMLoaded', () => {
    setTimeout(() => {
        bodymovin.freeze();
    }, 2900);
});

function animatebodymovin() {
    const offset =
        inner.getBoundingClientRect().top +
        window.scrollY +
        inner.getBoundingClientRect().height;
    const scrollPosition = window.scrollY;
    const maxFrames = balloonFullSequence.totalFrames - 90;
    const frame = Math.ceil(maxFrames * (scrollPosition / offset) + 90);

    bodymovin.unfreeze();

    balloonFullSequence.goToAndStop(frame, true);
}
const onScroll = () => {
    animatebodymovin();
};

document.addEventListener('scroll', onScroll);
