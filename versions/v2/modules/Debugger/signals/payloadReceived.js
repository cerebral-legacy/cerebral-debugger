import setInitialPayload from '../actions/setInitialPayload';
import switchType from '../actions/switchType';
import setSignals from '../actions/setSignals';
import updateSignals from '../actions/updateSignals';
import runMutations from '../actions/runMutations';
import setSettings from '../actions/setSettings';

export default [
  switchType, {
    init: [setInitialPayload, setSettings, setSignals, runMutations],
    signals: [updateSignals, runMutations],
    settings: [setSettings]
  }
];
