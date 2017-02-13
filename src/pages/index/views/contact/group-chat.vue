<template>
    <div class="stage c">
        <c-cHeader :bBack="true" :backText="topModel.backText" :midText="topModel.curText">
        </c-cHeader>
        <c-searchbar></c-searchbar>
        <ul class="list">
            <li class="item" v-for="item in aGroup">
                <div class="item-i">
                    <div class="item-img">
                        <c-imgHolder src="//images2015.cnblogs.com/blog/528573/201609/528573-20160922181803449-1753077357.jpg"></c-imgHolder>
                    </div>
                    <div class="item-info">
                        {{item}}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import searchBar from 'index/widget/searchbar.vue';

export default {
    name:'c-group-chat',
    data(){
        return {
             topModel:{
                backText:'返回',
                curText:'群聊'
            },
            aGroup:Array.apply(null,{length:20}).map((item,index)=>{
                return 'web前端交流群' + (index + 1)  
            })          
        }
    },
    components:{
        'c-searchbar':searchBar
    }
}
</script>
<style lang="sass" scoped>
   .list{font-size:17px;}
   .item{padding:0 15px;background-color:#fff;}
   .item-i{padding:9px 0;display:flex;align-items:center;}
   .item:not(:last-child) .item-i{border-bottom:1px solid #ECECEC;}
   .item-img{width:35px;height:35px;margin-right:15px}
   .item-info{flex:1;line-height:1.41}
   .item-other{font-size:22px;color:#c8c8cd}
   :global(.imgHolder img){vertical-align: middle;}
</style>