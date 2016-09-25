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
      const start = signals[0].datetime;
      signals.forEach(function (signal) {
        setTimeout(function () {
          onChangeCallback({
            type: 'execution',
            app: '1234',
            "version": "v1",
            data: {
              executions: [signal]
            }
          });
        }, signal.datetime - start);
      })
    });
  },
  connect(initCallback) {
    initCallback(VERSION, () => {});
  }
};

export default connector;
