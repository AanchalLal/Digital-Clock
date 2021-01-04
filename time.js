window.onload=function()
{
  printTime();
};
 
function printTime()
{
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  var day = d.getDay();
  var date = d.getDate();
  var month = d.getMonth();
  var year = d.getFullYear();   

switch(day)
{
  case 0:
    day="SUNDAY";
    break;
  case 1:
    day="MONDAY";
    break;
  case 2:
    day="TUESDAY";
    break;
  case 3:
    day="WEDNESDAY";
    break;
  case 4:
    day="THURSDAY";
    break;
  case 5:
    day="FRIDAY";
    break;
  case 6:
    day="SATURDAY";
    break;  
} 
 if(hours<10){
   hours="0" + hours;
}
if(mins<10){
   mins="0" + mins;
}
if(secs<10){
   secs="0" + secs;
}
 month= month + 1;
document.getElementById("test").innerHTML= hours +":"+mins+":"+secs;
document.getElementById("ttt").innerHTML=day + "," + date + "."+month + "." + year;
}
setInterval(printTime,1000); 