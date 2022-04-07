let player; //YouTube Player
let currentPlay = 0; //記錄目前撥到第幾首歌


$(function(){
        $("h3").text($("li").eq(currentPlay).text());
});



//YouTube API Ready
function onYouTubeIframeAPIReady(){
    player = new YT.Player("player",{//player是畫面上的id
        height:"390",
        width:"640",
        videoId:playList[currentPlay],
        playerVars:{
        autoplay:0, //是否自動撥放
        controls:0, //是否顯示控制項
        start:playTime[currentPlay][0],//開始秒數
        end:playTime[currentPlay][1],//結束秒數
        iv_load_policy:3//檔廣告
        },
        events:{
        onReady:onPlayerReady,
        onStateChange:onPlayerStateChange//狀態改變就會觸發
        }
    });     
}
//YouTube Player Ready
function onPlayerReady(event){
    $("#playButton").on("click",function(){
        $("h2").text(player.getVideoData().title);
        player.playVideo();
    });
}
//Player State Change
function onPlayerStateChange(event){
    if(Math.floor(player.getCurrentTime())==playTime[currentPlay][1]){//第一首目前播放時間等於結束時間
        if(currentPlay<playList.length-1){
        currentPlay++;
        $("h3").text($("li").eq(currentPlay).text());
        player.loadVideoById({
        videoId:playList[currentPlay],
        startSeconds:playTime[currentPlay][0],
        endSeconds:playTime[currentPlay][1],
        suggestedQuality:"large"
        });
        }else{//最後一首播完了
        currentPlay=0;
        $("h3").text($("li").eq(currentPlay).text());
        player.cueVideoById({//第一首拿過來但不播放
        videoId:playList[currentPlay],
        startSeconds:playTime[currentPlay][0],
        endSeconds:playTime[currentPlay][1],
        suggestedQuality:"large"
        });
        }
        }
        $("h2").text(player.getVideoData().title);
        
}