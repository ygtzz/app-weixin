<template>
    <div class="stage c">
        <c-cHeader :bBack="true" :backText="topModel.backText" :midText="topModel.curText">
        </c-cHeader>
        <div class="body">
            <ul class="footer">
                <li class="item" v-for="item in aFoot">
                    <div class="img" :class="[{'cur':item.cls == activeFootItem},item.cls]"></div>
                    <p class="desc">{{item.text}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>

export default {
    name:'c-yao-yi-yao',
    data(){
        return {
             topModel:{
                backText:'发现',
                curText:'漂流瓶'
            },
            aFoot:[
                {text:'扔一个',cls:'drift'},
                {text:'捡一个',cls:'pick'},
                {text:'我的瓶子',cls:'me'}
            ]   
        }
    },
    methods:{
       
    }
}
</script>
<style lang="sass" scoped>
   .c{color:#979797;background-color: #2d3031;display:flex;flex-direction:column}
   .body{flex:1;display:flex;align-items:flex-end;justify-content:center;background:url(/static/images/drift-bottle/bottle-bkg.jpg);background-size:cover;}
   .footer{width:100%;text-align:center;background:url(/static/images/drift-bottle/bottle-board.png);background-size:contain;background-repeat:no-repeat;background-position:left bottom;}
   .item{text-align:center;display:inline-block;&:not(:last-child){margin-right:50px;}}
   .img{width:42px;height:40px;background-size:cover}
   .desc{margin-top:20px;}
   .drift{
        background-image:url(/static/img/bottle-button-throw.16ea5dc.png);
   }
   .pick{
        background-image:url(/static/images/yao-yi-yao/shake_icon_music.png);
   }
   .me{
        background-image:url(/static/images/yao-yi-yao/shake_icon_tv.png);
   }
</style>