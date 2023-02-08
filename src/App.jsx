import React from 'react';
//
import {Routes, Route} from 'react-router-dom';
//
import Footer from './Components/Footer';
import Menu from './Components/Menu';
// Pages
import Home      from  './Pages/Home';
import Pokemones from  './Pages/Pokemones';
import Login     from  './Pages/Login';
import Notfound  from  './Pages/Notfound';
import Pokemon   from './Pages/Pokemon';

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
          <Route path='/'                element= {<Home />}/>
          <Route path='/pokemones'       element= {<Pokemones />}/>
          <Route path="/pokemones/:id" element= {<Pokemon />} />
          <Route path='/login' element={<Login />}/>
          <Route path='*' element= {<Notfound />}/>
     </Routes>
      <Footer />
    </>
  )
}

export default App

