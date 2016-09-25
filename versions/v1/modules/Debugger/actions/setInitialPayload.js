function setInitialPayload({input, state}) {
  state.set('debugger.initialModel', input.data.initialModel);
  state.set('debugger.model', input.data.initialModel);
  state.set('debugger.signals', {});
  state.set('debugger.mutationsError', false);
}

export default setInitialPayload;
