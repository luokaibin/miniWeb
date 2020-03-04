import Mock from 'Mock';
import Cookies from 'Cookies';

const topOrgin =
  process.env.NODE_ENV === 'production'
    ? 'https://notes.jindll.com'
    : 'http://192.168.2.110:8127';

export default {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          Mock,
          Cookies,
          topOrgin,
        };
      },
    });
  },
};

export const sendSuccessTip = {
  methods: {
    sendSuccessTip() {
      console.log(this);
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
        topOrgin,
      );
    },
  },
};
