var now = new Date();

function day() {
    let today = now.getDay();

    switch (today){
        case 0: 
        today = "Sunday";
        break;
        case 1: 
        today = "Monday";
        break;
        case 2: 
        today = "Tuesday";
        break;
        case 3: 
        today = "Wednesday";
        break;
        case 4: 
        today = "Thursday";
        break;
        case 5: 
        today = "Friday";
        break;
        case 6: 
        today = "Saturday";
    }
    document.getElementById('day').innerHTML = "Today is: " + today;
}
function time() {
    let currentHour = now.getHours();
    let currentMin = now.getMinutes();
    let currentSec = now.getSeconds();
    let amAndPm = "";
    if (currentHour > 12) {
        amAndPm += "AM";
    }
    else {
        amAndPm += "PM";
    }
    document.getElementById('time').innerHTML = currentHour + " " + amAndPm + " : " + currentMin + " : " + currentSec;
}

function closeDay() {
    document.getElementById('day').innerHTML = "";
}

function closeTime() {
    document.getElementById('time').innerHTML = "";
}