//个人,群 公众号 基本　数据模型
/*
  id
  name
  wxid
  qq
  email
  type  [friends:好友/group:群/service:服务号/sub:订阅号]
  iconSrc
  qrCode
  signature   //签名
  newsUnreadCount {Number} //未读
  endTimeStr    //最后消息
  endChatAuth   //最后消息作者
  endChatTxt    //最后消息内容
  chatBackground //聊天背景
  newsMute  {Boolean} //消息免打扰
  area
  selfPhotos
  telphone
 */
module.exports = {
    "base": {
        "id": 1,
        "name": "weige",
        "nickname": "weige",
        "remark":"weige",
        "wxid": "wxid_mengwei",
        "qq": "00001",
        "email": "00001@qq.com",
        "type": "firends",
        "iconSrc": "http://oi7sxakwb.bkt.clouddn.com/%E5%BE%97%E4%B9%8B%E6%88%91%E5%B9%B8.jpg",
        "qrCode": "",
        "telphone":'xxxxxxx',
        "signature": "个性签名",
        "area":["中国","北京","海淀"],
        "selfPhotos":[{imgSrc:""}]
    },
    "chatPrevivw": {
        "newsUnreadCount": 1, //未读
        "endTimeStr": 1472632586443,
        "endChatAuth": "weige",
        "endChatTxt": "出去走走",
        "chatBackground": null, //聊天背景
        "newsMute": false
    }
}
