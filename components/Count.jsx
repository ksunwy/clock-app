import React, { useState } from 'react';
import Clock from './Clock';

const Count = () => {
    // let value = "August, 24, 2023";
    const [value, setValue] = useState();
  return (
    <div>
        <input type="date" className='input' onChange={(e) => setValue(e.target.value)} />
        {value && <Clock value={value}/>}
    </div>
  )
}

export default Count;