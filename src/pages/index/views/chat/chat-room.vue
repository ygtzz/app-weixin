<template>
    <div class="stage con">
        <header class="header">
            <c-cHeader @leftClick="fHeaderLeftClick" :bBack="true" backText="微信" midText="微信(12)">
                <span><i class="fa fa-angle-right"></i></span>
            </c-cHeader>
        </header>
        <section class="body">
            
        </section>
        <footer class="footer">
            <c-chatlinkbar></c-chatlinkbar>
        </footer>
    </div>
</template>
<script>
import chatbar from 'index/widget/chatbar.vue';
import chatlinkbar from 'index/widget/chatlinkbar.vue';

export default {
    name:'c-chatroom',
    methods:{
        fHeaderLeftClick(){
            location.hash = "weixin";
        }
    },
    components:{
        'c-chatbar':chatbar,
        'c-chatlinkbar':chatlinkbar
    }
}
</script>
<style lang="sass" scoped>
    .con{display:flex;flex-direction:column}
    .body{flex:1}
</style>