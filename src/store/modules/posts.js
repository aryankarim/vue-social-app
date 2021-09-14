const state = {
  posts: [],
};

const getters = {
  posts: (state) => state.posts,
};

const actions = {
  addNewPost({ commit }, newPost) {
    commit('addNewPost', newPost);
    console.log(newPost);
  },
};

const mutations = {
  addNewPost: (state, newPost) =>
    state.posts.push({ ...newPost, time: new Date().toLocaleString() }),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
