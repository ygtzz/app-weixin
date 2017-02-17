<template>
    <div class="stage">
        <c-cHeader :bBack="true" :backText="topModel.backText" :midText="topModel.curText"
                       :rightIcon="topModel.nextIcon" :rightPath="topModel.nextPath.path">
        </c-cHeader>
        <ul class="list">
            <li class="item">
                <div class="item-i">
                    <div class="item-info">设置备注和标签</div>
                    <div class="item-other"><i class="fa fa-angle-right"></i> </div>
                </div>
            </li>
        </ul>
        <ul class="list">
            <li class="item">
                <div class="item-i">
                    <div class="item-info">发送他的名片</div>
                    <div class="item-other"><i class="fa fa-angle-right"></i> </div>
                </div>
            </li>
        </ul>
        <ul class="list">
            <li class="item">
                <div class="item-i">
                    <div class="item-info">设为星标朋友</div>
                    <div class="item-other">
                        <mt-switch v-model="bStar"></mt-switch>
                    </div>
                </div>
            </li>
        </ul>
        <ul class="list">
            <li class="item">
                <div class="item-i">
                    <div class="item-info">不让他(她)看我的朋友圈</div>
                    <div class="item-other">
                        <mt-switch v-model="bNoSeeMe"></mt-switch>
                    </div>
                </div>
            </li>
            <li class="item">
                <div class="item-i">
                    <div class="item-info photo">不看他(她)的朋友圈</div>
                    <div class="item-other">
                        <mt-switch v-model="bNoSeeHis"></mt-switch>
                    </div>
                </div>
            </li>
        </ul>
        <ul class="list">
            <li class="item">
                <div class="item-i">
                    <div class="item-info">加入黑名单</div>
                    <div class="item-other">
                        <mt-switch v-model="bBackList"></mt-switch>
                    </div>
                </div>
            </li>
            <li class="item">
                <div class="item-i">
                    <div class="item-info photo">投诉</div>
                    <div class="item-other"><i class="fa fa-angle-right"></i> </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import Vue from 'vue';
import {Switch} from 'mint-ui';
Vue.component(Switch.name,Switch);

export default {
    name:'c-person-info-set',
    data(){
        return {
             topModel:{
                backText:'',
                curText:'资料设置',
                nextPath:'',
                nextIcon:''
            },
            bBackList:false,
            bNoSeeHis:false,
            bNoSeeMe:false,
            bStar:false           
        }
    }
}
</script>
<style lang="sass" scoped>
   .list{margin-top:22px;font-size:dpr(17px);}
   .item{padding:0 15px;background-color:#fff;}
   .item-i{padding:9px 0;display:flex;align-items:center;}
   .item:not(:last-child) .item-i{border-bottom:1px solid #ECECEC;}
   .item-img{width:20px;height:20px;margin-right:15px}
   .item-info{flex:1}
   .item-other{font-size:dpr(22px);color:#c8c8cd}
</style>