import React from 'react';
import classNames from 'classnames';
import {connect} from 'cerebral-view-react';
import styles from './styles.css';
import icons from 'common/icons.css';
import signalsList from 'common/computed/signalsList';

@connect({
  currentPage: 'debugger.currentPage',
  isExecutingAsync: 'debugger.isExecutingAsync',
  settings: 'debugger.settings',
  appSignals: signalsList()
})
class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copiedSignals: null
    };
  }
  onCopySignalsClick() {
    this.setState({copiedSignals: JSON.stringify(this.props.appSignals.reverse(), null, 2)}, () => {
      this.refs.textarea.select();
    });
  }
  render() {
    return (
      <ul className={styles.toolbar}>
        {
          this.state.copiedSignals ?
            <li className={styles.textarea}>
              <textarea ref="textarea" value={this.state.copiedSignals} onBlur={() => this.setState({copiedSignals: null})}/>
            </li>
          :
            null
        }
        <li className={styles.item}>
          <ul className={styles.tabs}>
            <li
              className={classNames(styles.tab, {[styles.activeTab]: this.props.currentPage === 'signals'})}
              onClick={() => this.props.signals.debugger.pageChanged({page: 'signals'})}>
              <i className={icons.signals}/> CONTROLLER
            </li>
            <li
              className={classNames(styles.tab, {[styles.activeTab]: this.props.currentPage === 'components'})}
              onClick={() => this.props.signals.debugger.pageChanged({page: 'components'})}>
              <i className={icons.components}/> VIEW
            </li>
            <li
              className={classNames(styles.tabOnSmall, styles.tab, {[styles.activeTab]: this.props.currentPage === 'model'})}
              onClick={() => this.props.signals.debugger.pageChanged({page: 'model'})}>
              <i className={icons.model}/> MODEL
            </li>
            <li className={styles.rightItem}>
              <button onClick={() => this.onCopySignalsClick()}>
                copy signals
              </button>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}

 export default Toolbar
