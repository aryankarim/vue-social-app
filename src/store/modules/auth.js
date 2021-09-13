const state = {
  user: { userInfo: {}, loggedIn: false },
};

const getters = {
  user: (state) => state.user,
  loggedIn: (state) => state.loggedIn,
};

const actions = {
  async register({ commit }, userData) {
    const res = await fetch('api/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const data = await res.json();

    localStorage.setItem('social-app-token', data.accessToken);
    localStorage.setItem('social-app-userData', JSON.stringify(data.user));
    commit('setUser', data.user);
  },
  // eslint-disable-next-line no-unused-vars
  async verifyLogin({ commit }, loginCredential) {
    const res = await fetch(`api/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(loginCredential),
    });
    const data = await res.json();
    console.log(data);
    if (res.status > 399) {
      alert('login fail');
    } else {
      commit('setUser', { userInfo: data, loggedIn: true });
    }
  },
};

const mutations = {
  setUser: (state, user) => (state.user = user),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
