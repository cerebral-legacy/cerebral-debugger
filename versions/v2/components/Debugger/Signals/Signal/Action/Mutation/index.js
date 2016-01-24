import React from 'react';
import styles from './styles.css';
import {intToRGB, hashCode} from 'common/utils';

import Inspector from '../../../../Inspector';

function Mutation({mutation}) {
  const hex = '#' + intToRGB(hashCode(mutation.name));
  const mutationNameStyle = {
    color: hex
  };

  return (
    <div className={styles.mutation}>
      <span className={styles.mutationName} style={mutationNameStyle}>{mutation.name}</span>
      <span className={styles.mutationPath}>{mutation.path.join('.')}</span>
      <span className={styles.mutationArgs}><Inspector value={mutation.args.length > 1 ? mutation.args : mutation.args[0]}/></span>
    </div>
  );
}

 export default Mutation;
