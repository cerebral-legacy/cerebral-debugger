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

function Service({service}) {
  const serviceNameStyle = {
    color: '#28a0aa'
  };

  return (
    <div className={styles.service}>
      <i className={icons.service}/>
      <span className={styles.serviceName} style={serviceNameStyle}>{service.name}</span>
      <span className={styles.serviceMethod}>{service.method}</span>
      <span className={styles.serviceArgs}><Inspector value={service.args.length > 1 ? service.args : service.args[0]}/></span>
    </div>
  );
}

 export default Service;
