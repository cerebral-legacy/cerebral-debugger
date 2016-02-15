import {onChange} from 'connector';
import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';

import Toolbar from './Toolbar';
import Signals from './Signals';
import Model from './Model';

@Cerebral({
  currentPage: ['debugger', 'currentPage'],
  currentApp: ['debugger', 'currentApp']
})
class Debugger extends React.Component {
  componentDidMount() {
    onChange(this.props.signals.debugger.payloadReceived);
  }
  render() {
    if (!this.props.currentApp) {
      return (
        <div className={styles.loading}>
          <h1>Awaiting app...</h1>
          <h3>Open a Cerebral app and refresh</h3>
        </div>
      );
    }

    return (
      <div className={styles.debugger}>
        <div className={styles.toolbar}>
          <Toolbar />
        </div>
        <div className={styles.content}>
          <Signals className={this.props.currentPage !== 'signals' ? styles.hidden : ''}/>
          <Model className={this.props.currentPage !== 'model' ? styles.hidden : ''}/>
        </div>
      </div>
    );
  }
}

 export default Debugger
