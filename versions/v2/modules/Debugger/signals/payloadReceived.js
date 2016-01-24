import setInitialPayload from '../actions/setInitialPayload';
import switchType from '../actions/switchType';
import setSignals from '../actions/setSignals';
import runMutations from '../actions/runMutations';

export default [
  function payloadStart({state, input}) {
    console.log('PayloadStart', input, state.get());
  },
  switchType, {
    init: [setInitialPayload, setSignals, runMutations],
    signals: [setSignals, runMutations]
  },
  function payloadEnd({state, input}) {
    console.log('PayloadEnd', input, state.get());
  },
];
