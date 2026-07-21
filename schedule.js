/* =====================================
   Director's Dashboard v1.0
   Class Schedule Configuration

   Times use 24-hour format.
===================================== */


const classSchedule = {


    Monday: [
        {
            name: "AP Music Theory",
            start: "07:30"
        },
        {
            name: "Symphonic Band",
            start: "09:10"
        },
        {
            name: "Percussion Tech",
            start: "11:30"
        }
    ],



    Tuesday: [
        {
            name: "Color Guard",
            start: "07:30"
        },
        {
            name: "Wind Ensemble",
            start: "13:10"
        }
    ],



    Wednesday: [
        {
            name: "AP Music Theory",
            start: "07:30"
        },
        {
            name: "Symphonic Band",
            start: "09:10"
        },
        {
            name: "Percussion Tech",
            start: "11:30"
        }
    ],



    Thursday: [
        {
            name: "Color Guard",
            start: "07:30"
        },
        {
            name: "Wind Ensemble",
            start: "13:10"
        }
    ],



    Friday: [
        {
            name: "AP Music Theory",
            start: "08:25"
        },
        {
            name: "Symphonic Band",
            start: "09:15"
        },
        {
            name: "Percussion Tech",
            start: "10:05"
        },
        {
            name: "Color Guard",
            start: "12:20"
        },
        {
            name: "Wind Ensemble",
            start: "14:00"
        }
    ]

};





/* =====================================
   Helper Functions
===================================== */


function getTodayName(){

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];


    return days[new Date().getDay()];

}





function getTodaysClasses(){

    const today = getTodayName();


    if(classSchedule[today]){

        return classSchedule[today];

    }


    return [];

}
