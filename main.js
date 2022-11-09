const lottieContainer = document.getElementById('container');
let animationIsComplete = false;

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
}, 2300);

console.log(bodymovin);

balloonFullSequence.addEventListener('complete', () => {
    animationIsComplete = true;
});

// while (!animationIsComplete) {
//     console.log(balloonFullSequence.progress);
// }

function animatebodymovin(duration) {
    bodymovin.unfreeze();
    const scrollPosition = window.scrollY + 200;
    const maxFrames = balloonFullSequence.totalFrames;

    const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));

    balloonFullSequence.goToAndStop(frame, true);
}
const onScroll = () => {
    // if (!animationIsComplete) return;

    animatebodymovin(2000);
};

document.addEventListener('scroll', onScroll);
