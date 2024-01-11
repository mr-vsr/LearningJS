const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

const randomColorGenerator = () => {
    const hexValues = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexValues[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalId;

const startChangingColor = () => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            document.body.style.backgroundColor = randomColorGenerator();
        }, 1000);
    }
};

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
};

start.addEventListener('click', startChangingColor);
stop.addEventListener('click', stopChangingColor);
