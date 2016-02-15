import extractMutations from '../helpers/extractMutations';

function runMutations({input, state}) {
  const debuggerState = state.select('debugger');
  const currentSignals = debuggerState.get(['currentApp', 'signals']);
  const mutations = extractMutations(currentSignals);
  const lastMutationCount = mutations.length;
  const mutationsToRunCount = debuggerState.get(['lastMutationCount']);

  mutations.splice(mutationsToRunCount, mutations.length - mutationsToRunCount).forEach((mutation) => {
    const path = ['currentApp', 'model'].concat(mutation.path);
    debuggerState[mutation.name].apply(null, [path, ...mutation.args]);
  });

  debuggerState.set(['lastMutationCount'], lastMutationCount);

}

export default runMutations;
