import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeHeader from './components/Header';
import ShoppingList from './components/List';

function App() {
  return (
    <div className="App">
      <HomeHeader></HomeHeader>
      <ShoppingList></ShoppingList>
    </div>
  );
}

export default App;
