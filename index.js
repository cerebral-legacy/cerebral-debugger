import {connect} from 'connector';

connect((version) => {
  version = version || 'v1';
  require.ensure([], function () {
    try {
      require.resolve('./versions/' + version + '/index.js');
    } catch (e) {
      document.querySelector('#root').style.visibility = 'hidden';
      document.querySelector('#error').style.display = 'block';
      document.querySelector('#error').innerHTML = '<h3>Version ' + version + ' is required by current Cerebral version, please update Debugger in Chrome Store</h3>';
      return;
    }

    var debug = require('./versions/' + version + '/index.js');
    document.querySelector('#root').style.visibility = 'visible';
    document.querySelector('#error').style.display = 'none';
    debug.render();

  });
});
