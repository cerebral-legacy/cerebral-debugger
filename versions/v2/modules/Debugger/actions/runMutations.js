import extractMutations from '../helpers/extractMutations';

function runMutations({input, state}) {
  const debuggerState = state.select('debugger');
  const currentSignals = debuggerState.get(['currentApp', 'signals']);
  const mutations = extractMutations(currentSignals);
  const currentMutationsLength = mutations.length;
  const lastMutationsLength = debuggerState.get(['lastMutationCount']);

  mutations.slice(lastMutationsLength).forEach((mutation) => {
    const path = ['currentApp', 'model'].concat(mutation.path);
    debuggerState[mutation.name].apply(null, [path, ...mutation.args]);
  });

  debuggerState.set(['lastMutationCount'], currentMutationsLength);

}

export default runMutations;
