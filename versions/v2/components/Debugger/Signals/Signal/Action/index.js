import React from 'react';
import styles from './styles.css';
import icons from 'common/icons.css';
import classnames from 'classnames';

import Inspector from '../../../Inspector';
import Mutation from './Mutation';

function Action({action, children, onMutationClick}) {

  function renderOutput() {
    return (
      <div className={styles.actionOutput}>
        <i className={icons.down}/>
        <div className={styles.outputLabel}>Output:</div>
        <div className={styles.outputValue}><Inspector value={action.output}/></div>
      </div>
    );
  }

  const className = classnames({
    [icons.asyncAction]: action.isAsync,
    [icons.action]: !action.isAsync && action.hasExecuted,
    [icons.skippedOutput]: !action.hasExecuted,
    spin: action.isExecuting,
    [icons.runningAction]: action.isExecuting
  });

  return (
    <div className={styles.action}>
      <div className={styles.actionHeader}>
        <i className={className}/>
        <div className={styles.actionTitle}>{action.name}</div>
      </div>

      {action.hasExecuted ? (
        <div>
          <div className={styles.actionInput}>
          <i className={icons.down}/>
          <div className={styles.inputLabel}>Input:</div>
          <div className={styles.inputValue}><Inspector value={action.input}/></div>
          </div>
          <div className={styles.mutations}>
            {action.mutations.map((mutation, index) => <Mutation mutation={mutation} key={index} onMutationClick={onMutationClick}/>)}
          </div>
          {action.output ? renderOutput() : null}
          {children}
        </div>
        ) : null}
      </div>

  );
}

 export default Action;
