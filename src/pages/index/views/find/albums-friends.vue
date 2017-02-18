<template>
    <div class="stage c">
        <c-cHeader :bBack="true" :backText="topModel.backText" :midText="topModel.curText">
        </c-cHeader>
        <div class="body">
            <div class="banner-wrap">
                <div class="banner" :style="bannerPosition" @touchstart="fBannerStart" @touchmove="fBannerMove" @touchend="fBannerEnd" @touchcancel="fBannerEnd">
                    <div class="person">
                        <div class="name">mengwei</div>
                        <div class="img"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="drag-icon" :style="iconPosition"></div>
    </div>
</template>
<script>
import dynamics from 'dynamics.js';

export default {
    name:'c-albums-friends',
    data(){
        return {
            topModel:{
                backText:'返回',
                curText:'朋友圈'
            },
            start:{
                y:0
            },
            move:{
                y:0
            }
        }
    },
    computed:{
        bannerPosition(){
            let cy = this.move.y;
            cy = cy > 0 ? cy : -40;
            let scale = 0.0004 * cy + 1;
            scale = scale > 1.5 ? 1.5 : scale;
            scale = cy > 0 ? scale : 1;
            return {
                transform:'translate3d(0,'+  cy +'px,0) scale(' + scale + ')'
            }
        },
        iconPosition(){
            let movey = this.move.y;
            movey = movey > 98 ? 98 : movey;
            movey = movey > 0 ? (60 + movey) : movey;
            return {
                transform:'translateY(' + movey + 'px) rotate('+ (-this.move.y * 3) +'deg)'
            }
        }
    },
    methods:{
       fBannerStart(e){
            e = e.changedTouches ? e.changedTouches[0] : e;
            this.start.y = e.pageY;
       },
       fBannerMove(e){
            e = e.changedTouches ? e.changedTouches[0] : e;
            this.move.y = (e.pageY - this.start.y)/3;            
       },
       fBannerEnd(e){
           dynamics.animate(this.move,{
               y:0
           },{
                type:dynamics.easeOut,
                duration:350
           });
       }
    }
}
</script>
<style lang="sass" scoped>
   .c{background-color:#fff;display:flex;flex-direction:column;}
   .body{flex:1;z-index:-1;}
   .banner-wrap{background:#2d3031}
   .banner{margin-top:-70px;position:relative;width:100%;height:370px;background:#2d3031 url(/static/images/find-bg.png) no-repeat center center;background-size:cover}
   .person{position:absolute;bottom:-22px;width:100%;display:flex;justify-content:flex-end;box-sizing:border-box;padding-right:15px;}
   .img{width:70px;height:70px;background-size:cover;
        background-image:url(//images2015.cnblogs.com/blog/528573/201609/528573-20160925131410373-516492873.jpg);
        border:dpr(2px) solid #fff;
   }
   .name{margin-top:10px;margin-right:20px;color:#fff;font-size:dpr(22px);;line-height:1.6}
   .drag-icon{width:30px;height:30px;background: url(/static/images/find-album-reflash-icon.png) no-repeat 0 0;
        background-size: cover;
        position: absolute;
        top:10px;
        left:10px;
        z-index: -1;
   }
</style>