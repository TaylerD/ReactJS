import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter';

function App() {
  const [mount, setMount] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
        <p>Hola Vite con React</p>
        { mount && <Counter /> }
        <button onClick={}></button>
      </header>
    </div>
  )
}

export default App