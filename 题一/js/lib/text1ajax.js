define(["jquery"],function () {
    function text1ajax() {

    }
    text1ajax.prototype={
        constructor:text1ajax(),
        init(){
            this.url = "http://mce.meilishuo.com/jsonp/get/3?offset=0&frame=1&trace=0&limit=10&endId=0&pid=106888&_=1526528205879"

            this.load = {
                type:"get",
                url:this.url,
                dataType:"jsonp",
            }
            $.ajax(this.load).then(function (res) {
                console.log(res);
                this.productData = res ;
                this.LoadHtml()
            }.bind(this))
        },
        LoadHtml(){
            //console.log(this.url)
            console.log(this.productData.data.list)
                var textitem=this.productData.data.list;
            // console.log(this.productData.result.uClassList.data[1].data)
            // console.log(this.productData.result.uClassList.data[2].data)
            // var proitem = this.productData.result.uClassList.data[1].data;
            // var proitem1 =this.productData.result.uClassList.data[2].data;
             var html = ``;
            // var html2=``;
            for(var i=0;i<textitem.length;i++){
                html += ` <div class="beauty_poster data-ptp-item waterfall-0 waterfall-box waterfall-optimise-show" style="width: 224px;top: 0px;left: 0px;">
                       <div class="picBox lazyload-img-start lazyload-img-end">
                        <img  src="${textitem[i].image}"style="width: 100%;height: 100%;" >
                       </div>        
                        <div class="info">
                            <div class="part">
                                <div class="price">￥${textitem[i].price}</div>
                                <div class="collect">
                                    <i class="icon-start"></i>
                                    "2455"
                                </div>
                            </div>
                            <a class="title" href="http://item.meilishuo.com/detail/1k70c62">
                                <i class="icon-select"></i>
                               ${textitem[i].title}
                            </a>
                            </div>
                        </div>
                        
               `
            }
            // for(var i=0;i<proitem1.length;i++){
            //     html2 += `<div class="pro-item taga ">
            //                 <div class="pro-img m-img-hover">
            //                     <img src="${proitem[i].pic_url}" >
            //                 </div>
            //                 <div class="prp-tags-con"></div>
            //                 <p class="pro-info" title="${proitem[i].name}">${proitem[i].name}</p>
            //                 <p class="pro-desc" title="${proitem[i].summary}">${proitem[i].summary} </p>
            //                 <p class="pro-price">
            //                     <span class="pro-unit">¥</span>
            //                     <span class="num">${proitem[i].price_min/100}</span>
            //                     <span class="pro-flag">起</span>
            //                 </p>
            //             </div>`
            // }
            // $(".product-list1").html(html)
            // $(".product-list2").html(html2)
            $(".js-wall").html(html)

        }
    }
    return new text1ajax();
})