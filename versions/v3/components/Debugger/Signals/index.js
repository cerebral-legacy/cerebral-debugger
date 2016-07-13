import React from 'react';
import classNames from 'classnames';
import {connect} from 'cerebral-view-react';
import styles from './styles.css';
import connector from 'connector';

import List from './List';
import Signal from './Signal';

@connect({
  currentPage: ['debugger', 'currentPage'],
  media: ['useragent', 'media'],
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
  onResetClick() {
    this.props.signals.debugger.resetClicked();
    connector.sendEvent('resetStore');
  }
  shouldComponentUpdate(nextProps) {
    return this.props.currentPage !== nextProps.currentPage || this.props.media.small !== nextProps.media.small;
  }
  render() {
    const currentSignal = this.props.debuggerSignals[this.props.currentSignalIndex];
    const isWithinExecution = currentSignal && currentSignal.isWithinExecution;
    const lastAppSignalsIndex = this.props.appSignals.length - 1;

    return (
      <div className={classNames(styles.signals, this.props.className)}>
        <div className={styles.list}>
          <List/>
          <button
            onClick={() => this.onRewriteClick()}
            className={styles.rewrite}
            disabled={
            !currentSignal ||
            currentSignal.path[0] === lastAppSignalsIndex ||
            isWithinExecution ||
            this.props.isExecutingAsync}>
            Clear from current signal
          </button>
          <button
            onClick={() => this.onResetClick()}
            className={styles.reset}
            disabled={
            !currentSignal ||
            this.props.isExecutingAsync}>
            Reset all state
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
