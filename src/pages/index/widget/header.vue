<template>
    <div class="header">
        <span class="nav-text">微信(12)</span>
        <span @click="fNavAddClick" class="jia-wrap">
            <i class="iconfont icon-tips-jia jia"></i>
        </span>
        <ul class="tips-menu" :class="{'tips-close':bMenuClose}">
            <li class="tip-item"><i class="iconfont icon-tips-xiaoxi"></i>发起群聊</li>
            <li class="tip-item"><i class="iconfont icon-tips-add-friend"></i>添加朋友</li>
            <li class="tip-item"><i class="iconfont iconfont icon-tips-saoyisao"></i>扫一扫</li>
            <li class="tip-item"><i class="iconfont icon-tips-fukuan"></i>收付款</li>
        </ul>   
    </div>
</template>
<script>
export default {
    name:'c-header',
    data(){
        return {
            bMenuClose:true            
        }
    },
    methods:{
        fNavAddClick(){
            this.bMenuClose = !this.bMenuClose;
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
    .tips-menu{position:absolute;width:120px;right:5px;top:53px;padding:2px 10px;background-color:#49484b;
        color:#fff;font-size:16px;line-height:36px;text-align:left;transition:all .2s ease;}
    .tips-menu:before{width:0;height:0;position:absolute;top:-8px;right:15px;content:"";border-width:0 6px 8px;border-color:rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #49484b rgba(0, 0, 0, 0);border-style:solid;}
    .tip-item:not(:last-child){border-bottom:1px solid #5b5b5d;}
    .tip-item i{margin-right:15px}
    .tips-close{opacity:0;transform:scale(.7);transform-origin:90% 0}
</style>