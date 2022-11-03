const lottieContainer = document.getElementById('container');
const lottieContainer2 = document.getElementById('container2');

const balloonIntroSequence = bodymovin.loadAnimation({
    container: lottieContainer,
    renderer: 'svg',
    loop: false,
    path: '/lottie/22-1026_Coachella_balloon-line--intro-sequence-1440.json',
    autoplay: true,
    name: 'Intro Sequence',
});

const balloonFullSequence = bodymovin.loadAnimation({
    container: lottieContainer2,
    path: '/lottie/22-1026_Coachella_balloon-line--full-sequence-1440.json',
    renderer: 'svg',
    loop: false,
    autoplay: true,
    name: 'Full Sequence',
});

balloonIntroSequence.addEventListener('complete', () => {
    lottieContainer.classList.add('hide');
    lottieContainer2.classList.remove('hide');
});

function animatebodymovin(duration) {
    const scrollPosition = window.scrollY;
    const maxFrames = balloonFullSequence.totalFrames;

    const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));

    balloonFullSequence.goToAndStop(frame, true);
}
const onScroll = () => {
    console.log('scrolling');
    animatebodymovin(1000);
};

document.addEventListener('scroll', onScroll);
