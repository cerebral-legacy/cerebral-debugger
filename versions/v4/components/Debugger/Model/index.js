import React from 'react';
import classNames from 'classnames';
import {connect} from 'cerebral-view-react';
import styles from './styles.css';

import Inspector from '../Inspector';

@connect({
  currentPage: 'debugger.currentPage',
  media: 'useragent.media',
  currentApp: 'debugger.currentApp',
  path: 'debugger.currentMutationPath'
})
class Model extends React.Component {
  shouldComponentUpdate(nextProps) {
    return (
      this.props.currentPage !== nextProps.currentPage ||
      this.props.media.small !== nextProps.media.small ||
      this.props.path !== nextProps.path ||
      this.props.currentApp.model !== nextProps.currentApp.model
    );
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
