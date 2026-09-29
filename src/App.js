import React from 'react';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Welcome name="Student" />
      <Login />
      <hr />
      <Counter initialCount={5} />
      <hr />
      <Toggle />
    </div>
  );
}

export default App;