console.log("running");

setInterval(displayTime, 100);

function displayTime() {
    let time = new Date().toLocaleTimeString();
    let clock = document.getElementById("clock");
    clock.innerText = time;
}