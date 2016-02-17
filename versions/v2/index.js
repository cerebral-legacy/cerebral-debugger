import Prism from 'common/prism';
import React from 'react';
import ReactDOM from 'react-dom';
import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';
import {Container} from 'cerebral-view-react';
import UserAgent from 'cerebral-module-useragent';
import Devtools from 'cerebral-module-devtools';
import DebuggerModule from './modules/Debugger';
import Debugger from './components/Debugger';

const controller = Controller(Model({}));

controller.addModules({
  debugger: DebuggerModule,

  devtools: process.env.NODE_ENV === 'production' ? function () {} : Devtools(),
  useragent: UserAgent({
    media: {
      small: '(max-width: 1270px)'
    }
  })
});

export default {
  render: function () {
    ReactDOM.render(<Container controller={controller} style={{height: '100%'}}><Debugger/></Container>, document.getElementById('root'));
  }
};
