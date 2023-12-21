// import { useState } from 'react'

import Appbar from "./components/Appbar";
import Body from "./pages/Body";
import Hero from "./pages/Hero";
import Sec2 from "./pages/Sec2";

function App() {
  return (
    <>
      <div className="  px-4 py-4">
        <Appbar />
        <Hero />
        <Body />
      </div>
      <Sec2 />
    </>
  );
}

export default App;
