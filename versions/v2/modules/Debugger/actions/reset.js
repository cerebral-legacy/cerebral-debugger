function reset({module}) {
  const currentApp = module.state.get(['currentApp']);
  module.state.merge(['currentApp'], {
    model: currentApp.initialModel,
    signals: []
  });
  module.state.merge({
    signals: [],
    currentSignalIndex: 0,
    currentRememberedSignalPath: [0]
  });
}

export default reset;
