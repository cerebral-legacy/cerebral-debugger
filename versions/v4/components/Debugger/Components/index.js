import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';
import connector from 'connector';

import StatePaths from './StatePaths';
import Renders from './Renders';

@Cerebral({
  map: 'debugger.componentsMap',
  renders: 'debugger.renders'
})
class Components extends React.Component {
  render() {

    return (
      <div className={styles.wrapper}>
        <StatePaths map={this.props.map} />
        <Renders renders={this.props.renders} />
      </div>
    );
  }
}

 export default Components;
