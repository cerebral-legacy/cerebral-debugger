function currentSignal(get) {
  const currentSignalIndex = get(['debugger', 'currentSignalIndex']);
  const currentSignal = get(['debugger', 'signals', currentSignalIndex]);

  return currentSignal ? get(['debugger', 'currentApp', 'signals'].concat(currentSignal.path)) : null;
}

export default currentSignal;
