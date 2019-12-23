import axios from "axios";
import Cookies from 'js-cookie'
import AuthService from "@/services/AuthService";
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, AUTH_LOGOUT } from "../actions/auth";
import { USER_REQUEST } from "../actions/user";

const state = {
    token: Cookies.get('user-token') || null,
    status: '',
};

const getters = {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
}

const actions = {
    [AUTH_REQUEST]: ({ commit, dispatch }, user) => {
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
                dispatch(`user/${USER_REQUEST}`, response.data.user);
                resolve(response);
            })
                .catch(error => {
                    commit(AUTH_ERROR, error);
                    Cookies.remove('user-token');
                    reject(error);
                });
        });
    },
    [AUTH_SUCCESS]: ({ commit }, user) => {
        commit(AUTH_SUCCESS, user);
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
    },
    [AUTH_LOGOUT]: (state) => {
        state.token = '';
        state.status = 'logged out';
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};