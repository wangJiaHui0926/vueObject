import VueRouter from 'vue-router';
import Vue from 'vue';
// 导入组件
import HeroesList from '../views/heroes/List.vue';
import EquipsList from '../views/equips/List.vue';
import WeaponsList from '../views/weapons/List.vue';
import HeroesAdd from '../views/heroes/Add.vue';
import HeroesEdit from '../views/heroes/Edit.vue';

Vue.use(VueRouter);

var router = new VueRouter({
    
    linkActiveClass: 'active',

    routes: [
        { path: '/', redirect: '/heroes' },
        { name: 'heroes', path: '/heroes', component: HeroesList },
        { name: 'heroadd', path: '/heroes/add', component: HeroesAdd },
        { name: 'heroedit', path: '/heroes/:id', component: HeroesEdit, props: true },
        { name: 'equips', path: '/equips', component: EquipsList },
        { name: 'weapons', path: '/weapons', component: WeaponsList }
    ]
});

export default router;
