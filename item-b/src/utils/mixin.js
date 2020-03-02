import Mock from 'Mock';

export default {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          Mock,
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
