import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Head/Cards.jsx'
import { BrowserRouter,Routes,Route ,Link} from 'react-router-dom';
import Korzina from './Head/Korzina.jsx';
import HeadImg from './Head/HeadImg.jsx';
import Dey from './Head/Dey.jsx';
import config from './Head/config.jsx'
import Login from './Head/Login.jsx';
import Xzcard2 from './Head/Xzcard2.jsx'
import Poisk from './Head/Poisk.jsx'
import Xz from './Head/Xz.jsx'
import Xzcard from './Head/Xzcard.jsx'
import Heads from './Head/Heads.jsx'
import logo from './logo.svg';
import './App.css';
import {auth} from './Head/config'
import Opisn from './Head/Opisn.jsx';
import {useState} from 'react'
import {FirebaseError} from 'firebase/app';

function App() {
  const [isAuth,setIsAuth] = useState(localStorage.getItem('isAouth'))
  return (
    <div className="App">
      <div>
            <BrowserRouter>
      <Routes>
        <Route path='/opisanie/' element={<div><Heads /><Opisn/></div>}/>
        <Route path='/korzina' element={<div><Heads /><Login setIsAuth={setIsAuth}/></div>}/>
        <Route path='/' element={ <div id='App'>

<>
<Heads />
</>
<>
<Poisk />
</>
<>
<Xz/>
</>
<>
<Xzcard/>
</>
<>
<Xzcard2/>
</>
<>
<HeadImg/>
</>
<>
<Dey/>
</>
<>
<Cards/>
</>
</div>}/>
      </Routes>
      </BrowserRouter>
      </div>
      <br />
    </div>
  );
}

export default App;