// set the date we're counting down to
var target_date = new Date('Sep, 4, 2016 18:00').getTime();
 
// variables for time units
var days, hours, minutes, seconds, ms_step=10;
 
// get tag element
//var countdown = document.getElementById('countdown');
var cd_days = document.getElementById('cd_days');
var cd_hours = document.getElementById('cd_hours');
var cd_min = document.getElementById('cd_min');
 
setInterval(function () {
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
    min = parseInt(seconds_left / 60);
    sec = parseInt(seconds_left % 60);
    ms = parseInt(target_date-current_date);
    
    cd_days.innerHTML = days;
    cd_hours.innerHTML = hours;
    cd_min.innerHTML = min;

}, ms_step);
