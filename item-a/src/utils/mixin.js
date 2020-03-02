import Mock from 'Mock';
import Cookies from 'Cookies';

export default {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          Mock,
          Cookies,
        };
      },
    });
  },
};

export const sendSuccessTip = {
  methods: {
    sendSuccessTip() {
      top.postMessage(
        {
          source: 'content',
          action: 'methodRun',
          funName: 'showMessage',
          params: {
            message: '信息录入成功',
            type: 'success',
          },
        },
        'http://192.168.2.110:8080',
      );
    },
  },
};
