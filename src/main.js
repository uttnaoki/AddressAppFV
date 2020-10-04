import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

Vue.config.productionTip = false;

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDgJK9hfNWdfusFGLPkAqXnwsYJDZ42ifs",
  authDomain: "my-address-pj-63d37.firebaseapp.com",
  databaseURL: "https://my-address-pj-63d37.firebaseio.com",
  projectId: "my-address-pj-63d37",
  storageBucket: "my-address-pj-63d37.appspot.com",
  messagingSenderId: "805442444105",
  appId: "1:805442444105:web:6d15c144ba736563699898",
  measurementId: "G-ESGHPMTGEX",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
