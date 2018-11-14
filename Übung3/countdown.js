let counter = 10;

let timer = setInterval(() => {

    console.log(counter);
    counter--;

}, 1000);


setTimeout(function () {
    clearInterval(timer);
}, counter * 1200);

