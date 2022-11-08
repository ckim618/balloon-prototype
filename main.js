const lottieContainer = document.getElementById('container');

const balloonFullSequence = bodymovin.loadAnimation({
    container: lottieContainer,
    path: '/lottie/22-1108_Coachella_balloon-line.json',
    renderer: 'svg',
    loop: false,
    autoplay: true,
    name: 'Full Sequence',
});

function animatebodymovin(duration) {
    const scrollPosition = window.scrollY;
    const maxFrames = balloonFullSequence.totalFrames;

    const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));

    balloonFullSequence.goToAndStop(frame, true);
}
const onScroll = () => {
    animatebodymovin(2000);
};

document.addEventListener('scroll', onScroll);
