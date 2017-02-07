<template>
    <div class="weixin">
        <div class="search_bar">
            <div class="search">
                <i class="fa fa-search"></i>
                <span>搜索</span>
            </div>
        </div>
        <div class="chat">
            <ul class="chatlist">
                <li class="chatitem" v-for="chat in wechat_list">
                    <div class="item">
                        aaa
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {mapGetters,mapActions} from "vuex";

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
            console.log(this.wechat_list)
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
    }
}
</script>
<style lang="sass" scoped>
    .search_bar{padding:8px 10px;background-color:#efeff4;}
    .search{color:#b2b2b2;font-size:14px;background-color:#fff;line-height:1.8;text-align:center;border-radius:4px}
</style>