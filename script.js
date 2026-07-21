/* =====================================
   Director's Dashboard v1.0
   Main Application Logic
===================================== */


const countdownMinutes = 3;



/* =====================================
   Clock
===================================== */


function updateClock(){

    const now = new Date();


    const time = now.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit"
    });


    document.getElementById("clock").textContent = time;



    const date = now.toLocaleDateString([], {

        weekday: "long",

        month: "long",

        day: "numeric"

    });


    document.getElementById("date-display").textContent = date;


}





/* =====================================
   Schedule Display
===================================== */


function displaySchedule(){

    const scheduleArea = document.getElementById("schedule-list");

    const classes = getTodaysClasses();



    if(classes.length === 0){

        scheduleArea.innerHTML =
        "<p>No classes scheduled today.</p>";

        return;

    }



    scheduleArea.innerHTML = "";



    classes.forEach((item)=>{


        const div = document.createElement("div");

        div.className = "schedule-item";

        div.textContent =
        `${formatTime(item.start)} - ${item.name}`;


        div.id = item.name.replace(/\s/g,"-");


        scheduleArea.appendChild(div);


    });

}





/* =====================================
   Current / Next Class
===================================== */


function getCurrentAndNextClass(){


    const now = new Date();

    const classes = getTodaysClasses();



    let current = null;

    let next = null;



    classes.forEach((item,index)=>{


        const startTime = createTime(item.start);



        const nextItem = classes[index+1];



        if(now >= startTime){

            current = item;

        }



        if(
            now < startTime &&
            next === null
        ){

            next = item;

        }



    });



    return {

        current,

        next

    };

}





function updateClasses(){


    const result = getCurrentAndNextClass();



    document.getElementById("current-class").textContent =
    result.current
    ? result.current.name
    : "No Class";



    document.getElementById("next-class").textContent =
    result.next
    ? `${result.next.name} (${formatTime(result.next.start)})`
    : "No More Classes";



    highlightSchedule(result.current);


    updateCountdown(result.next);



}





/* =====================================
   Countdown
===================================== */


function updateCountdown(nextClass){


    const title =
    document.getElementById("countdown-title");


    const countdown =
    document.getElementById("countdown");


    const fill =
    document.getElementById("progress-fill");



    if(!nextClass){

        title.textContent =
        "NO MORE CLASSES";


        countdown.textContent =
        "--:--";


        fill.style.width="0%";

        return;

    }



    const now = new Date();

    const start = createTime(nextClass.start);



    const difference =
    start - now;



    const seconds =
    Math.floor(difference / 1000);



    const minutes =
    Math.floor(seconds / 60);



    const remainingSeconds =
    seconds % 60;



    if(seconds <= countdownMinutes * 60 &&
       seconds > 0){


        title.textContent =
        `${nextClass.name} BEGINS IN`;


        countdown.textContent =
        `${minutes}:${String(remainingSeconds).padStart(2,"0")}`;



        const percent =
        100 -
        ((seconds /
        (countdownMinutes*60))*100);



        fill.style.width =
        `${percent}%`;



    } else {


        title.textContent =
        "NEXT CLASS";


        countdown.textContent =
        `${formatTime(nextClass.start)}`;


        fill.style.width="0%";

    }


}






/* =====================================
   Helpers
===================================== */


function createTime(timeString){

    const [hours,minutes] =
    timeString.split(":");


    const date = new Date();


    date.setHours(hours);

    date.setMinutes(minutes);

    date.setSeconds(0);

    date.setMilliseconds(0);


    return date;

}





function formatTime(timeString){

    const date = new Date();


    const [hours,minutes] =
    timeString.split(":");


    date.setHours(hours);

    date.setMinutes(minutes);



    return date.toLocaleTimeString([],{

        hour:"numeric",

        minute:"2-digit"

    });

}





function highlightSchedule(current){


    document
    .querySelectorAll(".schedule-item")
    .forEach(item=>{

        item.classList.remove("active");

    });



    if(current){


        const id =
        current.name.replace(/\s/g,"-");


        const element =
        document.getElementById(id);


        if(element){

            element.classList.add("active");

        }

    }

}





/* =====================================
   Start Application
===================================== */


function startDashboard(){


    updateClock();

    displaySchedule();

    updateClasses();



    setInterval(()=>{

        updateClock();

        updateClasses();


    },1000);

}



startDashboard();
