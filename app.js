var mins = 00;
var secs = 00;
var milisecs = 00;
var minsHeading = document.getElementById("mins");
var secsHeading = document.getElementById("secs");
var milisecsHeading = document.getElementById("milisecs");
var here;
function timing(){
    milisecs++
    milisecsHeading.innerHTML = milisecs;
    if(milisecs >= 100){
        secs++
        secsHeading.innerHTML = secs
        milisecs = 00
    }
    else if(secs >= 60){
        mins++
        minsHeading.innerHTML = mins
        secs = 00
    }
}
function start(){
   here =  setInterval(timing, 10)
  var now = document.getElementById("start")
  now.disabled = true
  now.style.backgroundColor = 'white'
  
    
}
function stop(){
    clearInterval(here)
    var now = document.getElementById("start")
  now.disabled = false
  
}
function reset(){
    mins = 00
    milisecs = 00
    secs = 00
    minsHeading.innerHTML = mins
    secsHeading.innerHTML = secs
    milisecsHeading.innerHTML = milisecs
    clearInterval(here)
    var now = document.getElementById("start")
  now.disabled = false
}