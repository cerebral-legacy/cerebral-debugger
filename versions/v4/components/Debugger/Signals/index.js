import React from 'react';
import classNames from 'classnames';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';
import connector from 'connector';

import List from './List';
import Signal from './Signal';

@Cerebral({
  currentPage: ['debugger', 'currentPage'],
  media: ['useragent', 'media'],
  currentSignalIndex: ['debugger', 'currentSignalIndex'],
  debuggerSignals: ['debugger', 'signals'],
  appSignals: ['debugger', 'currentApp', 'signals'],
  isExecutingAsync: ['debugger', 'currentApp', 'isExecutingAsync']
})
class Signals extends React.Component {
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
        </div>
        <div className={styles.signal}>
          <Signal/>
        </div>
      </div>
    );
  }
}

 export default Signals;
