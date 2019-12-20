import Vue from 'vue';
import { USER_REQUEST, USER_ERROR, USER_SUCCESS } from '../actions/user';
import { AUTH_LOGOUT } from '../actions/auth';

const state = {
    status: '',
    profile: {}
};

const getters = {
    getProfile: state => state.profile,
    isProfileLoaded: state => !!state.profile.firstName,
};

const actions = {
    [USER_REQUEST]: ({ commit }, user) => {
        commit(USER_REQUEST);
        commit(USER_SUCCESS, user);
    },
}

const mutations = {
    [USER_REQUEST]: (state) => {
        state.status = 'loading'
    },
    [USER_SUCCESS]: (state, user) => {
        state.status = 'success'
        Vue.set(state, 'profile', user)
    },
    [USER_ERROR]: (state) => {
        state.status = 'error'
    },
    [AUTH_LOGOUT]: (state) => {
        state.profile = {}
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}
