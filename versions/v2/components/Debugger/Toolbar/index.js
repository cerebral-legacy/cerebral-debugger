import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';
import icons from 'common/icons.css';

@Cerebral({
  currentPage: ['debugger', 'currentPage']
})
class Toolbar extends React.Component {
  render() {
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
          </ul>
        </li>
      </ul>
    );
  }
}

 export default Toolbar
