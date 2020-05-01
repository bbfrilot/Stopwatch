const stopWatch = document.getElementById("stopWatch");
let timer = 0;
let interval;

function displaySeconds() {
  stopWatch.innerText = timer

}
 
  const startButton = document.getElementById('start')
  startButton.onclick = function() {
    startButton.setAttribute('disabled', true)
    interval = setInterval(function() {
    timer++
    displaySeconds()
  }, 1000);

  }
  document.getElementById('stop').onclick = function() {
    clearInterval(interval)
    startButton.removeAttribute('disabled')
    }

    document.getElementById('reset').onclick = function() {
      timer=0
      displaySeconds()
    }


