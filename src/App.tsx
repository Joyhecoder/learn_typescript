import React, {FC} from 'react';
import {Person} from './components/Person';
import './App.css';

const App: FC =  () => {


  
  return (
    <div className="App">
      <Person name="Joy" age={12} email="joy@me.com" />
    </div>
  );
}

export default App;
