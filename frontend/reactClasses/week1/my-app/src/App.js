import React from 'react';
// import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
// import Contact from './pages/Contact';
// import Home from './Home';
// import About from './About';
// import Products from './Products';

function App({name}) {
    
  return (
    <div className="App">
      {/* <nav id='nav-links'>
        <Link to={'/home'} >Home</Link>
        <Link to={'/about'} >About</Link>
        <Link to={'/products'} >Products</Link>
      </nav>
      <h1>Welcome</h1>
      <Routes>
        <Route path='/home' element={<Home name={name}/> } />
        <Route path='/about' element={<About /> } />
        <Route path='/product' element={<Products /> } />
      </Routes> */}
      <Home />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
