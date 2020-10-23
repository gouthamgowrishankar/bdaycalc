var newYear=new Date(document.getElementById("cal").value);
const dayel= document.getElementById("day");
const hourel= document.getElementById("hour");
const minel= document.getElementById("min");
const secel= document.getElementById("sec");




$(".countdown-container").draggable();
var newYearDate =new Date (newYear);
var currentDate = new Date();
function submit(){
    newYear=(document.getElementById("cal").value);
    //alert(newYear);
   // return newyear;
   
}





 
function countdown(){
    const newYearDate =new Date (newYear);
    const currentDate = new Date();
    const tseconds = (newYearDate - currentDate)/1000;
    const days = Math.floor(tseconds/3600/24);
    const hour = Math.floor(tseconds/60/60)%24;
    const min = Math.floor(tseconds/60)%60;
    const seconds = Math.floor(tseconds) % 60;
    dayel.innerHTML= formatTime(days);
    hourel.innerHTML=formatTime(hour);
    minel.innerHTML=formatTime(min);
    secel.innerHTML=formatTime(seconds);
    console.log(newYearDate,currentDate);
    if((newYearDate-currentDate)<0){
        alert("you have enterd a ended date refresh the browser and enter proper date");
    
    }
}



    

function formatTime(time) {
    return time < 10 ? '0' + time: time;
    }

countdown();

setInterval(countdown,1000);
    








