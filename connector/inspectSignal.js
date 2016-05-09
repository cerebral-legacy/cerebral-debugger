// Is evaled in client app
function inspectSignal(window, signalName, actionIndex) {
  var hook = window.__CEREBRAL_DEVTOOLS_GLOBAL_HOOK__;
  if (hook && hook.signals) {
    var signal = signalName.split('.').reduce(function (signals, key) {
      return signals[key];
    }, hook.signals);
    if (signal) {
      if (hook.staticTree) {
        var actions = hook.staticTree(signal.chain).actions;
        inspect(actions[actionIndex]);
      } else {
        console.warn('Cerebral Debugger - Please update cerebral-module-devtools to be able to inspect actions.')
      }
    }
  }
}

export default inspectSignal;
