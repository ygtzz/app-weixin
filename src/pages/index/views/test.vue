<template>
   <div class="test">
       <div class="img"></div>
        <!-- <div class="border"></div> -->
        <mt-tabbar v-model="selected">
            <mt-tab-item id="外卖">
                <img slot="icon" src="./test/bar.png">
                外卖
            </mt-tab-item>
            <mt-tab-item id="订单">
                <img slot="icon" src="./test/bar.png">
                订单
            </mt-tab-item>
            <mt-tab-item id="发现">
                <img slot="icon" src="./test/bar.png">
                发现
            </mt-tab-item>
            <mt-tab-item id="我的">
                <img slot="icon" src="./test/bar.png">
                我的
            </mt-tab-item>
        </mt-tabbar>
   </div>
</template>
<script>
import Vue from 'vue';
import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

export default {
    name:'c-test',
    created() {
        
    },
    watch:{
        
    },
    computed:{
       
    },
    methods:{
      
    },
    components:{
        
    },
    filters:{
       
    }
}
</script>
<style lang="sass" scoped>
    .img{
        background:url('./test/banner.png') no-repeat center;
        background-size:contain;
        width:375px;
        height:346px;
    }
    .test{
        padding-top:50px;
    }
    .border{
        border-bottom:1px solid #000;
    }
</style>