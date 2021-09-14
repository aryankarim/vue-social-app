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
    if (res.status < 400) {
      localStorage.setItem('social-app-token', data.accessToken);
      localStorage.setItem('social-app-userData', JSON.stringify(data.user));
      commit('setUser', { userInfo: data.user, loggedIn: true });
      return 'Sign up successful!';
    } else {
      return data;
    }
  },
  // eslint-disable-next-line no-unused-vars
  async loginUser({ commit }, loginCredential) {
    const res = await fetch(`api/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(loginCredential),
    });
    const data = await res.json();
    if (res.status > 399) {
      return data;
    } else {
      localStorage.setItem('social-app-token', data.accessToken);
      localStorage.setItem('social-app-userData', JSON.stringify(data.user));
      commit('setUser', { userInfo: data.user, loggedIn: true });
      return 'Logged in successfully!';
    }
  },
  async verifyLogin({ commit }) {
    const token = localStorage.getItem('social-app-token');
    const userId = JSON.parse(localStorage.getItem('social-app-userData'))?.id;
    if (!userId) {
      return;
    }
    const res = await fetch(`api/400/users/${userId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    if (res.status < 400) {
      commit('setUser', { userInfo: data, loggedIn: true });
      return true;
    }
  },
  logout({ commit }) {
    commit('setUser', { userInfo: {}, loggedIn: false });
    localStorage.removeItem('social-app-token');
    localStorage.removeItem('social-app-userData');
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
