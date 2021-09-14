const state = {
  posts: [],
};

const getters = {
  posts: (state) => state.posts,
};

const actions = {
  async addNewPost({ commit }, newPost) {
    const token = localStorage.getItem('social-app-token');
    const post = { ...newPost, time: new Date().toLocaleString() };
    const res = await fetch('api/660/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(post),
    });
    const data = await res.json();

    commit('addNewPost', data);
  },
  // eslint-disable-next-line no-unused-vars
  async fetchPosts({ commit }) {
    const token = localStorage.getItem('social-app-token');
    const res = await fetch('api/640/posts', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    commit('setPosts', data);
  },
};

const mutations = {
  addNewPost: (state, newPost) => state.posts.push(newPost),
  setPosts: (state, posts) => (state.posts = posts),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
