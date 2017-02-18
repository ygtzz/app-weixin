<template>
    <div class="stage c">
        <c-cHeader :bBack="true" :backText="topModel.backText" :midText="topModel.curText"
                       :rightIcon="topModel.nextIcon" :rightPath="topModel.nextPath.path">
        </c-cHeader>
        <ul class="list">
            <li class="item item_head">
                <div class="item-i">
                    <div class="item-img">
                        <c-imgHolder :src="person_info.base.iconSrc"></c-imgHolder>
                    </div>
                    <div class="item-info">
                        <p class="title" v-text="person_info.base.remark"><span class="gender gender-man"></span></p>
                        <p class="desc">微信号：{{person_info.base.wxid}}</p>
                        <p class="nick" v-text="person_info.base.nickname">杨涛</p>
                    </div>
                </div>
            </li>
        </ul>
        <ul class="list">
            <li class="item">
                <div class="item-i">
                    <div class="item-info">设置备注和标签</div>
                    <div class="item-other"><i class="fa fa-angle-right"></i> </div>
                </div>
            </li>
            <li class="item">
                <div class="item-i">
                    <div class="item-info">电话号码</div>
                    <div class="item-other"><i class="fa fa-angle-right"></i> </div>
                </div>
            </li>
        </ul>
        <ul class="list">
            <li class="item">
                <div class="item-i">
                    <div class="item-info">地区</div>
                </div>
            </li>
            <li class="item">
                <div class="item-i">
                    <div class="item-info photo">个人相册</div>
                    <div class="item-other"><i class="fa fa-angle-right"></i> </div>
                </div>
            </li>
            <li class="item">
                <div class="item-i">
                    <div class="item-info">更多</div>
                    <div class="item-other"><i class="fa fa-angle-right"></i> </div>
                </div>
            </li>
        </ul>
        <transition name="cover">
            <router-view></router-view>  
        </transition>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';

export default {
    name:'c-person-info',
    data(){
        return {
             topModel:{
                backText:'返回',
                curText:'详细资料',
                nextPath:{path:'/contact/person-info/set',append:true},
                nextIcon:'icon-more'
            }           
        }
    },
    computed:{
        ...mapGetters([
            'person_info'
        ])
    }
}
</script>
<style lang="sass" scoped>
   .list{margin-top:22px;font-size:dpr(17px);}
   .item{padding:0 15px;background-color:#fff;}
   .item-i{padding:9px 0;display:flex;align-items:center;}
   .item:not(:last-child) .item-i{border-bottom:1px solid #ECECEC;}
   .item-img{width:20px;height:20px;margin-right:15px}
   .item-info{flex:1;}
   .item-other{font-size:dpr(22px);color:#c8c8cd}
   .item_head{
       .item-img{width:60px;height:60px;}
       .item-info{font-size: dpr(14px);color: #888;line-height:1.4;}
       :global(.imgHolder img){border-radius:4px;border: 1px solid #ccc}   
   }
   .photo{padding:20px 0;}
   .gender-man{
    display:inline-block;
    width:20px;
    height:20px;
    vertical-align:-3px;
    margin-left:10px;
    background-image: url(/static/images/contact_male.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;}
    .title{font-size:dpr(18px);}
</style>