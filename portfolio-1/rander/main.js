$(function(){
    $("#button").on("click",function(){
    $("#noodles").show();//顯示
    var numberOfListItem = $("li").length;
    var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
    $("h1").text($("li").eq(randomChildNumber).text());//.text()設置裡面的內容
    if(randomChildNumber==0){
        $("#noodles").attr("src","https://image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fstorage.googleapis.com%2Fwww-cw-com-tw%2Farticle%2F202101%2Farticle-5ff76e12dff12.jpg/?w=1260&format=webp"); 
    }
    else if(randomChildNumber==1){
        $("#noodles").attr("src","https://fairylolita.com/wp-content/uploads/2020/10/DSCF8136.jpg");   //換圖片但只換到第一個
    }else if(randomChildNumber==2){
        $("#noodles").attr("src","https://shop.8way.com.tw/images/ProSlide/P001/Pork-Dumpling.png");
    }else if(randomChildNumber==3){
        $("#noodles").attr("src","https://www.amanda326.com/wp-content/uploads/2012/07/%E8%82%89%E7%B5%B2%E7%82%92%E9%BA%B5-2021-5%E6%9C%88%E9%87%8D%E6%8B%8D-700x465.jpg");
    }else {
        $("#noodles").attr("src","https://www.buygood.com.tw/images/n01-L.jpg");
    }
    });
});