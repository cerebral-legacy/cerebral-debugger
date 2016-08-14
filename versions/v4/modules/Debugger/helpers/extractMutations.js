function extractMutations(signals) {

  function traverseSignals(signals) {
    return signals.reduce((mutations, signal) => {
      return mutations.concat(traverseChain(signal.branches));
    }, []);
  }

  function traverseChain(chain) {
    return chain.reduce((mutations, action) => {
      if (Array.isArray(action)) {
        return mutations.concat(traverseChain(action));
      } else {
        return mutations.concat(traverseAction(action));
      }
    }, []);
  }

  function traverseAction(action) {
    let mutations = action.mutations || [];
    if (action.outputPath) {
      mutations = mutations.concat(traverseChain(action.outputs[action.outputPath]));
    }
    if (action.signals) {
      mutations = mutations.concat(traverseSignals(action.signals));
    }

    return mutations;
  }

  return traverseSignals(signals);
}

export default extractMutations;
