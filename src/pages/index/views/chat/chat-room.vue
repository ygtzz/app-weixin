<template>
    <div class="stage con">
        <header class="header">
            <c-cHeader @leftClick="fHeaderLeftClick" :bBack="true" :backText="topModel.backText" :midText="topModel.curText"
                       @rightClick="fHeaderRightClick" :rightIcon="topModel.nextIcon">
                <span class="member" v-show="dialogue_type==='group'">({{chat_member.length}})</span>
                <span class="iconfont icon-mute" v-show='topModel.isMute'></span>
            </c-cHeader>
        </header>
        <section class="body">
            
        </section>
        <footer class="footer">
            <c-chatbar v-if="dialogue_type!='service'"></c-chatbar>        
            <c-chatlinkbar v-if="dialogue_type=='service'" :aMenu="dialogue_bar.menu"></c-chatlinkbar>
        </footer>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'; 
import chatbar from 'index/widget/chatbar.vue';
import chatlinkbar from 'index/widget/chatlinkbar.vue';

export default {
    name:'c-chatroom',
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
    .con{display:flex;flex-direction:column}
    .body{flex:1}
    .member{font-size:18px;}
    .icon-mute{font-size: 12px !important;color:#878689;}
</style>