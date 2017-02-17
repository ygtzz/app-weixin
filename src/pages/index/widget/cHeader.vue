<template>
    <div class="header">
        <div @click="fLeftClick" class="left">
            <i v-show="bBack" class="iconfont icon-return-arrow" ></i><!--
            --><span v-text="backText" class="text"></span>
        </div>
        <div class="mid">
            <span v-text="midText" class="text"></span><slot></slot>
        </div>
        <div @click="fRightClick" class="right">
            <span :class="[rightIcon]"></span>        
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';

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
        },
        rightPath:{
            type:String
        }
    },
    computed:{
        ...mapGetters([
            'backPath'
        ])
    },
    methods:{
        fLeftClick(){
            if(this.backPath.path){
                this.$router.push(this.backPath.path);
            }
        },
        fRightClick(){
            if(this.rightPath){
                this.$router.push(this.rightPath);  
            }
            else{
                this.$emit('rightClick')
            }
        }
    }
}
</script>
<style lang="sass" scoped>
    [data-dpr="1"]{
        .left{font-size: 16px}
        .header{
            i,.iconfont{font-size:18px;}
            font-size:18px;
        }
    }
    [data-dpr="2"]{
        .left{font-size: 32px}
        .header{
            i,.iconfont{font-size:36px;}
            font-size:36px;
        }
    }
    [data-dpr="3"]{
        .left{font-size: 48px}
        .header{
            i,.iconfont{font-size:54px;}
            font-size:54px;
        }
    }
    .header{
        background:linear-gradient(to bottom, #303036, #3c3b40);
        color:#efefef;
        line-height:92px;
        height:92px;
        display:flex;
        align-items:center;
        padding:0 15px;
        transform:rotate(0)
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