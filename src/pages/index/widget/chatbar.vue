<template>
    <div>
        <span class="iconfont icon-dialogue-jianpan" v-show="way==='say'" v-touch:tap="switch_way('txt')"></span>
        <span class="iconfont icon-dialogue-voice" v-show='way==="txt"' v-touch:tap='switch_way("say")'></span>
        
</template>
<script>
export default {
    replace: true,
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
