import React, { useState, useEffect } from 'react'
import axios from 'axios'


function App() {
  const [test, setTest] = useState('wait')

  useEffect(() => {
    axios('/api/v1/test')
        .then(({ data }) => setTest(data))
        .catch(e => setTest(JSON.stringify(e.response)))
  }, [])



  return (
    <div className="bg-red-500">
      <p>hello</p>
      <p>{test}</p>

    </div>
  )
}

export default App
