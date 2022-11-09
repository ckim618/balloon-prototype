const lottieContainer = document.getElementById('container');
let animationIsComplete = false;

const balloonFullSequence = bodymovin.loadAnimation({
    container: lottieContainer,
    path: '/lottie/22-1108_Coachella_balloon-line.json',
    renderer: 'svg',
    loop: false,
    autoplay: true,
    name: 'Full Sequence',
});

balloonFullSequence.addEventListener('complete', () => {
    animationIsComplete = true;
});

function animatebodymovin(duration) {
    const scrollPosition = window.scrollY + 180;
    const maxFrames = balloonFullSequence.totalFrames;

    const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));

    balloonFullSequence.goToAndStop(frame, true);
}
const onScroll = () => {
    if (!animationIsComplete) return;

    animatebodymovin(2000);
};

document.addEventListener('scroll', onScroll);
