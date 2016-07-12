import computed from 'cerebral-computed'

function currentSignal({currentSignalIndex, signals, currentAppSignals}) {
  const currentSignal = signals[currentSignalIndex];
  return currentSignal ? currentSignal.path.reduce((currentPath, key) => currentPath[key], currentAppSignals) : null;
}

export default computed({
  signals: 'debugger.signals',
  currentSignalIndex: 'debugger.currentSignalIndex',
  currentAppSignals: 'debugger.currentApp.signals'
}, currentSignal);
