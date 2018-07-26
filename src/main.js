import Vue from 'nativescript-vue';

import router from './router';

import store from './store';

import './styles.scss';

// Uncomment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

var VueResource = require('vue-resource');

Vue.use(VueResource);

new Vue({

  router,

  store,

}).$start();
