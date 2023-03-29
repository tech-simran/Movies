import logo from './logo.svg';
import './App.css';
import Registration from './components/Registration';
import Login from './components/Login';
import {Route,Routes} from 'react-router-dom'
import MoviesList from './components/MoviesList';
import Cards from './components/Cards';
function App() {
  return (
   <>
   <Routes>
   <Route path='/cards' element={<Cards/>}/>
    <Route path='/' element={<Login/>}/>
    <Route path='/movies' element={<MoviesList/>}/>
    <Route path='/signup' element={<Registration/>}/>
   </Routes>
   </>
  );
}

export default App;
