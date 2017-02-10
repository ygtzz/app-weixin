<template>
    <div class="stage">
        <c-cHeader :bBack="true" backText="微信" midText="微信(12)">
            <span><i class="fa fa-angle-right"></i></span>
        </c-cHeader>
       <h1>chatroom</h1>
       <c-chatbar></c-chatbar>
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
</style>