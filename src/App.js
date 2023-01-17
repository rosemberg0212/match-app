import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Proximos from './pages/Proximos';
import Terminados from './pages/Terminados';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/proximos' element={<Proximos/>}/>
        <Route path='/terminados' element={<Terminados/>}/>

      </Routes>
    </Router>
    </>
  );
}

export default App;
