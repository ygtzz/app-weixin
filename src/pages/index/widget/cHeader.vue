<template>
    <div class="header">
        <div @click="fLeftClick" class="left">
            <i v-show="bBack" class="iconfont icon-return-arrow" ></i>
            <span v-text="backText" class="text"></span>
        </div>
        <div class="mid">
            <span v-text="midText" class="text"></span><slot></slot>
        </div>
        <div @click="fRightClick" class="right">
            <span :class="['iconfont',rightIcon]"></span>        
        </div>
    </div>
</template>
<script>
export default {
    name:'c-cHeader',
    data(){
        return {
            bMenuClose:true            
        }
    },
    props:{
        bBack:{
            type:Boolean,
            default:false
        },
        backText:{
            type:String
        },
        midText:{
            type:String
        },
        rightText:{
            type:String
        },
        rightIcon:{
            type:String
        }
    },
    methods:{
        fLeftClick(){
            this.$emit('leftClick');
        },
        fRightClick(){
            this.$emit('rightClick');
        }
    }
}
</script>
<style lang="sass" scoped>
    .header{
        background:linear-gradient(to bottom, #303036, #3c3b40);
        color:#efefef;
        line-height:46px;
        height:46px;
        display:flex;
        align-items:center;
        padding:0 15px;
        i,.iconfont{font-size:22px;}
        font-size:18px;
    }
    .left{
        text-align:left;

    }
    .right{text-align:right;}
    .left,.right{width:80px;overflow:hidden;word-wrap:break-word;}
    .mid{
        flex:1;
        text-align:center;
     
    }
</style>