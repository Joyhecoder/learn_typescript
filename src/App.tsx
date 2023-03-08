import React, {FC, createContext} from 'react';
import {Person, HairColor} from './components/Person';
import './App.css';

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}
const AppContext = createContext<AppContextInterface | null>(null)

const App: FC =  () => {

const contextValue: AppContextInterface = {
  name: "pedro",
  age: 20,
  country: "Brazil"
}
  
  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Person name="Joy" age={12} email="joy@me.com" hairColor={HairColor.Blonde} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
