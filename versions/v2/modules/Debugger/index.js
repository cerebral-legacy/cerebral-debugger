import pageChanged from './signals/pageChanged';
import signalClicked from './signals/signalClicked';
import payloadReceived from './signals/payloadReceived';
import modelChanged from './signals/modelChanged';
import signalDoubleClicked from './signals/signalDoubleClicked';

export default (module) => {

  module.state({
    currentPage: 'signals',
    currentApp: null,
    lastMutationCount: 0,
    currentSignalIndex: 0,
    currentRememberedSignalPath: [0],
    signals: [],
    expandedSignalGroups: []
  });

  module.signals({
    pageChanged,
    signalClicked,
    payloadReceived,
    modelChanged,
    signalDoubleClicked
  });

};
