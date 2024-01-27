<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          *{
    margin: 0%;
    padding: 0;
    background-color:#2c3e50;
}
@font-face {
    font-family:digital-7 ;
    src: url("digital-7.ttf");
}
body{
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    color: white;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    gap: 10px;
}
.box{
    width: 250px;
    height: 100px;
    margin: 4%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: rgb(0, 0, 0);
    box-shadow: 0 0 1rem rgb(7, 7, 7);
}
.clock{
    position: relative;
    font-size: 40px;   
    text-shadow: 0 0 .1rem red; 
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3% 8%;
    color: black;
    border-radius: 10px;
    font-family: digital-7;
    box-shadow: 0 0 .5rem rgb(197, 252, 0);
    background-color: rgb(217, 255, 0);   
}
        </style>
    </head>
    <body>
    <div class="container">
    <h1>Digital clock</h1>
        <div class=box>
            <div class="clock" >00:00:00 PM</div>
        </div>
    </div>
    </body>
    <script>
        
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



    </script>
</html>
