let seconds = 10;

logTick = true;

let timer = setInterval(()=>{
    if (logTick) {
        console.log("tick");
    } else {
        console.log("tack");
    }

    logTick = !logTick;
}, 1000);


setTimeout(function () {
    clearInterval(timer);
}, seconds * 1000);

console.log("Guten Morgen");