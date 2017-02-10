<template>
    <div class="stage con">
        <header class="header">
            <c-cHeader :bBack="true" backText="微信" midText="微信(12)">
                <span><i class="fa fa-angle-right"></i></span>
            </c-cHeader>
        </header>
        <section class="body">
            <h1>chatroom</h1>
        </section>
        <footer class="footer">
            <c-chatbar></c-chatbar>
        </footer>
    </div>
</template>
<script>
import chatbar from 'index/widget/chatbar.vue';

export default {
    name:'c-chatroom',
    components:{
        'c-chatbar':chatbar
    }
}
</script>
<style lang="sass" scoped>
    .con{display:flex;flex-direction:column}
    .body{flex:1}
</style>