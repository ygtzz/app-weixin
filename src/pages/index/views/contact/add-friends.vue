<template>
    <div class="stage c">
        <c-cHeader :bBack="true" :backText="topModel.backText" :midText="topModel.curText">
        </c-cHeader>
        <div class="input">
            <span class="iconfont icon-search"></span><!--
            --><input type="text" placeholder="微信号/手机号"/>
        </div>
        <div class="weixin">
            我的的微信号:xxxxxx_2008
            <div class="img">
                <c-imgHolder src="static/images/contact_add-friend-my-qr.png"></c-imgHolder>
            </div>
        </div>
        <ul class="list">
            <li class="item">
                <div class="item-i">
                    <div class="item-img">
                        <c-imgHolder src="/static/images/contact_add-friend-reda.png"></c-imgHolder>
                    </div>
                    <div class="item-info">
                        <p class="title">雷达加朋友</p>
                        <p class="desc">添加身边的朋友</p>
                    </div>
                    <div class="item-other"><i class="fa fa-angle-right"></i> </div>
                </div>
            </li>
            <li class="item">
                <div class="item-i">
                    <div class="item-img">
                        <c-imgHolder src="/static/images/contact_add-friend-addgroup.png"></c-imgHolder>
                    </div>
                    <div class="item-info">
                        <p class="title">面对面建群</p>
                        <p class="desc">与身边的朋友进入同一个群聊</p>
                    </div>
                    <div class="item-other"><i class="fa fa-angle-right"></i> </div>
                </div>
            </li>
            <li class="item">
                <div class="item-i">
                    <div class="item-img">
                        <c-imgHolder src="/static/images/contact_add-friend-scanqr.png"></c-imgHolder>
                    </div>
                    <div class="item-info">
                        <p class="title">扫一扫</p>
                        <p class="desc">扫描二维码名片</p>
                    </div>
                    <div class="item-other"><i class="fa fa-angle-right"></i> </div>
                </div>
            </li>
            <li class="item">
                <div class="item-i">
                    <div class="item-img">
                        <c-imgHolder src="/static/images/contact_add-friend-contacts.png"></c-imgHolder>
                    </div>
                    <div class="item-info">
                        <p class="title">手机联系人</p>
                        <p class="desc">添加通讯录中的朋友</p>
                    </div>
                    <div class="item-other"><i class="fa fa-angle-right"></i> </div>
                </div>
            </li>
            <li class="item">
                <div class="item-i">
                    <div class="item-img">
                        <c-imgHolder src="/static/images/contact_add-friend-offical.png"></c-imgHolder>
                    </div>
                    <div class="item-info">
                        <p class="title">公众号</p>
                        <p class="desc">获得更多资讯和服务</p>
                    </div>
                    <div class="item-other"><i class="fa fa-angle-right"></i> </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    name:'c-add-friends',
    data(){
        return {
             topModel:{
                backText:'通讯录',
                curText:'添加朋友'
            }           
        }
    }
}
</script>
<style lang="sass" scoped>
   .list{margin-top:22px;font-size:dpr(17px);}
   .item{padding:0 15px;background-color:#fff;}
   .item-i{padding:9px 0;display:flex;align-items:center;}
   .item:not(:last-child) .item-i{border-bottom:1px solid #ECECEC;}
   .item-img{width:35px;height:35px;margin-right:15px}
   .item-info{flex:1;line-height:1.41}
   .item-other{font-size:dpr(22px);color:#c8c8cd}
   .title{font-size:dpr(15px);}
   .desc{font-size:dpr(12px);color:#b7b7b7;}
   .input{
        width:100%;
        padding:10px 30px;background:#fff;margin-top:20px;
        border-top: 1px solid #d9d9d9;
        border-bottom: 1px solid #d9d9d9;
        .iconfont{color: #40b938;}
        input{border:0;width:80%;padding:5px 4px;font-size:dpr(16px);vertical-align:middle}
   }
   .weixin{margin-top:10px;text-align:center;font-size:dpr(17px)}
   .img{width:24px;height:24px;display:inline-block;}
   :global(.imgHolder img){vertical-align: middle;}
</style>