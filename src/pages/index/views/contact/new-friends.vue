<template>
    <div class="stage c">
        <c-cHeader :bBack="true" :backText="topModel.backText" :midText="topModel.curText"
                       :rightIcon="topModel.nextIcon" :rightPath="topModel.nextPath.path">
        </c-cHeader>
        <c-searchbar></c-searchbar>
        <div class="contact">
            <p class="contact-img">
                <span class="iconfont icon-iphone-address"></span>
            </p>
            <p class="contact-desc">添加手机联系人</p>
        </div>
        <ul class="list">
            <li class="item">
                <div class="item-i">
                    <div class="item-img">
                        <c-imgHolder src="//images2015.cnblogs.com/blog/528573/201609/528573-20160922181544949-1515459394.jpg"></c-imgHolder>
                    </div>
                    <div class="item-info">
                        <p class="title">陌生人</p>
                        <p class="desc">我是群聊""的陌生人</p>
                    </div>
                    <div class="item-other">已添加</div>                    
                </div>
            </li>
            <li class="item">
                <div class="item-i">
                    <div class="item-img">
                        <c-imgHolder src="//images2015.cnblogs.com/blog/528573/201609/528573-20160922181544949-1515459394.jpg"></c-imgHolder>
                    </div>
                    <div class="item-info">
                        <p class="title">陌生人</p>
                        <p class="desc">我是群聊""的陌生人</p>
                    </div>
                    <div class="item-other">已拒绝</div>
                </div>
            </li>
            <li class="item">
                <div class="item-i">
                    <div class="item-img">
                        <c-imgHolder src="//images2015.cnblogs.com/blog/528573/201609/528573-20160922181544949-1515459394.jpg"></c-imgHolder>
                    </div>
                    <div class="item-info">
                        <p class="title">陌生人</p>
                        <p class="desc">我是群聊""的陌生人</p>
                    </div>
                    <div class="item-other">
                        <button class="btn btn-green">接受</button>
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
import searchBar from 'index/widget/searchbar.vue';

export default {
    name:'c-new-friends',
    data(){
        return {
             topModel:{
                backText:'通讯录',
                curText:'新的朋友',
                nextPath:{path:'new-friends/add',append:true},
                nextIcon:'iconfont iconfont icon-tips-jia'
            }           
        }
    },
    components:{
        'c-searchbar':searchBar
    }
}
</script>
<style lang="sass" scoped>
   .list{margin-top:22px;font-size:17px;}
   .item{padding:0 15px;background-color:#fff;}
   .item-i{padding:9px 0;display:flex;align-items:center;line-height:1.4}
   .item:not(:last-child) .item-i{border-bottom:1px solid #ECECEC;}
   .item-img{width:40px;height:40px;margin-right:15px}
   .item-info{flex:1;}
   .item-other{font-size:18px;color:#9e9e9e}
   .title{font-size:18px}
   .desc{font-size:12px;color:#9e9e9e}
   .btn{border:0;box-shadow:none;font-size:12px;}
   .contact{text-align:center;background:#fff;padding:15px;}
   .contact-img{.iconfont{font-size: 35px;color: #4bb94b;}}
   .contact-desc{font-size: 14px;color: #929292;margin-top:5px;}
</style>