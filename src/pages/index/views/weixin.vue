<template>
    <div class="footer">
        <h1>微信</h1>
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
    .footer{
        text-align: center;
        color:#5D656B;
        background-color:#f9f9f9;
        font-size:12px;
        height:50px;
        display:flex;
        align-items:center;
        a:link,a:visited,a:hover,a:active{color:#929292}
        a{
            display:block;
            flex:1;
            text-decoration:none;
            cursor:pointer;
        }
        p{margin:0;padding:0;transform:scale(0.9)}
        i{
            font-size:28px;
        }
        .dot{width:11px;height:11px;margin-left:-8px;margin-top:1px}
        .count{background-color:#f43531;color:#fff;font-size:14px;line-height:18px;border-radius:9px;padding:0px 4px;position:absolute;margin-left:-8px;
            font-family: PingFang SC, Hiragino Sans GB, Arial, Microsoft YaHei, Helvetica;
        }
    }
</style>