var topic = [
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "意外停課",
    "兒童節放假"
];

//建立方便輸入日期的機制
//var startDate = new Date($('#datepicker').val());//#datepicker 網頁還沒跑完抓不到
 var startDate=new Date();
// function setMonthAndDay(startMonth,startDay){
//     //一次設定好月份與日期
//     startDate.setMonth(startMonth-1,startDay);
//     startDate.setHours(0);
//     startDate.setMinutes(0);
//     startDate.setSeconds(0);
// }
// setMonthAndDay(2,21);//現在時間