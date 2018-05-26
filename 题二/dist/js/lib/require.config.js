require.config({
    baseUrl: '/',
    paths:{
        "jquery":"js/lib/jquery-3.3.1",
        // "swiper":"js/lib/index/swiper-4.2.6.min"
        // "jquery.cookie":"lib/jquery.cookie",
        // "pagination":"lib/jquery.pagination",
        "swiper":"js/lib/index/swiper.min"
        // "unslider":"lib/unslider"
    },
    // shim: {
    //     'swiper': ['jquery'],
    // }
    shim: {
        // "jquery.cookie":{
        //     deps:["jquery"]
        // },
        "swiper":{
            deps:["jquery"]
        }
    }
// })
// require(['jquery','swiper'], function (jquery,swiper){
//     console.log(swiper);
});