<template>
    <div>
        <c-searchbar></c-searchbar>
        <ul>
            <li class="item">
                <div class="item-i">
                    <div class="item-img">
                        <c-imgHolder src="static/images/contact_top-friend-notify.png"></c-imgHolder>
                    </div>
                    <div class="item-info">
                        新的朋友
                    </div>
                </div>
            </li>
            <li class="item">
                <div class="item-i">
                    <div class="item-img">
                        <c-imgHolder src="static/images/contact_top-addgroup.png"></c-imgHolder>
                    </div>
                    <div class="item-info">
                        群聊
                    </div>
                </div>
            </li>
            <li class="item">
                <div class="item-i">
                    <div class="item-img">
                        <c-imgHolder src="static/images/contact_top-tag.png"></c-imgHolder>
                    </div>
                    <div class="item-info">
                        标签
                    </div>
                </div>
            </li>
            <li class="item">
                <div class="item-i">
                    <div class="item-img">
                        <c-imgHolder src="static/images/contact_top-offical.png"></c-imgHolder>
                    </div>
                    <div class="item-info">
                        公众号
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import searchBar from '../widget/searchbar.vue';
import imgHolder from '../widget/imgHolder.vue';

export default {
    name:'c-address',
    components:{
        'c-searchbar':searchBar,
        'c-imgHolder':imgHolder
    }
}
</script>
<style lang="sass" scoped>
   .item{padding-left:15px;background-color:#fff;}
   .item-i{padding:10px 0;display:flex;align-items:center;}
   .item:not(:last-child) .item-i{border-bottom:1px solid #d9d9d9;}
   .item-img{width:36px;height:36px;margin-right:10px}
   .item-info{font-size:17px}
</style>