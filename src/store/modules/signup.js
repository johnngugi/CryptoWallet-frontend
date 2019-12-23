import axios from "axios";
import Cookies from 'js-cookie'
import AuthService from "@/services/AuthService";
import { AUTH_SUCCESS } from "../actions/auth";
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR } from "../actions/signup";
import { USER_REQUEST } from "../actions/user";

const state = {
    status: '',
};

const getters = {
    signUpStatus: state => state.status,
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
                dispatch(`auth/${AUTH_SUCCESS}`, response, { root: true });
                dispatch(`user/${USER_REQUEST}`, response.data.user, { root: true });
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
    [SIGNUP_SUCCESS]: (state) => {
        state.status = 'success';
    },
    [SIGNUP_ERROR]: (state) => {
        state.status = 'error';
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
