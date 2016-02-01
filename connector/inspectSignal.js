// Is evaled in client app
function inspectSignal(window, signalName, path) {
  if (window.__CEREBRAL_DEVTOOLS_GLOBAL_HOOK__ && window.__CEREBRAL_DEVTOOLS_GLOBAL_HOOK__.signals) {
    var signal = signalName.split('.').reduce(function (signals, key) {
      return signals[key];
    }, window.__CEREBRAL_DEVTOOLS_GLOBAL_HOOK__.signals);
    if (signal) {
      path = path.split(',');
      path = path.map(function (pathName, index) {
        if (path[index + 1] === 'outputs') {
          return Number(pathName) + 1;
        }
        return pathName;
      }).filter(function (pathName, index) {
        if (pathName === 'outputs') {
          return false;
        }
        return true;
      });
      var action = path.reduce(function (branches, index) {
        return branches[index];
      }, signal.chain);
      inspect(action);
    }
  }
}

export default inspectSignal;
