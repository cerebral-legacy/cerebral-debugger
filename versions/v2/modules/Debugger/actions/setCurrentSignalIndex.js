function setCurrentSignalIndex({input, module}) {

  const expandedSignalGroups = module.state.get(['expandedSignalGroups']);
  const currentSignalIndex = module.state.get(['currentSignalIndex']);

  module.state.set(['currentSignalIndex'], input.index);

  if (currentSignalIndex !== input.index) {
    return;
  }

  if (input.groupId && expandedSignalGroups.indexOf(input.groupId) === -1) {
    module.state.push(['expandedSignalGroups'], input.groupId);
  } else if (input.groupId) {
    module.state.splice(['expandedSignalGroups'], expandedSignalGroups.indexOf(input.groupId), 1);
  }
}

export default setCurrentSignalIndex;
