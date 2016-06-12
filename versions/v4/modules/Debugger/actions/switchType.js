function switchType({input, output}) {
  output[input.type]();
}

switchType.outputs = ['init', 'signals', 'settings', 'components'];

export default switchType;
