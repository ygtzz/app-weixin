<template>
    <div class="c">
        <ul class="list">
            <li class="item">
                <router-link :to="{name:'albums-friends'}">
                    <div class="item-i">
                        <div class="item-img">
                            <c-imgHolder src="static/images/find_icon-circle.png"></c-imgHolder>
                        </div>
                        <div class="item-info">
                            朋友圈
                        </div>
                        <div class="item-other">
                            <i class="fa fa-angle-right"></i>                    
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
        <ul class="list">
            <li class="item">
                <router-link :to="{name:'sao-yi-sao'}">
                    <div class="item-i">
                        <div class="item-img">
                            <c-imgHolder src="static/images/find_icon-qrcode.png"></c-imgHolder>
                        </div>
                        <div class="item-info">
                            扫一扫
                        </div>
                        <div class="item-other">
                            <i class="fa fa-angle-right"></i>                    
                        </div>
                    </div>
                </router-link>
            </li>
            <li class="item">
                <router-link :to="{name:'yao-yi-yao'}">
                    <div class="item-i">
                        <div class="item-img">
                            <c-imgHolder src="static/images/find_icon-shake.png"></c-imgHolder>
                        </div>
                        <div class="item-info">
                            摇一摇
                        </div>
                        <div class="item-other">
                            <i class="fa fa-angle-right"></i>                    
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
        <ul class="list">
            <li class="item">
                <router-link :to="{name:'drift-bottle'}">
                    <div class="item-i">
                        <div class="item-img">
                            <c-imgHolder src="static/images/find_icon-bottle.png"></c-imgHolder>
                        </div>
                        <div class="item-info">
                            漂流瓶
                        </div>
                        <div class="item-other">
                            <i class="fa fa-angle-right"></i>                    
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
        <ul class="list">
            <li class="item" @click="fShopingClick">
                <div class="item-i">
                    <div class="item-img">
                        <c-imgHolder src="static/images/find_icon-shopping.png"></c-imgHolder>
                    </div>
                    <div class="item-info">
                        购物
                    </div>
                    <div class="item-other">
                        <i class="fa fa-angle-right"></i>                    
                    </div>
                </div>
            </li>
            <li class="item">
                <div class="item-i">
                    <div class="item-img">
                        <c-imgHolder src="static/images/find_icon-moregame.png"></c-imgHolder>
                    </div>
                    <div class="item-info">
                        游戏
                    </div>
                    <div class="item-other">
                        <i class="fa fa-angle-right"></i>                    
                    </div>
                </div>
            </li>
        </ul>
        <transition name="cover">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
import {mapActions} from 'vuex';

export default {
    name:'c-find',
    methods:{
        ...mapActions([
            'set_iframe_url'
        ]),
        fShopingClick(){
            this.set_iframe_url({title:"京东购物",url:'//wqs.jd.com'}).then(()=>{
                this.$router.push({path:'/find/shoping'})
            });
        }
    }
}
</script>
<style lang="sass" scoped>
   .c{
       a:link,a:visited,a:hover,a:active{color:#000}
    }
   .list{margin-top:22px}
   .item{padding:0 15px;background-color:#fff;}
   .item-i{padding:9px 0;display:flex;align-items:center;}
   .item:not(:last-child) .item-i{border-bottom:1px solid #ECECEC;}
   .item-img{width:20px;height:20px;margin-right:10px}
   .item-info{font-size:dpr(17px);flex:1}
   .item-other{font-size:dpr(22px);color:#c8c8cd}
</style>