//const d = new Date();
//const clock = document.getElementById('clock');
//clock.innerHTML = (d);



const rollIt = setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  const t = d.toLocaleTimeString();
  document.getElementById('clock').innerHTML = t;
}
