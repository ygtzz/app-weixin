import weixin from './views/weixin.vue';
import address from './views/address.vue';
import find from './views/find.vue';
import me from './views/me.vue';

export default [
    { path: '/', component: weixin },
    { path: '/weixin', component: weixin, name:'weixin'},
    { path: '/address', component: address,name:'address' },
    { path: '/find', component: find,name:'find'},
    { path: '/me', component: me,name:'me'}
];