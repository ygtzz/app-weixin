<template>
    <div class="stage c">
        <c-cHeader :bBack="true" :backText="topModel.backText" :midText="topModel.curText">
        </c-cHeader>
        <div class="body">
            <div class="mobile-hand"></div>
        </div>
        <ul class="footer">
            <li class="item" v-for="item in aFoot" @click="fFooterItemClick(item)">
                <div class="img" :class="[{'cur':item.cls == activeFootItem},item.cls]"></div>
                <p class="desc">{{item.text}}</p>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    name:'c-yao-yi-yao',
    data(){
        return {
             topModel:{
                backText:'返回',
                curText:'摇一摇'
            },
            aFoot:[
                {text:'人',cls:'person'},
                {text:'歌曲',cls:'song'},
                {text:'电视',cls:'tv'}
            ],
            activeFootItem:''    
        }
    },
    methods:{
        fFooterItemClick(item){
            this.activeFootItem = item.cls;
        }
    }
}
</script>
<style lang="sass" scoped>
   .c{color:#979797;background-color: #2d3031;display:flex;flex-direction:column}
   .body{flex:1;display:flex;align-items:center;justify-content:center}
   .footer{padding-bottom:30px;text-align:center}
   .item{text-align:center;display:inline-block;&:not(:last-child){margin-right:50px;}}
   .img{width:42px;height:40px;background-size:cover}
   .desc{margin-top:20px;}
   .mobile-hand{background-image:url(/static/images/yao-yi-yao/mobile-hand.png);width:188px;height:188px;background-size:cover}
   .person{
        background-image:url(/static/images/yao-yi-yao/shake_icon_people.png);
        &.cur{background-image:url(/static/images/yao-yi-yao/shake_icon_people-hl.png)}
   }
   .song{
        background-image:url(/static/images/yao-yi-yao/shake_icon_music.png);
        &.cur{background-image:url(/static/images/yao-yi-yao/shake_icon_music-hl.png)}
   }
   .tv{
        background-image:url(/static/images/yao-yi-yao/shake_icon_tv.png);
        &.cur{background-image:url(/static/images/yao-yi-yao/shake_icon_tv-hl.png)}
   }
</style>