function setInitialPayload({input, module}) {
  module.state.set(['currentApp'], {
    initialModel: input.data.initialModel,
    model: input.data.initialModel,
    signals: input.data.signals
  });
}

export default setInitialPayload;
