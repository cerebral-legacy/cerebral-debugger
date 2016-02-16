function reset({state}) {
  const debuggerState = state.select('debugger');
  const currentApp = debuggerState.get(['currentApp']);
  debuggerState.merge(['currentApp'], {
    model: currentApp.initialModel,
    signals: []
  });
  debuggerState.merge({
    signals: [],
    currentSignalIndex: 0,
    currentRememberedSignalPath: [0],
    lastMutationCount: 0
  });
}

export default reset;
