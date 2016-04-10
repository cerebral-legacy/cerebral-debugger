import React from 'react';
import classNames from 'classnames';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';

import Inspector from '../Inspector';

@Cerebral({
  currentPage: ['debugger', 'currentPage'],
  media: ['useragent', 'media'],
  currentApp: ['debugger', 'currentApp'],
  path: ['debugger', 'currentMutationPath']
})
class Model extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.currentPage === 'model' || !nextProps.media.small || this.props.path !== nextProps.path;
  }
  render() {
    return (
      <div className={classNames(styles.wrapper, this.props.className)}>
        <div className={styles.model}>
          <Inspector value={this.props.currentApp.model} expanded canEdit path={this.props.path}/>
        </div>
      </div>
      );
  }
}

 export default Model;
