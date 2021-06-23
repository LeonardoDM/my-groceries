import React from 'react'
import './App.css';
import AppHeader from './components/AppHeader/AppHeader.jsx';
import AppSection from './components/AppSection/AppSection.jsx';


function App() {
  return (
    <div className="App">
      <AppHeader/>
      <img src="./images/grocery-store.jpg" alt=""/>
      <h1>Lista de produtos</h1>
      <AppSection/>
    </div>
  );
}

export default App;