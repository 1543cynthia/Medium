$(function(){
    //儲存目前作答到第幾題
    var currentQuiz=null;
    $("#startButton").on("click",function(){//#id  $()變數
        if(currentQuiz==null){
            currentQuiz=0;
            $("#question").text(questions[0].question); 
            $("#options").empty();
            //將選項逐個加入
            questions[0].answers.forEach(
                function(element,index,array){//element問題選項的內容 index數字  array不一樣的題目
                    $("#options").append(`<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);//br斷行
                }
            );
            $("#startButton").attr("value","Next");//將按鈕上的文字換成Next
        }
        else{
           $.each($(":radio"),function(i,val){//:radio 選擇所有
            if(val.checked){
                    //是否已走到最後要產生結果(A~D)
                    if(isNaN(questions[currentQuiz].answers[i][1])){//isNaN判斷是數字還是ABCD i是目前中的那一個 
                        var finalResult= questions[currentQuiz].answers[i][1];
                        //顯示最終結果的標題
                        $("#question").text(finalAnswers[finalResult][0]);
                        //將選項區域清空
                        $("#options").empty();
                        //顯示最終結果內容
                        $("#options").append(`${finalAnswers[finalResult][1]}<br><br>`);//append顯示
                        currentQuiz=null;
                        $("#startButton").attr("value","重新開始");
                    }else{
                        //指定下一題，原始資料從1開始，所以要-1
                        currentQuiz=questions[currentQuiz].answers[i][1]-1;//因為原本從1開始
                        //顯示新的題目
                        $("#question").text(questions[currentQuiz].qusetion);
                        $("#options").empty();
                        questions[currentQuiz].answers.forEach(function(element,index,array){
                        $("#options").append(`<input name='options' type='radio' value='${index
                        }'><label>${element[0]}</label><br><br>`);
                        });
                    }
                    return false;
                }
            });
        }
    });
});
