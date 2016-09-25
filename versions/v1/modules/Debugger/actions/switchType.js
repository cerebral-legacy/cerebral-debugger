function switchType({input, output}) {
  output[input.type]();
}

switchType.outputs = ['init', 'execution', 'settings', 'components'];

export default switchType;
