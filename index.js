import {connect} from 'connector';

connect((version, done) => {
  require.ensure([], function () {
    try {
      require.resolve('./versions/' + version + '/index.js');
    } catch (e) {
      document.querySelector('#root').style.visibility = 'hidden';
      document.querySelector('#error').style.display = 'block';
      document.querySelector('#error').innerHTML = '<h1>Version ' + version + ' is required by current Cerebral version, please update Debugger in Chrome Store</h1><img src="logo.png" width="200"/>';
      return;
    }

    var debug = require('./versions/' + version + '/index.js');
    document.querySelector('#root').style.visibility = 'visible';
    document.querySelector('#error').style.display = 'none';
    debug.render();
    done()
  });
});
