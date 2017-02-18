<template>
    <div class="c">
        <transition name="slide-up" mode="out-in">
            <div class="bar" v-if="way=='menu'" key="menu">
                <div class="left" @click="fSwitchWay">
                    <div class="iconfont icon-dialogue-bar-jianpan"></div>
                </div>
                <div class="right">
                    <ul class="list">{{item}}
                        <li class="item" v-for="item in aMenu" @click="fLinkClick(item)">{{item.title}}</li>
                    </ul>
                </div>
            </div>
            <div class="bar" v-if="way=='chat'" key="chat">
                <div class="left" @click="fSwitchWay">
                    <div class="iconfont icon-dialogue-bar-menu"></div>
                </div>
                <div class="right">
                    <c-chatbar></c-chatbar>
                </div>
            </div>
        </transition>
    </div>    
</template>
<script>
import {mapActions} from 'vuex';
import chatbar from './chatbar.vue';

export default {
    name:'c-charLinkbar',
    props: {
        aMenu:{
            type:Array
        }
    },
    data() {
        return {
            way: 'menu'
        }
    },
    methods: {
        ...mapActions([
            'set_iframe_url'
        ]),
        fSwitchWay(){
            this.way = this.way == 'menu' ? 'chat' : 'menu';
        },
        fLinkClick(item){
            if(item.url){
                this.set_iframe_url(item).then(()=>{
                    this.$router.push({path:'/weixin/room/link'})
                });
            }
        }
    },
    components:{
        'c-chatbar':chatbar
    }
}
</script>
<style lang="sass" scoped>
    .bar{display:flex;background-color:#fff;border-top:1px solid #dadada}
    .left{
        padding:3px 10px;
        border-right:1px solid #dbdbdb;
        .iconfont{font-size:dpr(30px);line-height:(42/30);color:#7d7e83;}
    }
    .right{flex:1}
    .list{display:flex;height:100%;}
    .item{flex:1;font-size:dpr(16px);text-align:center;height:100%;display:flex;align-items:center;justify-content:center;
        &:not(:last-child){border-right:1px solid #dadada}
    }
</style>
