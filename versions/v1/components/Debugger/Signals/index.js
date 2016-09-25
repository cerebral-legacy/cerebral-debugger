import React from 'react';
import classNames from 'classnames';
import {connect} from 'cerebral-view-react';
import styles from './styles.css';
import connector from 'connector';
import signalsList from 'common/computed/signalsList';

import List from './List';
import Signal from './Signal';

export default connect({
  currentPage: 'debugger.currentPage',
  signalsList: signalsList(),
  media: 'useragent.media',
  currentSignalIndex: 'debugger.currentSignalIndex',
  isExecutingAsync: 'debugger.isExecutingAsync'
},
  class Signals extends React.Component {
    shouldComponentUpdate(nextProps) {
      return (
        this.props.currentPage !== nextProps.currentPage ||
        this.props.media.small !== nextProps.media.small ||
        this.props.currentSignalIndex !== nextProps.currentSignalIndex ||
        this.props.mutationsError !== nextProps.mutationsError
      );
    }
    onRewriteClick() {
      this.props.signals.debugger.rewriteClicked();
      connector.sendEvent('rewrite', this.props.signalsList[this.props.currentSignalIndex].executionId);
    }
    onResetClick() {
      this.props.signals.debugger.resetClicked();
      connector.sendEvent('resetStore');
    }
    render() {
      const currentSignal = this.props.signalsList[this.props.currentSignalIndex];
      const lastAppSignalsIndex = this.props.signalsList.length - 1;

      return (
        <div className={classNames(styles.signals, this.props.className)}>
          <div className={styles.list}>
            <List/>
            <button
              onClick={() => this.onRewriteClick()}
              className={styles.rewrite}
              disabled={
              !currentSignal ||
              this.props.currentSignalIndex === lastAppSignalsIndex ||
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
)
