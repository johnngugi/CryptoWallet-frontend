import Vue from 'vue';
import Vuex from 'vuex';
import auth from "./modules/auth"
import user from "./modules/user";
import signup from "./modules/signup";

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {
        auth,
        user,
        signup
    }
});
