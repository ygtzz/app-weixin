<template>
    <div class="header">
        <div @click="fLeftClick" class="left">
            <i v-show="bBack" class="fa fa-angle-left" ></i>
            <span v-text="backText" class="text"></span>
        </div>
        <div class="mid">
            <span v-text="midText" class="text"></span>
        </div>
        <div @click="fRightClick" class="right">
            <slot></slot>          
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
    }
    .left{
        text-align:left;
        
        i{font-size:22px;}
        .text{font-size:18px;}
    }
    .right{text-align:right;}
    .left,.right{width:80px;overflow:hidden;word-wrap:break-word;}
    .mid{
        flex:1;
        text-align:center;
        .text{font-size:20px;}
    }
</style>