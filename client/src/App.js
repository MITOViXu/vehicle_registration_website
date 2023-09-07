import React from 'react'
import './App.css'
import './index.css'
import Routers from './routers/Routers'
import Navbar from './components/Navbar'
const App = () => {
    return (
      <div className='background'>
        <Navbar />
        <Routers />
      </div>
    )
}

export default App
