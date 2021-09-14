import login from '@/api/login'

// import { getToken, setToken, setUser, getUser, setTokenNull } from '@/utils/auth'

const user = {
  state: {
    token: null,
    user: null,
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER: (a, res) => {
      Object.assign(a, res)
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
  },

}
export default user
