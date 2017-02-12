<template>
    <div class="stage c">
        <header class="header">
            <c-cHeader @leftClick="fHeaderLeftClick" :bBack="true" :backText="topModel.backText" :midText="topModel.curText">
            </c-cHeader>
        </header>
        <section class="body">
            <ul class="list">
                <li class="item ">
                    <div class="item-i">
                        <div class="item-img">
                            <c-imgHolder imgClass="head-img" src="//images2015.cnblogs.com/blog/528573/201609/528573-20160925131410373-516492873.jpg"></c-imgHolder>
                            <p>杨涛</p>
                        </div>
                        <div class="item-info">
                            <div class="jia">+</div>
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="list">
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
                            消息免打扰
                        </div>
                        <div class="item-other">
                            <mt-switch v-model="bNoTrouble"></mt-switch>
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
            </ul>
            <ul class="list">
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
                            查找聊天内容
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
            <ul class="list">
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
        </section>
    </div>
</template>
<script>
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
            bNoTrouble:false
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
        fHeaderLeftClick(){
            location.hash = this.topModel.backPath;
        },
        fHeaderRightClick(){
            location.hash = this.topModel.nextPath;
        }
    },
    components:{

    }
}
</script>
<style lang="sass" scoped>
    .list{margin-top:22px}
   .item{padding:0 15px;background-color:#fff;}
   .item-i{padding:9px 0;display:flex;align-items:center;}
   .item:not(:last-child) .item-i{border-bottom:1px solid #ECECEC;}
   .item-img{width:20px;height:20px;margin-right:5px}
   .item-info{font-size:17px;flex:1}
   .item-other{font-size:22px;color:#c8c8cd}
</style>