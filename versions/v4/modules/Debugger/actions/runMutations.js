import extractMutations from '../helpers/extractMutations';

function runMutations({input, state}) {
  const debuggerState = state.select('debugger');
  const currentSignals = debuggerState.get(['currentApp', 'signals']);

  currentSignals.forEach(function (signal, index) {
    const mutations = extractMutations([signal]);
    const mutationCounts = debuggerState.get(['currentApp', 'mutationCounts', index]) || 0;

    mutations.sort(function (a, b) {
      if (a.datetime === undefined) {
        return 0;
      }

      if (a.datetime > b.datetime) {
        return 1;
      } else if (a.datetime < b.datetime) {
        return -1;
      }

      return 0;
    }).slice(mutationCounts).forEach((mutation) => {
      try {
        const path = ['currentApp', 'model'].concat(mutation.path);
        debuggerState[mutation.name].apply(null, [path, ...mutation.args]);
      } catch (e) {
        debuggerState.set(['mutationsError'], {
          signalName: signal.name,
          mutation: mutation
        });
      }
    });

    debuggerState.set(['currentApp', 'mutationCounts', index], mutations.length);
  })

}

export default runMutations;
