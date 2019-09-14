import Vue from 'vue'
import App from './App.vue'
import AppHeader from './components/Header.vue'
import AppVolonter from './components/Volonter.vue'
import AppCard from './components/Card.vue'
import AppOrg from './components/Org.vue'
import AppOrgcard from './components/Orgcard.vue'
import AppHead from './components/Head.vue'
import AppFooter from './components/Footer.vue'
import AppVacancy from './components/Vacancy.vue'
import AppVacancycard from './components/Vacancycard.vue'
import AppProf from './components/Prof.vue'
import 'w3-css/w3.css'



Vue.component('AppHeader', AppHeader);
Vue.component('AppVolonter', AppVolonter);
Vue.component('AppOrg', AppOrg);
Vue.component('AppVacancy', AppVacancy)
Vue.component('AppHead', AppHead);
Vue.component('AppFooter', AppFooter);
Vue.component('AppCard', AppCard);
Vue.component('AppOrgcard', AppOrgcard);
Vue.component('AppVacancycard', AppVacancycard);
Vue.component('AppProf', AppProf);



new Vue({
  el: '#app',
  render: h => h(App)
})
