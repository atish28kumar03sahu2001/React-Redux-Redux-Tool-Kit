import React from 'react'
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

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
      <hr />
      <UserContainer />
    </>
  )
}

export default App;