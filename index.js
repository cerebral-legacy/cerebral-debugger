import {connect} from 'connector';

connect((version) => {
  version = version || 'v1';
  require.ensure([], function () {
    try {
      require.resolve('./versions/' + version + '/index.js');
    } catch (e) {
      document.querySelector('#root').style.visibility = 'hidden';
      document.querySelector('#error').style.display = 'block';
      document.querySelector('#error').innerHTML = '<h1>Version ' + version + ' is required by current Cerebral version, please update Debugger in Chrome Store</h1><img src="http://www.cerebraljs.com/logo.png" width="200"/>';
      return;
    }

    var debug = require('./versions/' + version + '/index.js');
    document.querySelector('#root').style.visibility = 'visible';
    document.querySelector('#error').style.display = 'none';
    debug.render();

  });
}, (showDebugger) => {
  if (showDebugger) {
    document.querySelector('#root').style.visibility = 'visible';
    document.querySelector('#error').style.display = 'none';
  } else {
    document.querySelector('#root').style.visibility = 'hidden';
    document.querySelector('#error').style.display = 'block';
    document.querySelector('#error').innerHTML = '<h1>You changed to a different APP, please refresh the app to continue...</h1><img src="http://www.cerebraljs.com/logo.png" width="200"/>';
  }
});
