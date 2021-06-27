particlesJS.load('particles-js', './particles.json', function () {
    console.log('callback - particles.js config loaded');
});
const instance = new Typewriter('#typewriter', {
    loop: true
});

instance.typeString("Hello World!")
    .pauseFor(1000)
    .deleteAll()
    .typeString('I am Shivam Choudhary.')
    .pauseFor(1000)
    .deleteChars(17)
    .typeString('an aspiring<br>Software Engineer.')
    .pauseFor(1000)
    .deleteChars(29)
    .typeString('currently learning<br>Android Development.')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Check out my work at<br>github.com/ShivamChoudhary17/')
    .pauseFor(1000)
    .deleteAll()
    .start();