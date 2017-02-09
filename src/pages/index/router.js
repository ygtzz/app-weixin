import weixin from './views/weixin.vue';
import address from './views/contact.vue';
import find from './views/find.vue';
import me from './views/me.vue';

export default [
    { path: '/', component: weixin },
    { path: '/weixin', component: weixin, name:'weixin'},
    { path: '/contract', component: address,name:'contact' },
    { path: '/find', component: find,name:'find'},
    { path: '/me', component: me,name:'me'}
];