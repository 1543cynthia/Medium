let pageData = {
    productName: '訂票到月球',
    productDescription: '月球之旅最奢華的飛行旅程',
    imageSrc: [
        "images/asteroid.jpg",
        "images/fantasy.jpg",
        "images/space.jpg",
        "images/spaceship.jpg"
    ],
    h2ClassController: {//index那邊h2:h2classcontroller會到這
        centered: true,//center會到style.css那
        colorFont: true
    },
    pStyleController: {
        'margin-left': '50px',//兩個字需要加上單引號或雙引號
        color: 'yellow',
        'font-size': '20px',
        'font-style': 'italic'
    },
    imageStyleController: {
        margin: 'auto',
        display: 'block',
        width: '50%'
    },
    imageAlt: "Photo from space",//鼠標滑到圖片會看到得
    productClasses:[ 
        {
        name:'Coach',
        price:125000,
        seatsAvailable:20,
        earlyBird:true
        },
        {
        name:'Business',
        price:275000,
        seatsAvailable:6 ,
        earlyBird:true
        },
        {
        name:'First',
        price:430000 ,
        seatsAvailable:2,
        earlyBird:false
        }
    ]
};
const app = Vue.createApp({
    data() {
        return pageData;
    }
});
app.mount("#app");//mount(裝上)從這裡開始會把app裡面的東西呈現出來