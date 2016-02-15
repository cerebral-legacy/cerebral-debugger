import createSignalsStructure from '../helpers/createSignalsStructure';

function setSignals({input, state}) {
  const debuggerState = state.select('debugger');
  const debuggerSignals = createSignalsStructure(input.data.signals);
  debuggerState.merge({
    signals: debuggerSignals,
    currentSignalIndex: 0,
    currentRememberedSignalPath: [input.data.signals.length - 1]
  });

}

export default setSignals;
