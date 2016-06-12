import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';

import Toolbar from './Toolbar';
import Signals from './Signals';
import Components from './Components';
import Model from './Model';

@Cerebral({
  currentPage: ['debugger', 'currentPage'],
  currentApp: ['debugger', 'currentApp']
})
class Debugger extends React.Component {
  render() {
    if (!this.props.currentApp) {
      return (
        <div className={styles.loading}>
          <h1>Awaiting app...</h1>
          <h3>Open a Cerebral app and refresh</h3>
        </div>
      );
    }

    if (this.props.currentApp.disableDebugger) {
      return (
        <div className={styles.debugger}>
          <div className={styles.toolbar}>
            <Toolbar />
          </div>
          <div className={styles.disabled}>
            <img src="logo.png" width="200"/>
            <h1>Disabled</h1>
            <h3>Enable debugger and refresh</h3>
          </div>
        </div>
      );
    }

    return (
      <div className={styles.debugger}>
        <div className={styles.toolbar}>
          <Toolbar />
        </div>
        <div className={styles.content}>
          {
            this.props.currentPage === 'signals' ?
              <Signals className={this.props.currentPage !== 'signals' ? styles.hiddenOnSmall : null}/>
            :
              null
          }
          {
            this.props.currentPage === 'components' ?
              <Components className={this.props.currentPage !== 'components' ? styles.hiddenOnSmall : null}/>
            :
              null
          }
          <Model className={this.props.currentPage !== 'model' ? styles.hiddenOnSmall : null}/>
        </div>
      </div>
    );
  }
}

 export default Debugger
