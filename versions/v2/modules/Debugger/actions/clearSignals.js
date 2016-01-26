import createSignalsStructure from '../helpers/createSignalsStructure';

function clearSignals({module, output}) {
  const currentSignalIndex = module.state.get(['currentSignalIndex']);
  const currentSignal = module.state.get(['signals', currentSignalIndex]);
  const clearFromIndex = currentSignal.path[0];
  const rawSignals = module.state.get(['currentApp', 'signals']);
  const signals = module.state.get(['signals']);

  console.log(rawSignals[clearFromIndex]);
  const rawClearedSignals = rawSignals.slice(0, clearFromIndex + 1);
  const clearedSignals = createSignalsStructure(rawClearedSignals);

  const currentRememberedSignalPath = [rawClearedSignals.length];
  module.state.set(['currentApp', 'signals'], rawClearedSignals);
  module.state.merge({
    signals: clearedSignals,
    currentSignalIndex: 0,
    currentRememberedSignalPath: currentRememberedSignalPath
  });

  output({
    path: currentRememberedSignalPath
  });
}

export default clearSignals;
