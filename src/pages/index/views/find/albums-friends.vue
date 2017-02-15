<template>
    <div class="stage c">
        <c-cHeader :bBack="true" :backText="topModel.backText" :midText="topModel.curText">
        </c-cHeader>
        <div class="body">
            <div class="header" @touchstart="fBannerStart" @touchmove="fBannerMove" @touchend="fBannerEnd" @touchcancel="fBannerCancel">
                <div class="person">
                    <div class="name">yangtao</div>
                    <div class="img"></div>
                </div>
            </div>
        </div>
        <div class="drag-icon"></div>
    </div>
</template>
<script>

export default {
    name:'c-albums-friends',
    data(){
        return {
             topModel:{
                backText:'返回',
                curText:'朋友圈'
            }
        }
    },
    methods:{
       fBannerStart(e){
            console.log(e);
       },
       fBannerMove(e){

       },
       fBannerEnd(e){
           
       },
       fBannerCancel(){}
    }
}
</script>
<style lang="sass" scoped>
   .c{background-color:#fff;display:flex;flex-direction:column;}
   .body{flex:1;display:flex;justify-content:center;z-index:-1;}
   .header{transform:translateY(-40px);position:relative;width:100%;height:370px;background:#2d3031 url(/static/images/find-bg.png) no-repeat center center;background-size:cover}
   .person{position:absolute;bottom:-22px;width:100%;display:flex;justify-content:flex-end;box-sizing:border-box;padding-right:15px;}
   .img{width:70px;height:70px;background-size:cover;
        background-image:url(//images2015.cnblogs.com/blog/528573/201609/528573-20160925131410373-516492873.jpg);
        border:2px solid #fff;
   }
   .name{margin-top:10px;margin-right:20px;color:#fff;font-size:22px;;line-height:1.6}
   .drag-icon{width:30px;height:30px;background: url(/static/images/find-album-reflash-icon.png) no-repeat 0 0;
        background-size: cover;
        position: absolute;
        z-index: -1;
   }
</style>