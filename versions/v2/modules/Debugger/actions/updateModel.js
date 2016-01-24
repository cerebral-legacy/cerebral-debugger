function updateModel({input, module}) {
  module.state.set(['currentApp', 'model'].concat(input.path), input.value);
}

export default updateModel;
