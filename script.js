const stopWatch = document.querySelector("#stopwatch");

//stopWatch.innerText = timer; 

 //let timer = parseInt(0); 

  

var timer = 0;

let seconds = Math.floor (timer % 60) 
let minutes = Math.floor (timer % 3600/60);       
let hours = Math.floor (timer/3600);                         




const start = document.querySelector(".start");
start.addEventListener("click", function(){ 
  alert("started"); });  //just for test//
const stop = document.querySelector(".stop");
stop.addEventListener("click", function(){
  alert("stopped"); }); //just for test//
const reset = document.querySelector(".reset");
reset.addEventListener("click", function(){
  alert("i am reset"); }); //just for test//

