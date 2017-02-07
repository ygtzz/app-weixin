<template>
    <div class="weixin">
        <div class="search_bar">
            <div class="search">
                <i class="fa fa-search"></i>
                <span>搜索</span>
            </div>
        </div>
        
    </div>
</template>
<script>
import Vue from "vue";

export default {
    name:'c-footer',
    className: 'footer'
}
</script>
<style lang="sass" scoped>
    .search_bar{padding:8px 10px;background-color:#efeff4;}
    .search{color:#b2b2b2;font-size:14px;background-color:#fff;line-height:1.8;text-align:center;border-radius:4px}
</style>