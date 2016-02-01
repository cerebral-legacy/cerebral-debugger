let initCallback;
let onChangeCallback;

const connector = window.CONNECTOR = {
  onChange(cb) {
    onChangeCallback = cb;
    var initData = require('./mocks/' + VERSION + '/init.js');
    initData.version = VERSION;
    cb(initData);
  },
  sendEvent() {},
  inspect() {},
  receiveEvent(path) {
    require.ensure([], () => {
      onChangeCallback(require('./mocks/' + path));
    });
  },
  connect(initCallback) {
    initCallback(VERSION);
  }
};

export default connector;
