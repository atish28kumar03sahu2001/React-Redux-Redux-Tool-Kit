import React from 'react'
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';

function App() {
  return (
    <>
      <HooksCakeContainer />
      <HooksIceCreamContainer />
      <CakeContainer />
      <IceCreamContainer />
    </>
  )
}

export default App;