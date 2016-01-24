import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';

import List from './List';
import Signal from './Signal';

@Cerebral()
class Signals extends React.Component {
  render() {
    return (
      <div className={styles.signals}>
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
