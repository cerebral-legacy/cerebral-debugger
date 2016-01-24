import createSignalsStructure from '../helpers/createSignalsStructure';

function setSignals({input, module, modules, state}) {
  const app = module.state.get(['currentApp']);
  const existingSignals = app.signals;

  function getSignalIndex(signal) {
    for (var x = input.data.signals.length - 1; x >= 0; x--) {
      if (app.signals[app.signals.length - 1 - x].start === signal.start) {
        return x;
        break;
      }
    }
    return -1;
  }

  const lastSignalIndex = app.signals.length ? getSignalIndex(input.data.signals[0]) : -1;

  let newSignals;
  if (lastSignalIndex === -1) {
    newSignals = app.signals.concat(input.data.signals);
  } else {
    newSignals = app.signals.slice(0, lastSignalIndex - 1).concat(input.data.signals);
  }

  module.state.set(['currentApp', 'signals'], newSignals);

  const currentSignalIndex = module.state.get(['currentSignalIndex']);
  if (currentSignalIndex !== 0) {
    module.state.set(['currentSignalIndex'], currentSignalIndex + (newSignals.length - existingSignals.length));
  }

  const debuggerSignals = createSignalsStructure(newSignals);
  module.state.set(['signals'], debuggerSignals);

  module.state.set(['currentRememberedSignalPath'], debuggerSignals[currentSignalIndex] ? debuggerSignals[currentSignalIndex].path : [0]);

}

export default setSignals;
