const clock = document.getElementById('clock');


// setInterval(callback,interval) =>This function takes a call back and a time intereval in milliseconds and calls the callback after the interval continuously.
setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)