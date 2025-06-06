

function displayTime() {
  let hr = document.getElementById('hour');
  let min = document.getElementById('min')

  let sec = document.getElementById('sec');

  if (hr && min && sec) {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRot = 30 * hh + mm / 2;
    let mRot = 6 * mm;
    let sRot = 6 * ss;

    hr.style.transform = `rotate(${hRot}deg)`;
    min.style.transform = `rotate(${mRot}deg)`;
    sec.style.transform = `rotate(${sRot}deg)`

  }

}

setInterval(displayTime, 1000)

// digital clock file



function digitalTimer() {
  let hour = document.getElementById("dig-hour");
  let minut = document.getElementById("dig-min");
  let secs = document.getElementById("dig-sec");
  if (hour && minut && secs) {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    hour.innerText = h;
    minut.innerText = m;
    secs.innerText = s

    setTimeout(() => {
      digitalTimer()
    }, 1000)

  }


};
digitalTimer()


function closeSidebar() {
  let cl = document.querySelector('.sidebar');
  if (cl) {
    cl.style.display = 'none'
  }
}

function displaySidebar() {
  let cl = document.querySelector('.sidebar');
  if (cl) {
    cl.style.display = 'block'
  }
}

let timer = document.querySelector('.timer');
let stop = document.getElementById("stopbtn");
let start = document.getElementById("startbtn");
let reset = document.getElementById("resetbtn");
let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

if (start) {
  start.addEventListener('click', function() {
    if (timerId !== null) {
      clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
  })
}
if (stop) {
  stop.addEventListener('click', function() {
    clearInterval(timerId)
  })
}

if(reset) {
  reset.addEventListener('click', () => {
    clearInterval(timerId);
    msec = secs = mins = 0
    timer.innerHTML = `00 : 00 : 00`
  })
}


function startTimer() {
  msec++;
  if (msec == 100) {
    msec = 0;
    secs++;
    if (secs == 60) {
      secs = 0;
      mins++
    }
  }

  let msecString = msec < 10 ?  `0${msec}` : msec;
  let secString = secs < 10 ?  `0${secs}` : secs;
  let minsString = mins < 10 ?  `0${mins}` : mins;

  timer.innerHTML = `${minsString} : ${secString} : ${msecString}`


}