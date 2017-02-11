<template>
    <div class="weixin">
        <c-searchbar></c-searchbar>
        <div class="chat">
            <ul class="chatlist">
                <li class="chatitem" v-for="item in wechat_list">
                    <router-link :to="{name:'chatroom'}">
                        <div class="item">
                            <div class="item-img">
                                <c-imgHolder :src="item.base.iconSrc" :alt="pic"></c-imgHolder>
                            </div>
                            <div class="item-info">
                                <p class="info-title" v-text="item.base.name"></p>
                                <p class="info-msg">
                                    <span :title="item.base.type" v-show="item.base.type==='friends'" v-text="item.chatBaseModel.endChatAuth+':'"></span>
                                    <span v-text="item.chatBaseModel.endChatTxt"></span>
                                </p>
                            </div>
                            <div class="item-other">
                                <p class="other-time">{{item.chatBaseModel.endTimeStr | fmtDate('hh:ss')}}</p>
                                <p class="iconfont icon-mute" :title="item.chatConfigModel.newsMute" v-show="item.chatConfigModel.newsMute"></p>                           
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <transition name="cover">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>
<script>
import {mapGetters,mapActions} from "vuex";
import searchBar from '../widget/searchbar.vue';
import {fmtDate} from 'widget/filter/datetime';

export default {
    name:'c-weixin',
    created() {
        this.get_menu_wechat_list(() => {
            this.computed_unRead_count()
        })
    },
    watch:{
        '$route': function(){
            this.set_menu_active(0)
        }
    },
    computed:{
        ...mapGetters([
            'wechat_list'
        ])
    },
    methods:{
        ...mapActions([
            'get_menu_wechat_list',
            'set_menu_active',
            'set_chat',
            'set_chat_count',
            'set_news_state',
            'delete_news'
        ]),
        computed_unRead_count() {
            //计算未读数量
            let sum = 0;
            this.wechat_list.forEach(({
                chatBaseModel,
                chatConfigModel
            }, index) => {
                if (!chatConfigModel.newsMute) {
                    let count = chatBaseModel.newsUnreadCount
                    sum += count
                }
            })
            this.set_chat_count(sum)
        },
        increase_newsState(index, val) {
            this.isTouchSwipe = false;
            //改变已读未读状态并回调计算未读总和
            this.set_news_state(index, val, () => {
                this.currentIndex = -1
                this.computed_unRead_count()
            })
        },
        delete_item(index) {
            this.delete_news(index, () => {
                this.currentIndex = -1;
                this.computed_unRead_count()
            })
        }
    },
    components:{
        'c-searchbar':searchBar
    },
    filters:{
        fmtDate:fmtDate
    }
}
</script>
<style lang="sass" scoped>
    .item{display:flex;padding:4px 5px;background-color:#fff;border-bottom:1px solid #dbdbdb;}
    .item-img{width:50px;height:50px;}
    .item-info{flex:1;margin-left:8px}
    .info-title{font-size:18px;line-height:25px;}
    .info-msg{font-szie:14px;line-height:23px;color:#888}
    .item-other{color:#b2b2b2;text-align:right}
    .other-time{line-height:25px}
    :global(.imgHolder img){border-radius:4px} 
</style>
<style>
    
</style>