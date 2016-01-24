import extractMutations from '../helpers/extractMutations';

function remember({input, module}) {
  const signalToRememberIndex = input.path[0];
  const lastSignal = module.state.get(['signals']).reduce((lastSignal, signal, index) => {
    if (!lastSignal && signal.path[0] === signalToRememberIndex) {
      return signal;
    }
    return lastSignal;
  }, null);

  const appSignals = module.state.get(['currentApp', 'signals']);
  const signalsToRemember = appSignals.slice(0, signalToRememberIndex + 1);
  const mutationsToRun = extractMutations(signalsToRemember);
  const initialModel = module.state.get(['currentApp', 'initialModel']);

  module.state.set(['currentApp', 'model'], initialModel);
  mutationsToRun.forEach((mutation) => {
    const path = ['currentApp', 'model'].concat(mutation.path);
    module.state[mutation.name].apply(null, [path, ...mutation.args]);
  });
  module.state.set(['currentRememberedSignalPath'], lastSignal.path);

}

export default remember;
