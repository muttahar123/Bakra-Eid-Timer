var days_html = document.getElementById("days")
var hours_html = document.getElementById("hours")
var mins_html = document.getElementById("days")
var sec_html = document.getElementById("secs")

var now = new Date();
var bakraeiddate = new Date(6/17/24)

console.log(now);
console.log(bakraeiddate);

var diff = bakraeiddate.getTime()-now.getTime()
var seconds = diff/1000;
var mins = diff/1000/60;
var hours = diff/1000/60/60;
var days = diff/100060/60/24;
console.log(diff);

days_html.innerHTML= Math.round(days);
hours_html.innerHTML= Math.round(hours);
mins_html.innerHTML = Math.round(mins);
sec_html.innerHTML = Math.round(seconds);
