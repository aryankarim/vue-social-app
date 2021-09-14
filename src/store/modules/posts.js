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
};

const mutations = {
  addNewPost: (state, newPost) => state.posts.push(newPost),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
