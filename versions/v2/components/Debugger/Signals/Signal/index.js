import React from 'react';
import {Decorator as Cerebral} from 'cerebral-view-react';
import styles from './styles.css';
import icons from 'common/icons.css';
import connector from 'connector';

import currentSignal from 'common/computed/currentSignal';

import Action from './Action';

@Cerebral({
  app: ['debugger', 'currentApp'],
  signal: currentSignal
})
class Signal extends React.Component {
  constructor(props) {
    super(props);
    this.renderAction = this.renderAction.bind(this);
    this.onMutationClick = this.onMutationClick.bind(this);
    this.onActionClick = this.onActionClick.bind(this);
  }
  onMutationClick(path) {
    this.props.signals.debugger.mutationClicked({
      path
    });
  }
  onActionClick(action) {
    connector.inspect(this.props.signal.name, action.path);
  }
  componentDidMount() {
    Prism.highlightAll();
  }
  componentDidUpdate() {
    Prism.highlightAll();
  }
  renderOutputs(action) {
    return Object.keys(action.outputs).map((output, index) => {
      const isOutput = output === action.outputPath;
      const style = isOutput ? null : {opacity: 0.3};
      return (
        <div className={styles.output} style={style} key={index}>
          {isOutput ? <i className={icons.right}/> : <i className={icons.empty}/>}
          <div className={styles.outputPath}>
            <div className={styles.outputName}>{output}</div>
            {action.outputs[output].map(this.renderAction)}
          </div>
        </div>
      );
    });
  }
  renderAction(action, index) {
    if (Array.isArray(action)) {
      return (
        <div className={styles.asyncHeader} key={index}>
          <div className={styles.async}>
            {action.map(this.renderAction)}
          </div>
        </div>
      );
    }

    return (
      <Action
        action={action}
        key={index}
        onMutationClick={this.onMutationClick}
        onActionClick={this.onActionClick}>
      {action.outputPath ? this.renderOutputs(action) : null}
      </Action>
    );
  }
  render() {
    if (!this.props.signal) {
      return <span>No signal yet...</span>;
    }
    return (
      <div className={styles.signal}>
        <h3 className={styles.title}>{this.props.signal.name}</h3>
        <div className={styles.chain}>
          {this.props.signal.branches.map((action, index) => this.renderAction(action, index))}
        </div>
      </div>
    );
  }
}

 export default Signal;
