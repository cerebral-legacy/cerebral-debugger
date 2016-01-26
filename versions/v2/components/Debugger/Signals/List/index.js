import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';
import {intToRGB, hashCode, nameToColors} from 'common/utils';
import classnames from 'classnames';
import connector from 'connector';

@Cerebral({
  debugger: ['debugger']
})
class SignalsList extends React.Component {
  onSignalClick(event, signal, index) {
    if (event.nativeEvent.detail > 1) {
      return;
    }
    this.props.signals.debugger.signalClicked({
      index: index,
      groupId: signal.groupCount ? signal.id : null
    });
  }
  onSignalDoubleClick(signal, index) {
    if (this.props.debugger.currentApp.isExecutingAsync) {
      return;
    }
    this.props.signals.debugger.signalDoubleClicked({
      index: index,
      path: signal.path
    });
    connector.sendEvent('remember', signal.path[0]);
  }
  renderSignal(signal, index) {
    const currentSignalIndex = this.props.debugger.currentSignalIndex;

    const namePath = signal.name.split('.');
    const name = namePath.pop();
    const colors = nameToColors(namePath.join('.'), name);
    const hex = colors.backgroundColor;
    const signalStyle = {
      backgroundColor: hex
    };
    const isActive = currentSignalIndex === index;

    console.log(namePath.join('.'), name);

    const className = classnames({
      [styles.item]: true,
      [styles.activeItem]: isActive,
      [styles.withinExecution]: signal.isWithinExecution,
      [styles.grouped]: signal.isGrouped,
      pulse: signal.isExecuting
    });

    if (signal.isGrouped && this.props.debugger.expandedSignalGroups.indexOf(signal.groupId) === -1) {
      return null;
    }

    return (
      <li
        onClick={(event) => this.onSignalClick(event, signal, index)}
        onDoubleClick={() => this.onSignalDoubleClick(signal, index)}
        className={className}
        key={index}>
        {signal.path[0] === this.props.debugger.currentRememberedSignalPath[0] ? <div className={styles.remembered}/> : null}
        {signal.isGrouped ? null : <div className={styles.indicator} style={signalStyle}/>}
        <span className={styles.name}>{name} <small>{signal.groupCount ? ` (${signal.groupCount})` : null}</small></span>
        <span className={styles.type}>
          {signal.isSync ? signal.isRouted ? 'routed' : 'sync' : 'frame'}
        </span>
      </li>
    );
  }
  render() {
    const signals = this.props.debugger.signals;
    return (
      <ul className={styles.list}>
        {signals.map((signal, index) => this.renderSignal(signal, index))}
      </ul>
    );
  }
}

 export default SignalsList;
