<template>
    <div class="header">
        <span class="nav-text">微信(12)</span>
        <span @click="fNavUserClick" class="jia-wrap">
            <i class="iconfont icon-tips-jia jia"></i>    
        </span>
    </div>
</template>
<script>
import {mapActions} from 'vuex';

export default {
    name:'c-header',
    methods:{
        ...mapActions({
            fToggleSideBar:'fToggleSideBar'
        }),
        fNavbarClick(){
            this.fToggleSideBar();
        },
        fNavUserClick(){

        }
    }
}
</script>
<style lang="sass" scoped>
    .header{
        background:#000;
        color:#efefef;
        line-height:50px;
        height:50px;
        text-align:center;
    }
    .nav-text{font-size:20px;}
    .jia-wrap{position:absolute;right:15px;}
    .jia{font-size:22px;touch-action: manipulation;user-select: none;-webkit-user-drag: none;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}
</style>