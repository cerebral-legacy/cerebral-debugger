let initCallback;
let onChangeCallback;

const connector = window.CONNECTOR = {
  onChange(cb) {
    onChangeCallback = cb;
    cb(require('./mocks/init.js'));
  },
  connect(initCallback) {
    initCallback(VERSION);
  }
};

export default connector;
