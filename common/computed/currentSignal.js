import {Computed} from 'cerebral'

function currentSignal({currentSignalIndex, signals, currentAppSignals}) {
  const currentSignal = signals[currentSignalIndex];
  return currentSignal ? currentSignal.path.reduce((currentPath, key) => currentPath[key], currentAppSignals) : null;
}

export default Computed({
  signals: 'debugger.signals',
  currentSignalIndex: 'debugger.currentSignalIndex',
  currentAppSignals: 'debugger.currentApp.signals'
}, currentSignal);
