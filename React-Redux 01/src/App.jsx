import React from 'react'
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <>
      <ItemContainer />
      <ItemContainer cake />
      <HooksCakeContainer />
      <HooksIceCreamContainer />
      <CakeContainer />
      <IceCreamContainer />
      <hr />
      <NewCakeContainer />
    </>
  )
}

export default App;