import Vue from 'vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import App from './App.vue';

/* add icons to the library */
library.add(faTwitter, faFacebook, faInstagram);

/* add font awesome icon component */
Vue.component('FontAwesomeIcon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
