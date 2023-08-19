import { useState } from 'react'
import Count from '../components/Count'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
        <div className="timer">
          <h1 className='title'>Count Down</h1>
          <Count />
        </div>
    </div>
  )
}

export default App
