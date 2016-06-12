import React from 'react';
import styles from './styles.css';
import icons from 'common/icons.css';

import Inspector from '../../../../Inspector';

const colors = {
  set: '#dc6428',
  import: '',
  unset: '#872841',
  push: '#004b87',
  splice: '#eb1e64',
  merge: '#007355',
  concat: '#1eaa6e',
  pop: '#872841',
  shift: '#4b2332',
  unshift: '#28a0aa'
};

function Mutation({mutation, onMutationClick}) {
  const mutationNameStyle = {
    color: colors[mutation.name]
  };
  return (
    <div className={styles.mutation}>
      <i className={icons.mutation}/>
      <span className={styles.mutationName} style={mutationNameStyle}>{mutation.name}</span>
      <span className={styles.mutationPath} onClick={() => onMutationClick(mutation.path)}>{mutation.path.join('.')}</span>
      <span className={styles.mutationArgs}><Inspector value={mutation.args.length > 1 ? mutation.args : mutation.args[0]}/></span>
    </div>
  );
}

 export default Mutation;
