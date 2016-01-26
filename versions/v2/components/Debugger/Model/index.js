import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';

import Inspector from '../Inspector';

@Cerebral({
  currentApp: ['debugger', 'currentApp'],
  path: ['debugger', 'currentMutationPath']
})
class Model extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.model}>
          <Inspector value={this.props.currentApp.model} expanded canEdit path={this.props.path}/>
        </div>
      </div>
      );
  }
}

 export default Model;
