let myList = [
    {
        classId: 0,
        subjectId : "6A",
        name: "Toán",
        isTheoryClass: true,
        week: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16","17", "18"],
        time:{
            indexDay: 2,
            start: "Tiết",
            end: "2",
        },
        location: ""
    },
    {
        classId: 0,
        subjectId : "6C",
        name: "Toán",
        isTheoryClass: true,
        week: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16","17", "18"],
        time:{
            indexDay: 2,
            start: "Tiết",
            end: "3",
        },
        location: ""
    },
    {
        classId: 0,
        subjectId : "6A",
        name: "Công nghệ",
        isTheoryClass: true,
        week: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16","17", "18"],
        time:{
            indexDay: 2,
            start: "Tiết",
            end: "5",
        },
        location: ""
    },
    {
        classId: 0,
        subjectId : "6A",
        name: "Toán",
        isTheoryClass: true,
        week: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16","17", "18"],
        time:{
            indexDay: 3,
            start: "Tiết",
            end: "1",
        },
        location: ""
    },
    {
        classId: 0,
        subjectId : "6C",
        name: "Toán",
        isTheoryClass: true,
        week: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16","17", "18"],
        time:{
            indexDay: 3,
            start: "Tiết",
            end: "2",
        },
        location: ""
    },
    {
        classId: 0,
        subjectId : "6A",
        name: "Toán",
        isTheoryClass: true,
        week: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16","17", "18"],
        time:{
            indexDay: 5,
            start: "Tiết",
            end: "2",
        },
        location: ""
    },
    {
        classId: 0,
        subjectId : "6C",
        name: "Toán",
        isTheoryClass: true,
        week: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16","17", "18"],
        time:{
            indexDay: 5,
            start: "Tiết",
            end: "3",
        },
        location: ""
    },
    {
        classId: 0,
        subjectId : "6A",
        name: "Toán",
        isTheoryClass: true,
        week: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16","17", "18"],
        time:{
            indexDay: 7,
            start: "Tiết",
            end: "1",
        },
        location: ""
    },
    {
        classId: 0,
        subjectId : "6C",
        name: "Toán",
        isTheoryClass: true,
        week: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16","17", "18"],
        time:{
            indexDay: 7,
            start: "Tiết",
            end: "2",
        },
        location: ""
    },
    {
        classId: 0,
        subjectId : "6A",
        name: "Công nghệ",
        isTheoryClass: true,
        week: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16","17", "18"],
        time:{
            indexDay: 7,
            start: "Tiết",
            end: "3",
        },
        location: ""
    },
]
let week = 1, dayStart = new Date("9-7-2020"), nowWeek;
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let showWeek = document.getElementById("show-week");
let morning = document.getElementsByClassName("morning");
let afternoon = document.getElementsByClassName("afternoon");
let evening = document.getElementsByClassName("evening");
function getweek(){
    week += Math.floor((new Date().getTime() - dayStart.getTime())/(7*1000*24*3600));
    nowWeek = week;
}
getweek();
function render(week){
    thisWeekList = myList.filter(function(item){
        for(let i=0; i< item.week.length; i++){
            if(item.week[i] == week){
                return true;
            }
        }
        return false;
    })
    for(let i=0; i< 7; i++){
        let thisDayList = thisWeekList
        .filter(function(item){
            return item.time.indexDay == i+1;
        })

        let thisMorningList = thisDayList.filter(function(item){
            return Number(item.time.end.split(":")[0]) < 12;
        })
        let thisAfternoonList = thisDayList.filter(function(item){
            return Number(item.time.start.split(":")[0]) >= 12 && Number(item.time.end.split(":")[0]) <= 17;
        })
        let thisEveningList = thisDayList.filter(function(item){
            return Number(item.time.start.split(":")[0]) >=17;
        })
        morning[i].innerHTML = myMap(thisMorningList).join("");
        afternoon[i].innerHTML = myMap(thisAfternoonList).join("");
        evening[i].innerHTML = myMap(thisEveningList).join("");
    }
}
render(week);
updateShowWeek(week);
next.onclick = function(){
    if(week<18){
        week++;
        render(week);
    }
    updateShowWeek(week)
}
previous.onclick = function(){
    if(week>1){
        week--;
        render(week);
    }
    updateShowWeek(week);
}
function updateShowWeek(week){
    showWeek.innerHTML = "Tuần " + week;
    if(week == nowWeek){
        showWeek.classList.add("bg-danger")
    }else{
        showWeek.classList.remove("bg-danger")
    }
}
function myMap(list){
    return list.map(function(item){
        return `<li class=${item.isTheoryClass? "bg-success": "bg-warning"}>
                    <div class="time">
                    ${item.time.start} - ${item.time.end}
                    </div>
                    <div class="name">
                        ${item.name} ${item.subjectId}
                    </div>
                    <div class="location">
                        ${item.location}
                    </div>
                </li>`
    })
}
{/* <div class="id">
    ${item.subjectId}${item.subjectId == ""|| item.classId == 0 ? "":" - "}${item.classId == 0 ? "" : item.classId}
</div> */}