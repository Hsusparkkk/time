
const currentTime = document.querySelector("#currentTime")
setInterval(()=>{
current = new Date()
var hours = current.getHours()
var mins = current.getMinutes()
if(hours / 10 < 1) hours = "0"+hours
if(mins / 10 < 1 ) mins = "0"+mins
newTime = hours+":"+mins
console.log(newTime)
//  get root element
var root = document.documentElement;
if(hours >= 12){
    // root.setAttribute("--ampm", "PM");
    newTime+= " PM";
}else{
    newTime += " AM";
}



if(currentTime.innerHTML != newTime){
    currentTime.innerHTML = newTime
}

delete courrent
},1000)