function setInitialPayload({input, module}) {
  module.state.set(['currentApp'], {
    initialModel: input.data.initialModel,
    model: input.data.initialModel,
    signals: input.data.signals,
    currentSignalIndex: 0
  });
}

export default setInitialPayload;
