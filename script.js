
function runClock() {
    var time=new Date();
    var hour=time.getHours();
    var min=time.getMinutes();
    var sec=time.getSeconds();
    var apm="AM";
    if (hour>12){
    hour=hour-12;
    apm="PM"
}
    else if(hrs==0){
    apm="AM"
}
hour= hour<10 ? "0"+hour:hour ;
min= min<10 ? "0"+min:min ;
sec= sec<10 ? "0"+sec:sec ;
    var clock=document.querySelector(".clock");
    clock.innerHTML=`${hour}:${min}:${sec} ${apm}`
    setInterval(runClock,1000);
}
runClock();


