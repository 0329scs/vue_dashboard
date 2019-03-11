import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import Cookies from 'js-cookie'
import { userLogin } from '@/api/app.js'

Vue.use(Vuex)

const user = {

    state: {
        id: '',
        loading: false
    },
    mutations: {
        SET_ID: (state, id) => {
            state.id = id
        },
        SET_LOADING: (state, loading) => {
            state.loading = loading
        }
    },
    actions: {
        Login({commit}, userInfo) {
            userLogin({
                userInfo
            })
            .then(res => {
                console.log(res);

                commit('SET_ID', res.data.body.LOGIN_ID)

                Cookies.set('token', res.data.body.LOGIN_ID, {expires:1})
            })
            .catch(err => {
                console.log(err);
            })
            .finally(_ => {
                commit('SET_LOADING', false)
            })
        }
    }
}

export default new Vuex.Store({
    modules: {
        user
    }
})