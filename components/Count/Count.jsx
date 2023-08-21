import React, { useState } from 'react';
import Clock from '../Clock/Clock';
import styles from './Count.module.css'

const Count = () => {
  // let value = "August, 24, 2023";
  const [value, setValue] = useState();
  return (
    <div>
      <input type="date" className={styles.input} onChange={(e) => setValue(e.target.value)} />
      {value && <Clock value={value} />}
    </div>
  )
}

export default Count;