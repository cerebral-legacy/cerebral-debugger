import extractMutations from '../helpers/extractMutations';

function runMutations({input, module}) {
  const currentSignals = module.state.get(['currentApp', 'signals']);
  const mutations = extractMutations(currentSignals);

  const mutationsToRunCount = mutations.length - module.state.get(['lastMutationCount']);

  console.log('mutations to run', mutationsToRunCount);

  mutations.splice(0, mutationsToRunCount).forEach((mutation) => {
    const path = ['currentApp', 'model'].concat(mutation.path);
    module.state[mutation.name].apply(null, [path, ...mutation.args]);
  });

  module.state.set(['lastMutationCount'],  mutations.length);

}

export default runMutations;
