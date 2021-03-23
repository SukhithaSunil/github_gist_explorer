import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import DashBoard from '../src/app/pages/Dashboard/DashBoard';

function App() {
  return (
    <div className='App'>
      <DashBoard />
    </div>
  );
}

export default App;
