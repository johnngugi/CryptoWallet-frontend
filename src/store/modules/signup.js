import axios from "axios";
import Cookies from 'js-cookie'
import AuthService from "@/services/AuthService";
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR } from "../actions/signup";
import { USER_REQUEST } from "../actions/user";

const state = {
    token: null,
    status: '',
};

const getters = {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
};

const actions = {
    [SIGNUP_REQUEST]: ({ commit, dispatch }, details) => {
        return new Promise((resolve, reject) => {
            commit(SIGNUP_REQUEST);
            AuthService.signup({
                firstName: details.firstName,
                lastName: details.lastName,
                emailAddress: details.email,
                password: details.password,
                password_confirm: details.password_confirm
            }).then(response => {
                const token = response.data.user.token;
                Cookies.set('user-token', token);
                axios.defaults.headers.common['Authorization'] = token;
                commit(SIGNUP_SUCCESS, response);
                dispatch(USER_REQUEST, response.data.user);
                resolve(response);
            })
                .catch(error => {
                    commit(SIGNUP_ERROR, error);
                    Cookies.remove('user-token');
                    reject(error);
                });
        });
    }
};

const mutations = {
    [SIGNUP_REQUEST]: (state) => {
        state.status = 'loading';
    },
    [SIGNUP_SUCCESS]: (state, resp) => {
        state.status = 'success';
        state.token = resp.data.user.token;
    },
    [SIGNUP_ERROR]: (state) => {
        state.status = 'error';
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};
