import login from '@/api/login'
import auth from "@/utils/auth";

// import { getToken, setToken, setUser, getUser, setTokenNull } from '@/utils/auth'

const user = {
  state: {
    id: 0,
    name: '',
    email: '',
    token: '',
    role: '',
  },

  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_ROLE: (state, role) => {
      state.role = role
    },
    SET_EMAIL: (state, email) => {
      state.email = email
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER: (state, user) => {
      Object.assign(state, user)
    },
    LOGOUT: (state) => {
      Object.assign(state, {})
    },
  },

  actions: {
    // login
    Login({ commit }, param) {
      return new Promise((resolve, reject) => {
        login(param).then(response => {
          console.log(response)
          const resp = response.data
          commit('SET_USER', resp)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    Logout({ commit }) {
      return new Promise((resolve) => {
        auth.logout()
        commit('LOGOUT')
        resolve()
      })
    }
  },

}
export default user
