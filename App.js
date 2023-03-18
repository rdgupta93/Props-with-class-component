import React from 'react';
//  import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CHeader from './components/CHeader';
// import { render } from '@testing-library/react';

class App extends React.Component
{
 render()
 {
  return(
    <div className="App">
      <Header name="Rahul" last="Sharma"/>
      <p>Rahul is a good boy</p>
     <Header name="Ajay" last="Suneja"/>
     <Header name="Pramod"/>
     <CHeader/>
     </div>
  );
 }
}


export default App;
