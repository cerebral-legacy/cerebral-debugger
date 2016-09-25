function setSettings({input, state}) {
  const debuggerState = state.select('debugger');
  // debuggerState.merge(['currentApp'], input.data);
}

export default setSettings;
