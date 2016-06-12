import pageChanged from './signals/pageChanged';
import signalClicked from './signals/signalClicked';
import payloadReceived from './signals/payloadReceived';
import modelChanged from './signals/modelChanged';
import signalDoubleClicked from './signals/signalDoubleClicked';
import rewriteClicked from './signals/rewriteClicked';
import mutationClicked from './signals/mutationClicked';
import resetClicked from './signals/resetClicked';

export default (module) => {

  module.addState({
    currentPage: 'signals',
    currentApp: null,
    lastMutationCount: 0,
    currentSignalIndex: 0,
    currentRememberedSignalPath: [0],
    signals: [],
    expandedSignalGroups: [],
    currentMutationPath: null,
    componentsMap: {},
    renders: []
  });

  module.addSignals({
    pageChanged,
    signalClicked,
    payloadReceived,
    modelChanged,
    signalDoubleClicked,
    rewriteClicked,
    mutationClicked,
    resetClicked
  });

};
