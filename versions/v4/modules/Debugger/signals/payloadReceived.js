import setInitialPayload from '../actions/setInitialPayload';
import switchType from '../actions/switchType';
import setSignals from '../actions/setSignals';
import updateSignals from '../actions/updateSignals';
import runMutations from '../actions/runMutations';
import setSettings from '../actions/setSettings';
import updateComponentsMap from '../actions/updateComponentsMap';
import updateRenders from '../actions/updateRenders';

export default [
  switchType, {
    init: [setInitialPayload, setSettings, setSignals, runMutations],
    signals: [updateSignals, runMutations],
    settings: [setSettings],
    components: [updateComponentsMap, updateRenders]
  }
];
