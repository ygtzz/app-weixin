<template>
    <div class="chatbar">
        <span class="iconfont icon-dialogue-jianpan" v-show="way==='say'" @click="switch_way('txt')"></span>
        <span class="iconfont icon-dialogue-voice" v-show='way==="txt"' @click='switch_way("say")'></span>
        <input class="input" type="text" />
        <span class="expression iconfont icon-dialogue-smile"></span>
        <span class="more iconfont icon-dialogue-jia"></span>
    </div>    
</template>
<script>
export default {
    name:'c-charbar',
    props: {

    },
    data() {
        return {
            way: 'txt',
            state_say: false, //'chat-say_touched'
            say_cancel:false,
        }
    },
    methods: {
        switch_way(way) {
            //say,txt
            // console.log(way)
            this.way = way;
        },
        switch_way_say(boo) {
            this.state_say = boo;
            this.say_cancel = false;
        },
        switch_say_cancel(){
            this.say_cancel = true;
        }
    }
}
</script>
<style lang="sass" scoped>
    .chatbar{
        padding:0;
        background-color:#fff;
        height:46px;
        line-height:46px;
        display:flex;
        align-items:center;
        .iconfont{font-size:30px;line-height:40px;color:#7d7e83;padding:0 5px;}
    }
    .input{
        flex:1;
        border:1px solid #bdbdbd;
        border-radius:3px;
        padding:6px 5px;
        font-size:16px;
    }
</style>
