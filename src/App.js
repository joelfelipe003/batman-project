import './App.css';
import Fotos from './components/fotos/fotos';
import Contato from './components/contato/contato';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Comentarios from './components/comentarios/comentarios';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/fotos' element={<Fotos />} />
        <Route path='/comentarios' element={<Comentarios />} />
        
      </Routes>
      </BrowserRouter>
    </div>

  );
        }
        
        

        
export default App;
     
