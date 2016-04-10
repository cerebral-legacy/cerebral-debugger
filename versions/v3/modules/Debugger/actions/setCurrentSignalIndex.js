function setCurrentSignalIndex({input, state}) {
  const debuggerState = state.select('debugger');
  const expandedSignalGroups = debuggerState.get(['expandedSignalGroups']);
  const currentSignalIndex = debuggerState.get(['currentSignalIndex']);

  debuggerState.set(['currentSignalIndex'], input.index);

  if (currentSignalIndex !== input.index) {
    return;
  }

  if (input.groupId && expandedSignalGroups.indexOf(input.groupId) === -1) {
    debuggerState.push(['expandedSignalGroups'], input.groupId);
  } else if (input.groupId) {
    debuggerState.splice(['expandedSignalGroups'], expandedSignalGroups.indexOf(input.groupId), 1);
  }
}

export default setCurrentSignalIndex;
