<template>
    <div>
        <ul class="list">
            <li class="item item_head">
                <div class="item-i">
                    <div class="item-img">
                        <c-imgHolder imgClass="head-img" src="http://oi7sxakwb.bkt.clouddn.com/%E5%BE%97%E4%B9%8B%E6%88%91%E5%B9%B8.jpg"></c-imgHolder>
                    </div>
                    <div class="item-info">
                        <p class="title">weige</p>
                        <p class="desc">微信号：wxid_weige</p>
                    </div>
                    <div class="item-other">
                        <c-imgHolder class="qr" src="static/images/chat-info-qr.png"></c-imgHolder>
                        <i class="fa fa-angle-right"></i> 
                    </div>
                </div>
            </li>
        </ul>
        <ul class="list">
            <li class="item">
                <div class="item-i">
                    <div class="item-img">
                        <c-imgHolder src="static/images/me_more-my-album.png"></c-imgHolder>
                    </div>
                    <div class="item-info">相册</div>
                    <div class="item-other"><i class="fa fa-angle-right"></i> </div>
                </div>
            </li>
            <li class="item">
                <div class="item-i">
                    <div class="item-img">
                        <c-imgHolder src="static/images/me_more-my-favorites.png"></c-imgHolder>
                    </div>
                    <div class="item-info">收藏</div>
                    <div class="item-other"><i class="fa fa-angle-right"></i> </div>
                </div>
            </li>
            <li class="item">
                <div class="item-i">
                    <div class="item-img">
                        <c-imgHolder src="static/images/me_more-my-bank-card.png"></c-imgHolder>
                    </div>
                    <div class="item-info">钱包</div>
                    <div class="item-other"><i class="fa fa-angle-right"></i> </div>
                </div>
            </li>
            <li class="item">
                <div class="item-i">
                    <div class="item-img">
                        <c-imgHolder src="static/images/me_my-card-package-icon.png"></c-imgHolder>
                    </div>
                    <div class="item-info">卡包</div>
                    <div class="item-other"><i class="fa fa-angle-right"></i> </div>
                </div>
            </li>
        </ul>
        <ul class="list">
            <li class="item">
                <div class="item-i">
                    <div class="item-img">
                        <c-imgHolder src="static/images/me_more-expression.png"></c-imgHolder>
                    </div>
                    <div class="item-info">表情</div>
                    <div class="item-other"><i class="fa fa-angle-right"></i> </div>
                </div>
            </li>
        </ul>
        <ul class="list">
            <li class="item">
                <div class="item-i">
                    <div class="item-img">
                        <c-imgHolder src="static/images/me_more-setting.png"></c-imgHolder>
                    </div>
                    <div class="item-info">设置</div>
                    <div class="item-other"><i class="fa fa-angle-right"></i> </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    name:'c-me'
}
</script>
<style lang="sass" scoped>
   .list{margin-top:22px}
   .item{padding:0 15px;background-color:#fff;}
   .item-i{padding:9px 0;display:flex;align-items:center;}
   .item:not(:last-child) .item-i{border-bottom:1px solid #ECECEC;}
   .item-img{width:20px;height:20px;margin-right:5px}
   .item-info{font-size:dpr(17px);flex:1}
   .item-other{font-size:dpr(22px);color:#c8c8cd}
   .item_head{
       .item-img{
            width:60px;height:60px;
            :global(.imgHolder img){border-radius:4px;border: 1px solid #ccc}           
       }
   }
   .title{font-size:dpr(18px);color:#111;line-height:(25/18);}
   .desc{font-size:dpr(14px)}
   .qr{display:inline-block;width:25px;height:25px;vertical-align:middle;margin-right:10px;}
</style>