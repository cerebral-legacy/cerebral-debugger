import orderSignals from './orderSignals';

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
  receiveEvents(path) {
    require.ensure([], () => {
      const signals = require('./mocks/' + path);
      const start = signals[0].start;
      signals.forEach(function (signal) {
        setTimeout(function () {
          onChangeCallback({
            type: 'signals',
            app: '1234',
            "version": "v2",
            data: {
              signals: [signal]
            }
          });
        }, signal.start - start);
      })
    });
  },
  connect(initCallback) {
    initCallback(VERSION);
  }
};

export default connector;
