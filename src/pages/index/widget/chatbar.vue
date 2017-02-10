<template>
    <div class="chatbar">
        <span class="iconfont icon-dialogue-jianpan" v-show="way==='say'" @click="fSwitchWay('txt')"></span>
        <span class="iconfont icon-dialogue-voice" v-show='way==="txt"' @click='fSwitchWay("say")'></span>
        <div class="chat-way">
            <input class="input" type="text" v-show="way=='txt'" />
            <div class="voicebar" v-show="way=='say'" @touchstart="fSayingStart" @touchmove="fSayingMove" @touchend="fSayingEnd">
                <span v-show="!bSaying">按住&nbsp;说话</span>
                <span v-show="bSaying">松开&nbsp;结束</span>
            </div>
        </div>
        <span class="iconfont icon-dialogue-smile"></span>
        <span class="iconfont icon-dialogue-jia"></span>
        <!--saying dialog-->
        <div class="voicewrap" v-show="bSaying">
            <div class="voice-start" v-show='bSaying && !bSayingMove'>
                <div class="voice-inner">
                    <div class="voice-icon fa fa-microphone"></div>
                    <div class="voice-volume">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <p>手指上划,取消发送</p>
            </div>
            <div class="voice-cancel" v-show='bSaying && bSayingMove'>
                <div class="fa fa-undo"></div>
                <p >松开手指,取消发送</p>
            </div>
        </div>
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
            bSaying: false,
            bSayingMove:false
        }
    },
    methods: {
        fSwitchWay(way) {
            this.way = way;
        },
        fSayingStart(){
            this.bSaying = true;
        },
        fSayingMove(){
            this.bSayingMove = true;
        },
        fSayingEnd(){
            this.bSaying = false;
            this.bSayingMove = false;            
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
    .chat-way{flex:1}
    .input{
        width:100%;
        box-sizing:border-box;
        border:1px solid #bdbdbd;
        border-radius:3px;
        padding:6px 5px;
        font-size:16px;
    }
    .voicebar{
        color:#878787;
        border:1px solid #bdbdbd;
        border-radius:3px;
        width:100%;
        line-height:32px;
        text-align:center;
    }
    .voicewrap{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
               background-color:#78787B;border-radius:4px;padding:20px 15px 0;color:#fff;text-align:center}
    .voice-inner{display:flex;justify-content:center}
    .fa{font-size:50px;margin-right:5px;}
    .voice-volume{
        display:flex;
        flex-direction:column;
        span{
            display:inline-block;width:30px;height:2px;background-color:rgba(255,255,255,.9);
            margin-top:4px;
        }
        span:nth-child(1){width:20px;}
        span:nth-child(2){width:18px;}
        span:nth-child(3){width:16px;}
        span:nth-child(4){width:14px;}
        span:nth-child(5){width:12px;}
        span:nth-child(6){width:10px;}
        span:nth-child(7){width:8px;}
        span:nth-child(8){width:6px;}
    }
</style>
