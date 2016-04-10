import extractMutations from '../helpers/extractMutations';

function remember({input, state}) {
  const debuggerState = state.select('debugger');
  const signalToRememberIndex = input.path[0];
  const lastSignal = debuggerState.get(['signals']).reduce((lastSignal, signal, index) => {
    if (!lastSignal && signal.path[0] === signalToRememberIndex) {
      return signal;
    }
    return lastSignal;
  }, null);

  const appSignals = debuggerState.get(['currentApp', 'signals']);
  const signalsToRemember = appSignals.slice(0, signalToRememberIndex + 1);
  const mutationsToRun = extractMutations(signalsToRemember);
  const initialModel = debuggerState.get(['currentApp', 'initialModel']);

  debuggerState.set(['currentApp', 'model'], initialModel);
  mutationsToRun.forEach((mutation) => {
    const path = ['currentApp', 'model'].concat(mutation.path);
    debuggerState[mutation.name].apply(null, [path, ...mutation.args]);
  });
  debuggerState.set(['currentRememberedSignalPath'], lastSignal ? lastSignal.path : [appSignals.length - 1]);

}

export default remember;
