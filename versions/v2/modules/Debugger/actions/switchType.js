function switchType({input, output}) {
  output[input.type]();
}

switchType.outputs = ['init', 'signals'];

export default switchType;
