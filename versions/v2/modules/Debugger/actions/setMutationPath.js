function setMutationPath({input, module}) {
  module.state.set(['currentMutationPath'], input.path);
}

export default setMutationPath;
