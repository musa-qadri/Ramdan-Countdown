// var days = document.getElenmentById('days');
// var hours = document.getElenmentById('hours');
// var minutes = document.getElenmentById('minutes');
// var seconds = document.getElenmentById('seconds');

var ramdan = new Date('10 march, 2024 18:40:00').getTime()
// function remaningDaysRamdan() {
var now = new Date().getTime()
var today = new Date().getHours()
var today2 = new Date().getMinutes()
var today3= new Date().getSeconds()
var subtract = ramdan - now
var da= Math.floor(subtract/(1000*60*60*24))
var ho= Math.floor(today)
var min= Math.floor(today2)
var sec= Math.floor(today3)


let elenment = document.getElementById('days');
let elehour = document.getElementById('hour')
let elemin = document.getElementById('minut')
let elesec = document.getElementById('second')

elenment.innerText = da
elehour.innerText = ho
elemin.innerText = min
elesec.innerText = sec




