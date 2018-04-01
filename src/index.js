import React from 'react';
import ReactDOM from 'react-dom';
import MenuAppBar from './bar';
import PersistentDrawer from './drawer';
import TemporaryDrawer from './test';
const App=(props,context)=>{

  return (
    <div>
      <MenuAppBar>
        </MenuAppBar>

  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
