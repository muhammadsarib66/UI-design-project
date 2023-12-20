// import { useState } from 'react'

import Appbar from "./components/Appbar"
import Body from "./pages/Body"
import Hero from "./pages/Hero"

function App() {

  return (
    <div className="  px-4 py-4">
        <Appbar/>
        <Hero/>
        <Body/>
      
    </div>
  )
}

export default App
