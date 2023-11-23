import './App.css';
import { Route,Routes } from 'react-router-dom';
import NavEducative from './NavEducative';
import Home from './components/HomeEducative';
import About from './components/AboutEducative';
function App() {
  return (
   <>
    <NavEducative/>
      <div>
    <Routes>        
      <Route path="/"  element={<Home/>} />
      <Route path="/about"  element={<About/>}/>
    </Routes>
    </div>
   </>
  
    
   
  );
}

export default App;
