import { createStore } from 'vuex';
import posts from './modules/posts';
import auth from './modules/auth';

const store = createStore({
  modules: {
    posts,
    auth,
  },
});
export default store;
