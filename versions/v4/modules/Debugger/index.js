import pageChanged from './signals/pageChanged';
import signalClicked from './signals/signalClicked';
import payloadReceived from './signals/payloadReceived';
import modelChanged from './signals/modelChanged';
import signalDoubleClicked from './signals/signalDoubleClicked';
import rewriteClicked from './signals/rewriteClicked';
import mutationClicked from './signals/mutationClicked';
import resetClicked from './signals/resetClicked';
import modelClicked from './signals/modelClicked';

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
    componentsMap: JSON.parse('{"app.todos":[{"name":"App","renderCount":0}],"recorder":[{"name":"App","renderCount":0},{"name":"","renderCount":0}],"app.isSaving":[{"name":"App","renderCount":0}],"app.filter":[{"name":"App","renderCount":0}],"app.newTodoTitle":[{"name":"NewTodo","renderCount":0}]}'),
    renders: [],
    mutationsError: false
  });

  module.addSignals({
    pageChanged,
    signalClicked,
    payloadReceived,
    modelChanged,
    signalDoubleClicked,
    rewriteClicked,
    mutationClicked,
    resetClicked,
    modelClicked
  });

};
