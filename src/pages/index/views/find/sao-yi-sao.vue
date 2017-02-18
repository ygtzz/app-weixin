<template>
    <div class="stage c">
        <c-cHeader :bBack="true" :backText="topModel.backText" :midText="topModel.curText">
        </c-cHeader>
        <div class="body">
            <div class="scan-wrap">
                <div class="scan">
                    <div class="greenline"></div>
                    <div class="left-top"></div>
                    <div class="right-top"></div>
                    <div class="left-bottom"></div>
                    <div class="right-bottom"></div>
                </div>
                <div class="scan-desc">将二维码/条码放入框内,即可自动扫描</div>
            </div>
            <ul class="footer">
                <li @click="fItemClick(item)" class="item" v-for="item in aFoot">
                    <div class="img" :class="[{'cur':item.cls == activeFootItem},item.cls]"></div>
                    <p class="desc" :class="{'cur':item.cls == activeFootItem}">{{item.text}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>

export default {
    name:'c-yao-yi-yao',
    data(){
        return {
             topModel:{
                backText:'返回',
                curText:'二维码/条码'
            },
            aFoot:[
                {text:'扫码',cls:'qr-code'},
                {text:'封面',cls:'cover'},
                {text:'街景',cls:'streetscape'},
                {text:'翻译',cls:'translation'}                
            ],
            activeFootItem:'qr-code'
        }
    },
    methods:{
       fItemClick(item){
           this.activeFootItem = item.cls;
       }
    }
}
</script>
<style lang="sass" scoped>
   .c{color:#979797;background-color:#000;display:flex;flex-direction:column}
   .body{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;}
   .scan-wrap{flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center}
   .scan{width:262px;height:264px;border:1px solid #b3b3b3;position:relative;}
   .scan-desc{margin-top:10px;font-size:dpr(16px)}
   .greenline{position:absolute;top:2%;left:2%;width:96%;height:1px;
    background:radial-gradient(#72e52d 5%, #54cf21 50%, #0a4a04 80%, #000000 100%);
    animation:scrolldown 1.5s linear infinite;
    animation-delay:.3s
   }
   .left-top,.right-top,.left-bottom,.right-bottom{position:absolute;width:14px;height:14px;border:4px solid #09bb07;}
   .left-top{top:-1px;left:-1px;border-right:transparent;border-bottom:transparent}
   .right-top{top:-1px;right:-1px;border-left:transparent;border-bottom:transparent}
   .left-bottom{bottom:-1px;left:-1px;border-top:transparent;border-right:transparent;}
   .right-bottom{bottom:-1px;right:-1px;border-top:transparent;border-left:transparent}
   .footer{width:100%;text-align:center;padding-bottom:20px;}
   .item{text-align:center;display:inline-block;&:not(:last-child){margin-right:20px;}}
   .img{width:40px;height:40px;background-size:cover}
   .desc{margin-top:5px;font-size:dpr(16px);line-height:1.6;
        &.cur{color:#09bb07}
   }
   .qr-code{
        background-image: url(/static/images/sao-yi-sao/scan-qr-code.png);
        &.cur{background-image: url(/static/images/sao-yi-sao/scan-qr-code_hl.png);}
   }
   .cover{
        background-image: url(/static/images/sao-yi-sao/scan-book.png);
        &.cur{background-image: url(/static/images/sao-yi-sao/scan-book_hl.png);}
   }
   .streetscape{
        background-image: url(/static/images/sao-yi-sao/scan-street.png);
        &.cur{background-image: url(/static/images/sao-yi-sao/scan-street_hl.png);}
   }
   .translation{
       background-image:url(/static/images/sao-yi-sao/scan-word.png);
       &.cur{background-image:url(/static/images/sao-yi-sao/scan-word_hl.png);}
   }
   @keyframes scrolldown{
       0%{
           top:5%;
       }
       100%{
           top:95%
       }
   }
</style>