import React,{Suspense} from 'react';
//import logo from './logo.svg';
import './App.css';
import CountFetch from './Counter';
import Data from './Data';
import CompletedTodos from './CompletedTodos'
import PendingTodos from './PendingTodos'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>React Concurrent Mode</h1>
      <div className="app">
      <h1>Here are your Todos for today</h1>
      <p>Click on any todo to view more details about it</p>

      <h3>Pending Todos</h3>
      <Suspense fallback={<h1>Loading Pending Todos...</h1>}>
        <PendingTodos />
      </Suspense>

      <h3>Completed Todos</h3>
      <Suspense fallback={<h1>Loading Completed Todos...</h1>}>
        <CompletedTodos />
      </Suspense>
      <p>--------------------------------------------------------------------------------</p>
      <Data/>
    </div>
   

      </header>
    </div>
  );
}

export default App;
 