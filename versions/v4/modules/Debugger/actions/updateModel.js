function updateModel({input, state}) {
  const debuggerState = state.select('debugger');
  debuggerState.set(['currentApp', 'model'].concat(input.path), input.value);
}

export default updateModel;
