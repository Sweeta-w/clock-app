
let hr = document.getElementById('hour');
let min = document.getElementById('min')

let sec = document.getElementById('sec');

function displayTime() {
  let date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hRot = 30*hh+mm/2;
  let mRot = 6*mm;
  let sRot = 6*ss;

  hr.style.transform = `rotate(${hRot}deg)`;
  min.style.transform = `rotate(${mRot}deg)`;
  sec.style.transform = `rotate(${sRot}deg)`
}

setInterval(displayTime, 1000)

// digital clock file

let hour = document.getElementById("dig-hour");
let minut = document.getElementById("dig-min");
let secs = document.getElementById("dig-sec");

function digitalTimer() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  hour.innerText = h;
  minut.innerText = m;
  secs.innerText = s

  setTimeout(()=> {
    digitalTimer()
  }, 1000)

};
digitalTimer()


