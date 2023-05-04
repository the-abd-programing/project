import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Head/Cards.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Korzina from './Head/Korzina.jsx';
import Izbr from './Head/Izbr.jsx'
import Dey from './Head/Dey.jsx';
import Cards1 from './Cards/Cards1.jsx'
import config from './Head/config.jsx'
import Map from './Map/Map.jsx';
import Login from './Head/Login.jsx';
import Cards2 from './Cards/Cards2.jsx'
import Footer from './Head/Footer.jsx'
import Cards3 from './Cards/Cards3.jsx'
import Cards4 from './Cards/Cards4.jsx'
import Cards6 from './Cards/Cards6.jsx'
import Xzcard2 from './Head/Xzcard2.jsx'
import Korzina01 from './Korzina01'
import Poisk from './Head/Poisk.jsx'
import Xz from './Head/Xz.jsx'
import Cards7 from './Cards/Cards7.jsx'
import Xzcard from './Head/Xzcard.jsx'
import Heads from './Head/Heads.jsx'
import Menu from './Head/Menu.jsx'
import logo from './logo.svg';
import './App.css';
import { auth } from './Head/config'
import Opisn from './Head/Opisn.jsx';
import { useState } from 'react'
import { FirebaseError } from 'firebase/app';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAouth'))
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
          <Route path='/menu/' element={<div><Heads /><Menu /></div>} />
          <Route path='/Cards7/' element={<div><Heads /><Cards7 /></div>} />
            <Route path='/korzina/perek' element={<Korzina01/>}/>
            <Route path='/maps/' element={<Map/>}/>
            <Route path='/izb/' element={<div><Heads /><Izbr /></div>} />
            <Route path='/Cards6/' element={<div><Heads /><Cards6 /></div>} />
            <Route path='/Cards4/' element={<div><Heads /><Cards4 /></div>} />
            <Route path='/Cards3/' element={<div><Heads /><Cards3 /></div>} />
            <Route path='/Cards2/' element={<div><Heads /><Cards2 /></div>} />
            <Route path='/Cards1/' element={<div><Heads /><Cards1 /></div>} />
            <Route path='/opisanie/' element={<div><Heads /><Opisn /></div>} />
            <Route path='/korzina' element={<div><Heads /><Login setIsAuth={setIsAuth} /></div>} />
            <Route path='/' element={<div id='App'>

              <>
                <Heads />
              </>
              <>
                <Poisk />
              </>
              <>
                <Xz />
              </>
              <>
                <Xzcard />
              </>
              <>
                <Xzcard2 />
              </>
              <>
                <Dey />
              </>
              <>
                <Cards />
              </>
            </div>} />
          </Routes>
        </BrowserRouter>
      </div>
      <br />
    </div>
  );
}

export default App;