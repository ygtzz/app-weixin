import weixin from './views/weixin.vue';
import address from './views/contact.vue';
import find from './views/find.vue';
import me from './views/me.vue';
import chatroom from './views/chat/chat-room.vue';
import chatdetail from './views/chat/chat-detail.vue';
import chatinfo from './views/chat/chat-info.vue';
import link from './widget/iframe.vue';
import personInfo from './views/contact/person-info.vue';
import personInfoSet from './views/contact/person-info-set.vue';
import newFriends from './views/contact/new-friends.vue';
import addFriends from './views/contact/add-friends.vue';
import groupChat from './views/contact/group-chat.vue';
import yaoyiyao from './views/find/yao-yi-yao.vue';

export default [
    { path: '/', component: weixin },
    { path: '/weixin', component: weixin, name:'weixin',
      children:[
          {
              path:'room',component:chatroom,name:'chatroom',
              children:[
                  {path:'chat-detail',component:chatdetail,name:'chatdetail'},
                  {path:'chat-info',component:chatinfo,name:'chatinfo'},
                  {path:'link',component:link,name:'link'}
              ]
          }
      ]
    },
    { path: '/contact', component: address,name:'contact',
      children:[
         {
            path:'person-info',component:personInfo,name:'personInfo',
            children:[
                {path:'set',component:personInfoSet,name:'personInfoSet'}
            ]
         },
         {
            path:'new-friends',component:newFriends,name:'newFriends',
            children:[
                {path:'add',component:addFriends,name:'new-addFriends'}
            ]
         },
         {
            path:'add-friends',component:addFriends,name:'addFriends'
         },
         {
            path:'group-chat',component:groupChat,name:'groupChat'
         }
      ]
    },
    { path: '/find', component: find,name:'find',
      children:[
          { path: 'yao-yi-yao', component: yaoyiyao,name:'yao-yi-yao'}
      ]
    },
    { path: '/me', component: me,name:'me'}
];