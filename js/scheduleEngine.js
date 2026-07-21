/*
===========================================
Director's Dashboard
Schedule Engine
Legend High School
===========================================
*/

const scheduleData = {

    monday: [
        {
            type: "class",
            period: 1,
            name: "AP Music Theory",
            start: "07:30",
            end: "09:05"
        },
        {
            type: "passing",
            start: "09:05",
            end: "09:10"
        },
        {
            type: "class",
            period: 2,
            name: "Symphonic Band",
            start: "09:10",
            end: "10:45"
        },
        {
            type: "passing",
            start: "10:45",
            end: "10:50"
        },
        {
            type: "class",
            period: 3,
            name: "Percussion Tech",
            start: "10:50",
            end: "11:25"
        },
        {
            type: "passing",
            start: "11:25",
            end: "11:30"
        },
        {
            type: "planning",
            period: 4,
            name: "Planning",
            start: "11:30",
            end: "13:05"
        }
    ],

    tuesday: [
        {
            type: "class",
            period: 1,
            name: "Color Guard",
            start: "07:30",
            end: "09:05"
        },
        {
            type: "passing",
            start: "09:05",
            end: "09:10"
        },
        {
            type: "planning",
            period: 2,
            name: "Planning",
            start: "09:10",
            end: "10:45"
        },
        {
            type: "planning",
            period: 3,
            name: "Planning",
            start: "10:50",
            end: "11:25"
        },
        {
            type: "planning",
            period: 4,
            name: "Planning",
            start: "11:30",
            end: "13:05"
        },
        {
            type: "passing",
            start: "13:05",
            end: "13:10"
        },
        {
            type: "class",
            period: 7,
            name: "Wind Ensemble",
            start: "13:10",
            end: "14:45"
        }
    ],

    // Wednesday = Monday
    // Thursday = Tuesday

    friday: [
        {
            type: "class",
            period: 1,
            name: "AP Music Theory",
            start: "08:25",
            end: "09:10"
        },
        {
            type: "passing",
            start: "09:10",
            end: "09:15"
        },
        {
            type: "class",
            period: 2,
            name: "Symphonic Band",
            start: "09:15",
            end: "10:00"
        },
        {
            type: "passing",
            start: "10:00",
            end: "10:05"
        },
        {
            type: "class",
            period: 3,
            name: "Percussion Tech",
            start: "10:05",
            end: "10:50"
        },
        {
            type: "planning",
            period: 4,
            name: "Planning",
            start: "10:55",
            end: "11:40"
        },
        {
            type: "class",
            period: 5,
            name: "Color Guard",
            start: "12:20",
            end: "13:05"
        },
        {
            type: "planning",
            period: 6,
            name: "Planning",
            start: "13:10",
            end: "13:55"
        },
        {
            type: "class",
            period: 7,
            name: "Wind Ensemble",
            start: "14:00",
            end: "14:45"
        }
    ]

};

// Reuse schedules
scheduleData.wednesday = scheduleData.monday;
scheduleData.thursday = scheduleData.tuesday;
