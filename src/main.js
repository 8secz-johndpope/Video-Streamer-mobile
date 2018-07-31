import Vue from 'nativescript-vue';

import router from './router';

import store from './store';

import './styles.scss';

// Uncomment the following to see NativeScript-Vue output logs
Vue.config.silent = false;

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.registerElement('VideoPlayer', () => require('nativescript-videoplayer').Video);
Vue.registerElement('YoutubePlayer', () => require('nativescript-youtubeplayer/angular').YoutubePlayer);
Vue.registerElement('Comments', () => require('nativescript-comments').Comments);
var VueResource = require('vue-resource');

Vue.use(VueResource);

new Vue({

  router,

  store,

}).$start();
