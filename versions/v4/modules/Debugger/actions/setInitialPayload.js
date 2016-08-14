function setInitialPayload({input, state}) {
  const debuggerState = state.select('debugger');
  debuggerState.set('currentApp', {
    initialModel: input.data.initialModel,
    model: input.data.initialModel,
    signals: input.data.signals,
    mutationCounts: [],
    currentSignalIndex: 0
  });
  debuggerState.set('lastMutationCount', 0);
  debuggerState.set('mutationsError', false);
}

export default setInitialPayload;
