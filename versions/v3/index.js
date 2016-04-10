import Prism from 'common/prism';
import React from 'react';
import ReactDOM from 'react-dom';
import {onChange} from 'connector';
import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';
import {Container} from 'cerebral-view-react';
import UserAgent from 'cerebral-module-useragent';
import Devtools from 'cerebral-module-devtools';
import DebuggerModule from './modules/Debugger';
import Debugger from './components/Debugger';

const controllers = {};
let currentController = null;

export default {
  render: function () {
    onChange((payload, tabId) => {
      console.log('Got payload', payload);
      if (payload.type !== 'init' && !controllers[tabId]) {
        return;
      }

      if (payload.type === 'init' && !controllers[tabId]) {

        currentController = controllers[tabId] = Controller(Model({}));
        currentController.addModules({
          debugger: DebuggerModule,

          devtools: process.env.NODE_ENV === 'production' ? function () {} : Devtools(),
          useragent: UserAgent({
            media: {
              small: '(max-width: 1270px)'
            }
          })
        });
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
        currentController.getSignals().debugger.payloadReceived(payload);
        ReactDOM.render((
          <Container controller={currentController} style={{height: '100%'}}>
            <Debugger/>
          </Container>
        ), document.getElementById('root'));

      } else if (currentController !== controllers[tabId]) {

        currentController = controllers[tabId];
        ReactDOM.unmountComponentAtNode(document.getElementById('root'));
        currentController.getSignals().debugger.payloadReceived(payload);
        ReactDOM.render((
          <Container controller={currentController} style={{height: '100%'}}>
            <Debugger/>
          </Container>
        ), document.getElementById('root'));

      } else {

        currentController.getSignals().debugger.payloadReceived(payload);

      }

      currentController.lastUpdated = Date.now();

      Object.keys(controllers).forEach(function (key) {
        // If not updated for over an hour, remove it
        if (Date.now() - controllers[key].lastUpdated > 3600000) {
          delete controllers[key];
        }
      });
    });
  }
};
