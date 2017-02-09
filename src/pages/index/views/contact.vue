<template>
    <div>
        <c-searchbar></c-searchbar>
        <ul class="contact-head">
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
        <ul class="contact-list">
            <li v-for="grouping in contact_friends"> 
                <p class="contact-alpha" v-text="grouping.alpha"></p>
                <div class="item" @click="go_personInfo(item.id)" v-for="item in grouping.list">
                    <div class="item-i">
                        <div class="item-img">
                            <c-imgHolder :src="item.iconSrc"></c-imgHolder>
                        </div>
                        <div class="item-info">
                            <p v-text="item.remark"></p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import searchBar from '../widget/searchbar.vue';
import imgHolder from '../widget/imgHolder.vue';
import {mapGetters,mapActions} from 'vuex';

export default {
    name:'c-contact',
    created(){
        this.get_friends_list()
        this.set_menu_active(1)
    },
    computed:{
        ...mapGetters({
            contact_friends:'contact_friends'
        })
    },
    methods:{
        ...mapActions({
            et_menu_active:'et_menu_active',
            get_friends_list:'get_friends_list',
            set_friends_id:'set_friends_id',
            get_person_info:'get_person_info',
            set_menu_active:'set_menu_active'
        }),
        go_personInfo(id){
            this.get_person_info(id,()=>{
                this.$router.go({'path':'/contact/person-info'})
            })
        }
    },
    components:{
        'c-searchbar':searchBar,
        'c-imgHolder':imgHolder
    }
}
</script>
<style lang="sass" scoped>
   .item{padding-left:15px;background-color:#fff;}
   .item-i{padding:9px 0;display:flex;align-items:center;}
   .item:not(:last-child) .item-i{border-bottom:1px solid #ECECEC;}
   .item-img{width:36px;height:36px;margin-right:10px}
   .item-info{font-size:17px} 
   .contact-alpha{padding-left:15px;color:#888}
</style>