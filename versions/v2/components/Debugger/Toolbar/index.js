import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';
import icons from 'common/icons.css';
import connector from 'connector';

@Cerebral({
  currentPage: ['debugger', 'currentPage'],
  currentApp: ['debugger', 'currentApp']
})
class Toolbar extends React.Component {
  onDisableDebuggerClick() {
    connector.sendEvent('toggleDisableDebugger');
  }
  onResetOnRefreshClick() {
    connector.sendEvent('toggleKeepState');
  }
  render() {
    const currentApp = this.props.currentApp || {};

    return (
      <ul className={styles.toolbar}>
        <li className={styles.item}>
          <ul className={styles.tabs}>
            <li
              className={this.props.currentPage === 'signals' ? styles.activeTab : styles.tab}
              onClick={() => this.props.signals.debugger.pageChanged({page: 'signals'})}>
              <i className={icons.signals}/> SIGNALS
            </li>
            <li
              className={this.props.currentPage === 'model' ? styles.activeTab : styles.tab}
              onClick={() => this.props.signals.debugger.pageChanged({page: 'model'})}>
              <i className={icons.model}/> MODEL
            </li>
            <li className={styles.rightItem}>
              <button
                onClick={() => this.onDisableDebuggerClick()}
                disabled={currentApp.isExecutingAsync || !currentApp.disableDebugger}>{currentApp.disableDebugger ? 'enable' : 'disable'}</button>
            </li>
            <li className={styles.rightItem}>
              <label style={{cursor: 'pointer'}}><input
                type="checkbox"
                disabled={currentApp.isExecutingAsync}
                onChange={() => this.onResetOnRefreshClick()}
                checked={!currentApp.willKeepState}/> <small>reset on refresh</small></label>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}

 export default Toolbar
