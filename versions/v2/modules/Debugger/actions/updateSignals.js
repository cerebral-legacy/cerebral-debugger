import createSignalsStructure from '../helpers/createSignalsStructure';

function updateSignals({input, state}) {
  const debuggerState = state.select('debugger');
  const app = debuggerState.get(['currentApp']);
  const existingSignals = app.signals;

  function getSignalIndex(signal) {
    for (var x = input.data.signals.length - 1; x >= 0; x--) {
      if (app.signals[app.signals.length - 1 - x] && app.signals[app.signals.length - 1 - x].start === signal.start) {
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

  debuggerState.set(['currentApp', 'signals'], newSignals);

  const currentSignalIndex = debuggerState.get(['currentSignalIndex']);
  if (currentSignalIndex !== 0) {
    debuggerState.set(['currentSignalIndex'], currentSignalIndex + (newSignals.length - existingSignals.length));
  }

  const debuggerSignals = createSignalsStructure(newSignals);
  debuggerState.set(['signals'], debuggerSignals);

  debuggerState.set(['currentRememberedSignalPath'], debuggerSignals[currentSignalIndex] ? debuggerSignals[currentSignalIndex].path : [0]);

}

export default updateSignals;
