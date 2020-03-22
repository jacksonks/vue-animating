import Vue from 'vue'
import Router from 'vue-router'
import Home from "../views/Home";
import About from "../views/About";
import List from "../views/List";
import Cards from "../views/Cards";
import Drawer from "../views/Drawer";
import Stagger from "../views/Stagger";
import Simple from "../views/Simple";
import State from "../views/State";
import Timeline from "../views/Timeline";
import Master from "../views/Master";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/About',
            name: 'About',
            component: About
        },
        {
            path: '/List',
            name: 'List',
            component: List
        },
        {
            path: '/Cards',
            name: 'Cards',
            component: Cards
        },
        {
            path: '/Drawer',
            name: 'Drawer',
            component: Drawer
        },
        {
            path: '/Stagger',
            name: 'Stagger',
            component: Stagger
        },
        {
            path: '/Simple',
            name: 'Simple',
            component: Simple
        },
        {
            path: '/State',
            name: 'State',
            component: State
        },
        {
            path: '/Timeline',
            name: 'Timeline',
            component: Timeline
        },
        {
            path: '/Master',
            name: 'Master',
            component: Master
        },
    ],
    mode: 'history'
})