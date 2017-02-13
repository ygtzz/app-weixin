<template>
    <div>
        <c-searchbar></c-searchbar>
        <ul class="contact-head">
            <li class="item" v-for="item in aHead" @click="fHeadClick(item)">
                <div class="item-i">
                    <div class="item-img">
                        <c-imgHolder :src="item.imgUrl"></c-imgHolder>
                    </div>
                    <div class="item-info">
                        {{item.text}}
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
        <transition name="cover">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
import searchBar from '../widget/searchbar.vue';
import {mapGetters,mapActions} from 'vuex';

export default {
    name:'c-contact',
    created(){
        this.get_friends_list()
        this.set_menu_active(1)
    },
    data(){
        return {
            aHead:[
                {text:'新的朋友',imgUrl:'static/images/contact_top-friend-notify.png',type:'new',url:'/contact/new-friends'},
                {text:'群聊',imgUrl:'static/images/contact_top-addgroup.png',type:'group',url:'/contact/group-chat'},
                {text:'标签',imgUrl:'static/images/contact_top-tag.png',type:'mark',url:'/contact/new-friends'},
                {text:'公众号',imgUrl:'static/images/contact_top-offical.png',type:'account',url:'/contact/new-friends'}                
            ]
        }
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
            this.get_person_info(id).then(()=>{
                this.$router.push({'path':'/contact/person-info'})
            });
        },
        fHeadClick(item){
            this.$router.push({path:item.url});
        }
    },
    components:{
        'c-searchbar':searchBar
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