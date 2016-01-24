function setSettings({input, module}) {
  module.state.merge(['currentApp'], input.data);
}

export default setSettings;
