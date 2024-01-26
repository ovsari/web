var day=document.querySelector("#day");
var hour=document.querySelector("#hour");
var minute=document.querySelector("#minute");
var second=document.querySelector("#second");

function UpdateTime() {
    const currentYear=new Date().getFullYear();
const newYear=new Date(`April 30 ${currentYear} 00:00:00`);
//console.log(newYear);
const currentDate=new Date();
//console.log(currentDate);
const diff=newYear-currentDate;

const d=Math.floor(diff/1000/60/60/24);
//console.log(d);
const h=Math.floor(diff/1000/60/60)%24;
//console.log(h);
const m=Math.floor(diff/1000/60)%60;
//console.log(m);
const s=Math.floor(diff/1000)%60;
//console.log(s);
//console.log(d+" "+h+" "+m+" "+s);
day.innerHTML=d<10?"0"+d:d;
hour.innerHTML=h<10?"0"+h:h;
minute.innerHTML=m<10?"0"+m:m;
second.innerHTML=s<10?"0"+s:s;
}

setInterval(UpdateTime,1000);