$(function () {
    //新增表格的標題內容
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    let topicCount = topic.length;
    //console.log(startDate);找值

    //一秒鐘有1000毫秒
    //每分鐘60秒、每小時60分鐘、每天24小時
    let millisecsPerDay = 24 * 60 * 60 * 1000;

    //將資料呈現於表格中，並顯示場次編號
    for (var x = 0; x < topicCount; x++) {
        $("#courseTable").append(//td行  tr列
            "<tr>" + `<td>${x + 1}</td><td>${(new Date(startDate.getTime() + 7 * x * millisecsPerDay)).toLocaleDateString().slice(5)}</td><td>${topic[x]}</td>` + "</tr>"
        );/*slice()刪字    getTime算毫秒  startDate加數字會變字串*/
    }

    $("#datepicker").on("change", function () {//=> 等同於function 
        $("#courseTable").html("")//清空html
        var startDate = new Date($('#datepicker').val());//取到日期的值
        $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
        let topicCount = topic.length;
        let millisecsPerDay = 24 * 60 * 60 * 1000;
        for (var x = 0; x < topicCount; x++) {
            $("#courseTable").append(//td行  tr列
                "<tr>" + `<td>${x + 1}</td><td>${(new Date(startDate.getTime() + 7 * x * millisecsPerDay)).toLocaleDateString().slice(5)}</td><td>${topic[x]}</td>` + "</tr>"
            );
        }
    });

});