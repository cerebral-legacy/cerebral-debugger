import createSignalsStructure from '../helpers/createSignalsStructure';

function setSignals({input, module, modules, state}) {

  const debuggerSignals = createSignalsStructure(input.data.signals);
  module.state.merge({
    signals: debuggerSignals,
    currentSignalIndex: 0,
    currentRememberedSignalPath: [input.data.signals.length - 1]
  });

}

export default setSignals;
