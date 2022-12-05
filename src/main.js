import Vue from 'vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import {
  faTwitter, faFacebook, faInstagram, faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

// import {
//   faChevronDown,
// } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';

/* add icons to the library */
library.add(faTwitter, faFacebook, faInstagram, faLinkedin);

/* add font awesome icon component */
Vue.component('FontAwesomeIcon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
