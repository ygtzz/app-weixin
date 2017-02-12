<template>
    <div class="stage c">
        <ul class="list">
            <li class="item item_head">
                <div class="item-i">
                    <div class="item-img">
                        <c-imgHolder imgClass="head-img" src="//images2015.cnblogs.com/blog/528573/201609/528573-20160925223248967-1344840692.jpg"></c-imgHolder>
                    </div>
                    <div class="item-info">
                        <p class="title">yangtao</p>
                        <p class="desc">微信号：wxid_yangtao</p>
                    </div>
                    <div class="item-other">
                        <c-imgHolder class="qr" src="static/images/chat-info-qr.png"></c-imgHolder>
                        <i class="fa fa-angle-right"></i> 
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'; 
import chatbar from 'index/widget/chatbar.vue';
import chatlinkbar from 'index/widget/chatlinkbar.vue';

export default {
    name:'c-chatdetail',
    data(){
        return{
            topModel:{
                backText:'微信',
                backPath:'/weixin/room',
                curText:'',
                nextPath:'',
                nextIcon:''
            }
        }
    },
    computed:{
        ...mapGetters([
            'chat_base',
            'dialogue_type',
            'dialogue',
            'dialogue_bar',
            'chat_member',
            'chat_config',
            'backPath'
        ])
    },
    watch:{
        '$route':{
            handler(){
                //icon
                this.topModel.nextIcon = 'icon-chat-' + this.dialogue_type
                this.topModel.curText = this.chat_base.name
                //bar
                this.topModel.isMute = this.chat_config.newsMute
                //nextPath
                let nextPath = '';
                let roleType = this.dialogue_type;
                if (roleType === 'group') {
                    nextPath = '/weixin/room/chat-info'
                } else if (roleType === 'friends') {
                    nextPath = '/weixin/room/chat-detail'
                } else if (roleType === 'service') {
                    nextPath = ''
                }
                this.topModel.nextPath = nextPath
            },
            immediate:true
        }
    },
    methods:{
        fHeaderLeftClick(){
            location.hash = this.backPath;
        },
        fHeaderRightClick(){
            location.hash = this.topModel.nextPath;
        }
    },
    components:{
        'c-chatbar':chatbar,
        'c-chatlinkbar':chatlinkbar
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