import axios from "axios";
import Cookies from 'js-cookie'
import AuthService from "@/services/AuthService";
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, AUTH_LOGOUT } from "../actions/auth";

const state = {
    token: Cookies.get('user-token') || null,
    status: '',
};

const getters = {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
}

const actions = {
    [AUTH_REQUEST]: ({ commit }, user) => {
        return new Promise((resolve, reject) => {
            commit(AUTH_REQUEST);
            AuthService.login({
                emailAddress: user.email,
                password: user.password
            }).then(response => {
                const token = response.data.user.token;
                Cookies.set('user-token', token);
                axios.defaults.headers.common['Authorization'] = token;
                commit(AUTH_SUCCESS, response);
                // dispatch(USER_REQUEST);
                resolve(response);
            })
                .catch(error => {
                    commit(AUTH_ERROR, error);
                    Cookies.remove('user-token');
                    reject(error);
                });
        });
    },
    [AUTH_LOGOUT]: ({ commit }) => {
        return new Promise((resolve) => {
            commit(AUTH_LOGOUT);
            Cookies.remove('user-token');
            delete axios.defaults.headers.common['Authorization'];
            resolve();
        });
    }
};

const mutations = {
    [AUTH_REQUEST]: (state) => {
        state.status = 'loading';
    },
    [AUTH_SUCCESS]: (state, resp) => {
        state.status = 'success';
        state.token = resp.data.user.token;
    },
    [AUTH_ERROR]: (state) => {
        state.status = 'error';
        state.hasLoadedOnce = true;
    },
    [AUTH_LOGOUT]: (state) => {
        state.token = '';
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};