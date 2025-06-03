

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
  if(cl){
    cl.style.display = 'none'
  }
}

function displaySidebar() {
  let cl = document.querySelector('.sidebar');
  if(cl){
    cl.style.display = 'block'
  }
}