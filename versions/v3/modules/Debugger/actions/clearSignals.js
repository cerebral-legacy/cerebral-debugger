import createSignalsStructure from '../helpers/createSignalsStructure';

function clearSignals({state, output}) {
  const debuggerState = state.select('debugger');
  const currentSignalIndex = debuggerState.get(['currentSignalIndex']);
  const currentSignal = debuggerState.get(['signals', currentSignalIndex]);
  const clearFromIndex = currentSignal.path[0];
  const rawSignals = debuggerState.get(['currentApp', 'signals']);
  const signals = debuggerState.get(['signals']);

  const rawClearedSignals = rawSignals.slice(0, clearFromIndex + 1);
  const clearedSignals = createSignalsStructure(rawClearedSignals);

  const currentRememberedSignalPath = [rawClearedSignals.length];
  debuggerState.set(['currentApp', 'signals'], rawClearedSignals);
  debuggerState.merge({
    signals: clearedSignals,
    currentSignalIndex: 0,
    currentRememberedSignalPath: currentRememberedSignalPath
  });

  output({
    path: currentRememberedSignalPath
  });
}

export default clearSignals;
