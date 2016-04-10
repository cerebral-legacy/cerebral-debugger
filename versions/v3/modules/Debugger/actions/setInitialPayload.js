function setInitialPayload({input, state}) {
  const debuggerState = state.select('debugger');
  debuggerState.set(['currentApp'], {
    initialModel: input.data.initialModel,
    model: input.data.initialModel,
    signals: input.data.signals,
    currentSignalIndex: 0
  });
  debuggerState.set('lastMutationCount', 0);
}

export default setInitialPayload;
