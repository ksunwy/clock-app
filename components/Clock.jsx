import React, { useEffect, useState } from 'react';

const Clock = ({value}) => {
    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    const numbers = (num) => {
        return num < 10 ? "0" + num : num;
      };

      const getTimeUntil = () => {
        const time = Date.parse(value) - Date.parse(new Date);

        if (time < 0) {
            setDays(0);
            setHours(0);
            setMinutes(0);
            setSeconds(0);
        } else {
            setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
            setMinutes(Math.floor((time / 1000 / 60) % 60));
            setSeconds(Math.floor((time / 1000) % 60));
        }
      }

    useEffect(() => {
        setInterval(() => getTimeUntil(value), 1000);

        return () => getTimeUntil(value);
    }, [value])
  return (
    <div className='clock'>
        <div className='days circle'>
            <p>{numbers(days)}</p>
            <p>{ days === 1 ? 'Day' : 'Days' }</p>
        </div>
        <div className='hours circle'>
            <p>{numbers(hours)}</p>
            <p>{ hours === 1 ? 'Hour' : 'Hours' }</p>
        </div>
        <div className='minutes circle'>
            <p>{numbers(minutes)}</p>
            <p>{ minutes === 1 ? 'Minute' : 'Minutes' }</p>
        </div>
        <div className='seconds circle'>
            <p>{numbers(seconds)}</p>
            <p>{ seconds === 1 ? 'Second' : 'Seconds' }</p>
        </div>
    </div>
  )
}

export default Clock;