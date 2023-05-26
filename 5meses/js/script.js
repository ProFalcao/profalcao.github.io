window.addEventListener("DOMContentLoaded", (event) => {
    
    const button = document.querySelector("#runaway-btn");
    const button2 = document.querySelector("#static-btn");

    var count = 0;
    const animateMove = (element, prop, pixels) =>
    anime({
        targets: element,
        [prop]: `${pixels}px`,
        easing: "easeOutQuint"
    });

    ["mouseover", "click"].forEach(function (el) {
        button.addEventListener(el, function (event) {
            const top = getRandomNumber(window.innerHeight - this.offsetHeight);
            const left = getRandomNumber(window.innerWidth - this.offsetWidth);

            animateMove(this, "left", left).play();
            animateMove(this, "top", top).play();
            count = count + 1;
            console.log(count);

            if ((count >= 5) & (count < 8)) {
            button.style.transform = "scale(0.5,0.5)";
            console.log("opa maior que 5");
            } else if ((count >= 8) & (count < 10)) {
            button.style.transform = "scale(0.5,0.5)";
            button.style.opacity = "0.3";
            console.log("opa maior que 8");
            } else if (count >= 10) {
            button.style.transform = "scale(1,1)";
            button.style.opacity = "0";
            button2.style.transform = "scale(4.13,4.3)";
            button2.style.left = "44%";
            button2.style.zIndex = "10";
            }
        });
    });

    const getRandomNumber = (num) => {
    return Math.floor(Math.random() * (num + 1));
    };

    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml1 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({
        loop: 1
    }).add({
        targets: '.ml1 .letter',
        scale: [0.3,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: (el, i) => 70 * (i+1)
    }).add({
        targets: '.ml1 .line',
        scaleX: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 700,
        offset: '-=875',
        delay: (el, i, l) => 80 * (l - i)
    }).add({
        targets: '.arrow',
        opacity: 1,
        translateY: 50,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

    const wave1 = "M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 180.51V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V108.306Z",
      wave2 = "M0 250L50 244.048C100 238.095 200 226.19 300 226.19C400 226.19 500 238.095 600 232.143C700 226.19 800 202.381 900 196.429C1000 190.476 1100 202.381 1150 208.333L1200 214.286V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z",
      wave3 = "M0 250L50 238.095C100 226.19 200 202.381 300 166.667C400 130.952 500 83.3333 600 101.19C700 119.048 800 202.381 900 214.286C1000 226.19 1100 166.667 1150 136.905L1200 107.143V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z",
      wave4 = "M0 125L50 111.111C100 97.2222 200 69.4444 300 97.2222C400 125 500 208.333 600 236.111C700 263.889 800 236.111 900 229.167C1000 222.222 1100 236.111 1150 243.056L1200 250V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V125Z";

    anime({
    targets: '.wave-top > path',
    easing: 'linear',
    duration: 7500,
    loop: true,
    d: [
        { value: [wave1, wave2] },
        { value: wave3 },
        { value: wave4 },
        { value: wave1 },
    ],
    });

    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml3');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
    .add({
        targets: '.ml3 .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 2200,
        delay: (el, i) => 100 * (i+1)
    }).add({
        targets: '.ml3',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

    anime.timeline({loop: true})
    .add({
        targets: '.heart',
        fontSize: [16,20],
        translateY: -5,
        duration: 600,
        easing: "easeOutExpo",
        delay: 600
    }).add({
        targets: '.heart',
        fontSize: [20,16],
        translateY: 0,
        duration: 600,
        easing: "easeOutExpo",
        delay: 100
    });

    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml12');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
    .add({
        targets: '.ml12 .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 500 + 30 * i
    }).add({
        targets: '.ml12 .letter',
        translateX: [0,-30],
        opacity: [1,0],
        easing: "easeInExpo",
        duration: 1100,
        delay: (el, i) => 100 + 30 * i
    });

});
