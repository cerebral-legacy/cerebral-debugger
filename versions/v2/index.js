import Prism from 'common/prism';
import React from 'react';
import ReactDOM from 'react-dom';
import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';
import {Container} from 'cerebral-view-react';

import DebuggerModule from './modules/Debugger';
import Debugger from './components/Debugger';

const controller = Controller(Model({}));

controller.modules({
  debugger: DebuggerModule
});

export default {
  render: function () {
    ReactDOM.render(<Container controller={controller} style={{height: '100%'}}><Debugger/></Container>, document.getElementById('root'));
  }
};
