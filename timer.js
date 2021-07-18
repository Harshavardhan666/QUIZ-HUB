let startingminutes = 11;
let startinghours = 0;
let time = (startinghours * 3600) + (startingminutes * 60);

const countdown1 = document.getElementById('countdown');

setInterval(updatecountdown, 1000);

function updatecountdown() {
    let minutes = Math.floor(time / 60);
    let hours = Math.floor(minutes / 60);
    let seconds = time % 60;

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdown1.innerHTML = `${hours}:${minutes}:${seconds}`;
    time--;
    if (hours == 0 && minutes < 10) {
        let ele = document.getElementById("text-timer");
        ele.style.color = "red";
    }
    if(hours==0 && minutes == 0 && seconds <= 0)
    {
      let val = alert("Time's Up!, Your Test Got Automatically Submitted");
      if(val)
      {
          window.location.replace("studenttests.html");
      }else{
          window.location.replace("studenttests.html");
      }
    }
}