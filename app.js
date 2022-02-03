function updateTime() {
    var date = new Date();
    var setTime = document.getElementById("setTime");
    setTime.innerHTML = date.getHours() +":"+ date.getMinutes() + ":" + date.getSeconds();
    var setDate = document.getElementById("setDate");
    setDate.innerHTML = date.getDate() + "-" + parseInt(date.getMonth()+1) + "-" + date.getFullYear();
}
setInterval(updateTime,100);
onload = updateTime();
function getColor() {
    var getColor = document.getElementById("setColor").value;
    localStorage.setItem("Color",getColor);
    document.getElementById("body").style.background=localStorage.getItem("Color");
    document.getElementById("time").style.background=localStorage.getItem("Color");
}
function set_Color() {
    document.getElementById("setColor").value = localStorage.getItem("Color");       
    document.getElementById("body").style.background= localStorage.getItem("Color");
    document.getElementById("time").style.background= localStorage.getItem("Color");
}
setTimeout(set_Color,1000);