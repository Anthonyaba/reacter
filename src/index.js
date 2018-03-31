import React from 'react';
import ReactDOM from 'react-dom';
import MenuAppBar from './bar';
import PersistentDrawer from './drawer';
const App=(props,context)=>{

  return (
    <div>
    <PersistentDrawer>
    </PersistentDrawer>
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
