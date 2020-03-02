import Cookies from 'Cookies';

export default {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          Cookies,
        };
      },
    });
  },
};
