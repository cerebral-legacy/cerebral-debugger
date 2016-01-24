import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';
import connector from 'connector';

import List from './List';
import Signal from './Signal';

@Cerebral({
  currentSignalIndex: ['debugger', 'currentSignalIndex'],
  debuggerSignals: ['debugger', 'signals'],
  appSignals: ['debugger', 'currentApp', 'signals'],
  isExecutingAsync: ['debugger', 'currentApp', 'isExecutingAsync']
})
class Signals extends React.Component {
  onRewriteClick() {
    this.props.signals.debugger.rewriteClicked();
    connector.sendEvent('rewrite', this.props.debuggerSignals[this.props.currentSignalIndex].path[0]);
  }
  render() {
    const currentSignal = this.props.debuggerSignals[this.props.currentSignalIndex];
    const isWithinExecution = currentSignal && currentSignal.isWithinExecution;
    const lastAppSignalsIndex = this.props.appSignals.length - 1;

    return (
      <div className={styles.signals}>
        <div className={styles.list}>
          <List/>
          <button
            onClick={() => this.onRewriteClick()}
            className={styles.rewrite}
            disabled={!currentSignal || currentSignal.path[0] === lastAppSignalsIndex || isWithinExecution || this.props.isExecutingAsync}>
          Clear from current signal
          </button>
        </div>
        <div className={styles.signal}>
          <Signal/>
        </div>
      </div>
    );
  }
}

 export default Signals;
