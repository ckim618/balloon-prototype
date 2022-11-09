const lottieContainer = document.getElementById('container');
const inner = document.querySelector('.inner');

const balloonFullSequence = bodymovin.loadAnimation({
    container: lottieContainer,
    path: '/lottie/22-1109_Coachella_balloon-line.json',
    renderer: 'svg',
    loop: false,
    autoplay: true,
    name: 'Full Sequence',
});

setTimeout(() => {
    bodymovin.freeze();
}, 2100);

function animatebodymovin() {
    bodymovin.unfreeze();
    const scrollPosition = window.scrollY;
    const maxFrames = balloonFullSequence.totalFrames - 70;

    const frame =
        maxFrames * (scrollPosition / inner.getBoundingClientRect().height) +
        70;

    balloonFullSequence.goToAndStop(frame, true);
}
const onScroll = () => {
    animatebodymovin();
};

document.addEventListener('scroll', onScroll);
