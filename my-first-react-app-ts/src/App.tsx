// import { useState } from 'react';

import './App.css';
import Button from './components/Button';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>My First React App in TS</h1>
      <div className="card">
        {'Profile '}
        <Button title="Sign out" disabled onClick={() => alert('Sign out')} />
      </div>
      <div className="card">
        {'Home '}
        <Button
          title="Register"
          objArr={[{ id: '', title: '' }]}
          onClick={() => alert('Register')}
        />
      </div>
    </>
  );
}

export default App;
