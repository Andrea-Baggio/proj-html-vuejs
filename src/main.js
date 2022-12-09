import Vue from 'vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import {
  faTwitter, faFacebook, faInstagram, faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  faChevronDown, faCartShopping, faBook, faArrowRight,
  faLifeRing, faCheck, faMagnifyingGlass, faSignal, faArrowUp,
} from '@fortawesome/free-solid-svg-icons';

import {
  faFileLines, faUser, faHeart, faCalendar,
} from '@fortawesome/free-regular-svg-icons';
import App from './App.vue';

/* add icons to the library */
library.add(
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faChevronDown,
  faCartShopping,
  faBook,
  faUser,
  faArrowRight,
  faFileLines,
  faLifeRing,
  faCheck,
  faMagnifyingGlass,
  faHeart,
  faSignal,
  faCalendar,
  faArrowUp,
);

/* add font awesome icon component */
Vue.component('FontAwesomeIcon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
