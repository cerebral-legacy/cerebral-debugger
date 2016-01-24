import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';

import Inspector from '../Inspector';

@Cerebral({
  currentApp: ['debugger', 'currentApp']
})
class Model extends React.Component {
  render() {
    return (
      <div className={styles.model}>
        <Inspector value={this.props.currentApp.model} expanded canEdit/>
      </div>
    );
  }
}

 export default Model;
