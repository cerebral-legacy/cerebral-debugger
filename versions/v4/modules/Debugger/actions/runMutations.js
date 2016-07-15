import extractMutations from '../helpers/extractMutations';

function runMutations({input, state}) {
  const debuggerState = state.select('debugger');
  const currentSignals = debuggerState.get(['currentApp', 'signals']);
  const currentMutations = debuggerState.get(['currentApp', 'mutations']);
  currentSignals.forEach(function (signal, index) {
    const mutations = extractMutations([signal]);
    const currentMutationsRun = currentMutations[index] || 0

    mutations.slice(currentMutationsRun).forEach((mutation) => {
      const path = ['currentApp', 'model'].concat(mutation.path);
      debuggerState[mutation.name].apply(null, [path, ...mutation.args]);
    });

    debuggerState.set(['currentApp', 'mutations', index], currentMutationsRun);
  });
}

export default runMutations;
