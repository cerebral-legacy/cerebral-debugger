import {onChange} from 'connector';
import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';

import Toolbar from './Toolbar';
import Signals from './Signals';
import Model from './Model';

const pages = {
  signals: Signals,
  model: Model
};

@Cerebral({
  currentPage: ['debugger', 'currentPage'],
  currentApp: ['debugger', 'currentApp']
})
class Debugger extends React.Component {
  componentDidMount() {
    onChange(this.props.signals.debugger.payloadReceived);
  }
  render() {
    const Page = pages[this.props.currentPage];

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
          <Toolbar/>
        </div>
        <div className={styles.content}>
          <Page/>
        </div>
      </div>
    );
  }
}

 export default Debugger
