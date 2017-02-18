<template>
    <div class="stage c">
        <header class="header">
            <c-cHeader :bBack="true" :backText="topModel.backText" :midText="topModel.curText">
            </c-cHeader>
        </header>
        <section class="body">
            <ul class="userlist">
                <li class="item">
                    <c-imgHolder imgClass="head-img" src="//images2015.cnblogs.com/blog/528573/201609/528573-20160925131410373-516492873.jpg"></c-imgHolder>
                    <p class="user-name">mengwei...</p>
                </li>
                <li class="item">
                    <c-imgHolder imgClass="head-img" src="//images2015.cnblogs.com/blog/528573/201609/528573-20160925131410373-516492873.jpg"></c-imgHolder>
                    <p class="user-name">mengwei...</p>
                </li>
                <li class="item">
                    <div class="jia"><span class="iconfont icon-chat-detail-add"></span></div>
                </li>
            </ul>
            <ul class="list">
                <li class="item ">
                    <div class="item-i">
                        <div class="item-info">
                            群聊名称
                        </div>
                        <div class="item-other">
                            微信群01
                            <i class="fa fa-angle-right"></i> 
                        </div>
                    </div>
                </li>
                <li class="item ">
                    <div class="item-i">
                        <div class="item-info">
                            群聊二维码
                        </div>
                        <div class="item-other qr">
                            <c-imgHolder src="static/images/chat-info-qr.png"></c-imgHolder>
                            <i class="fa fa-angle-right"></i> 
                        </div>
                    </div>
                </li>
                <li class="item ">
                    <div class="item-i">
                        <div class="item-info">
                            <p>群公告</p>
                            <p class="notice _ellipsis-3">
                                迎接新的一天到来的不是别的迎接新的一天到来的不是别的迎接新的一天到来的不是别的迎接新的天到来的不是别的迎接新的一天到来的不是别的,而是看!邮!件!
                            </p>
                        </div>
                        <div class="item-other">
                            <i class="fa fa-angle-right"></i> 
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="list">
                <li class="item ">
                    <div class="item-i">
                        <div class="item-info">
                            消息免打扰
                        </div>
                        <div class="item-other">
                            <mt-switch v-model="bNoTrouble"></mt-switch>
                        </div>
                    </div>
                </li>
                <li class="item ">
                    <div class="item-i">
                        <div class="item-info">
                            置顶聊天
                        </div>
                        <div class="item-other">
                            <mt-switch v-model="bSetTop"></mt-switch>
                        </div>
                    </div>
                </li>
                <li class="item ">
                    <div class="item-i">
                        <div class="item-info">
                            保存到通讯录
                        </div>
                        <div class="item-other">
                            <mt-switch v-model="bSaveToContact"></mt-switch>
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="list">
                <li class="item ">
                    <div class="item-i">
                        <div class="item-info">
                            我在本群的昵称
                        </div>
                        <div class="item-other">
                            杨涛——前端
                            <i class="fa fa-angle-right"></i> 
                        </div>
                    </div>
                </li>
                <li class="item ">
                    <div class="item-i">
                        <div class="item-info">
                            显示成员昵称
                        </div>
                        <div class="item-other">
                            <mt-switch v-model="bShowGroupMemberNick"></mt-switch>
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="list">
                <li class="item ">
                    <div class="item-i">
                        <div class="item-info">
                            聊天文件
                        </div>
                        <div class="item-other">
                            <i class="fa fa-angle-right"></i> 
                        </div>
                    </div>
                </li>
                <li class="item ">                
                    <div class="item-i">
                        <div class="item-info">
                            查找聊天内容
                        </div>
                        <div class="item-other">
                            <i class="fa fa-angle-right"></i> 
                        </div>
                    </div>
                </li>
                <li class="item ">                
                    <div class="item-i">
                        <div class="item-info">
                            设置当前聊天背景
                        </div>
                        <div class="item-other">
                            <i class="fa fa-angle-right"></i> 
                        </div>
                    </div>
                </li>
                <li class="item ">                
                    <div class="item-i">
                        <div class="item-info">
                            投诉
                        </div>
                        <div class="item-other">
                            <i class="fa fa-angle-right"></i> 
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="list">
                <li class="item ">
                    <div class="item-i">
                        <div class="item-info">
                            清空聊天记录
                        </div>
                        <div class="item-other">
                            <i class="fa fa-angle-right"></i> 
                        </div>
                    </div>
                </li>
            </ul>
            <div class="btnwrap">
                <button class="btn btn-red">删除并且退出</button>
            </div>
        </section>
    </div>
</template>
<script>
import Vue from 'vue';
import {Switch} from 'mint-ui';
Vue.component(Switch.name,Switch);

export default {
    name:'c-chatdetail',
    data(){
        return{
            topModel:{
                backText:'返回',
                backPath:'/weixin/room',
                curText:'聊天详情',
                nextPath:'',
                nextIcon:''
            },
            bSetTop:false,
            bNoTrouble:false,
            bSaveToContact:true,
            bShowGroupMemberNick:true
        }
    },
    computed:{
        
    },
    watch:{
        '$route':{
            handler(){
                
            },
            immediate:true
        }
    },
    methods:{
        
    },
    components:{

    }
}
</script>
<style lang="sass" scoped>
    .c{display:flex;flex-direction:column;height:100%;overflow:hidden;}
    .body{flex:1;overflow:auto;padding-bottom:30px;}
    .userlist{display:flex;
              background:#fff;padding:15px;
              .item{width:55px;}}
    .user-name{text-align:center;}
    .jia{border:1px solid #ccc;width:55px;height:55px;text-align:center;line-height:1;border-radius:4px;
    .iconfont{font-size:dpr(40px);color:#ccc}}
    :global(.imgHolder img){border-radius:4px}
    .list{margin-top:22px}
   .item{padding:0 15px;background-color:#fff;}
   .item-i{padding:9px 0;display:flex;align-items:center;}
   .item:not(:last-child) .item-i{border-bottom:1px solid #ECECEC;}
   .item-img{width:55px;height:75px;margin-right:5px}
   .item-info{font-size:dpr(17px);flex:1}
   .item-other{font-size:dpr(17px);color:#c8c8cd}
   .notice{color:#888;font-size:dpr(16px);line-height:1.5;padding-right:5px;}
   ._ellipsis-3 {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }
    :global(.qr .imgHolder){width:24px;height:24px;display:inline-block}
    .btnwrap{margin-top:18px;text-align:center;.btn{width:70%}}
</style>