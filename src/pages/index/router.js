import weixin from './views/weixin.vue';
import address from './views/contact.vue';
import find from './views/find.vue';
import me from './views/me.vue';
import chatroom from './views/chat/chat-room.vue';
import chatdetail from './views/chat/chat-detail.vue';
import chatinfo from './views/chat/chat-info.vue';
import link from './widget/iframe.vue';

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
    { path: '/contract', component: address,name:'contact' },
    { path: '/find', component: find,name:'find'},
    { path: '/me', component: me,name:'me'}
];