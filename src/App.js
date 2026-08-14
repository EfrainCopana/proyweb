import logo from './logo.svg';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './Components/NavBar';
import { Contacto } from './Components/Contacto';
import { Banner } from './Components/Banner';
import { Skills } from './Components/Skills';
import { QuienesSomos } from './Components/QuienesSomos';
import { Blog } from './Components/Blog';
import { Hotweels } from './Components/Pages/Hotweels';
import { Mesa } from './Components/Pages/Mesa';
import {Legos} from './Components/Pages/Legos';
import {Pagos} from './Components/Pages/Pagos';
import {Figuras} from './Components/Pages/Figuras';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/proy-web' element={<Banner />} />
          <Route path='/home' element={<Banner />} />
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/quienessomos' element={<QuienesSomos/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path="/hotweels" element={<Hotweels/>} />
          <Route path="/mesa" element={<Mesa/>} />
          <Route path="/legos" element={<Legos/>} />
          <Route path="/pagos" element={<Pagos/>} />
          <Route path="/figuras" element={<Figuras/>} />
        </Routes>
      </Router>
      
    </div>
  );
}
export default App;

