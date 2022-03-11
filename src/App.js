import React, { useState } from 'react'
import Navbar from './components/Navbar'
import People from './components/People'
import Planets from './components/Planets'

const App = () => {
  const [page, setPage] = useState('planets')

  return (
    <div className="app">
      <h1>Star Wars Info</h1>
      <Navbar setPage={setPage} />

      <div className="content">
        {page === 'planets' ? <Planets /> : <People />}
      </div>
    </div>
  )
}

export default App
