logTick = true;

let timer = setInterval(()=>{
    if (logTick) {
        console.log("tick");
    } else {
        console.log("tack");
    }

    logTick = !logTick;
}, 1000);


