var date = new Date();

var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
var dat = date.getDate();
var days = date.getMonth()+1;
var year = date.getFullYear();


setInterval(() => {
    document.getElementById('heading').innerHTML = ` Hours | Min | Sec`;

    document.getElementById('timers').innerHTML = ` ${hour}  : ${min}  :  ${sec} `;
    sec++;
    if(sec==60){
        sec=0;
        min++;
        if(min==60){
            min=0;
            hour++;
            if(hour==24){
                hour=0;
            }
    }
}
},1000)

document.getElementById('d').innerHTML = ` Date | Month | Year`;
document.getElementById('dates').innerHTML = ` ${dat} | ${days} | ${year}`;



const timeInput = document.getElementById("time");
const timer = document.getElementById("timer");

let intervalId;
let startTime;
let remtime;

function start() {
const INtime = parseInt(timeInput.value);
  if (INtime <= 0) {
    alert("Please enter a valid time in seconds.");
    return;
  }
  remtime = INtime;
  startTime = Date.now();
  intervalId = setInterval(() => {
    remtime--;
    if (remtime <= 0) {
      clearInterval(intervalId);
      timer.innerHTML = "00:00:00";
      startButton.disabled = false;
      
      return;
    }

    const hours = Math.floor(remtime / 3600);
    const minutes = Math.floor((remtime % 3600) / 60);
    const seconds = remtime % 60;
    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    timer.innerHTML = formattedTime;
  }, 1000);
  startButton.disabled = true;
}

function stop() {
    clearInterval(intervalId);
    remtime -= Math.floor((Date.now() - startTime) / 1000);
    startButton.disabled = false;
    
}

function reset() {
    clearInterval(intervalId);
    timer.innerHTML = "00:00:00";
    startButton.disabled = false;
    timeInput.value = "";
}

function pad(number) {
  return number < 10 ? "0" + number : number;
}