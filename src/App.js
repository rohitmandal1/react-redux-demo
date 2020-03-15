import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './Components/CakeContainer';
import store from './redux/store';
import HooksCakeContainer from './Components/HooksCakeContainer';
import IceCremeContainer from './Components/IceCremeContainer'
import NewCakeContainer from './Components/NewCakeContainer';
import ItemContainer from './Components/ItemContainer';
import UsersContainer from './Components/UsersContainer';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <UsersContainer/>
      {/* <ItemContainer cake />
      <ItemContainer/>
      <HooksCakeContainer/>
      <CakeContainer />
      <IceCremeContainer />
      <NewCakeContainer /> */}
    </div>
    </Provider>
  );
}

export default App;
