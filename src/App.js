import logo from './logo.svg';
import './App.css';
import Exercise1 from './Exercise1';
import AboutUs from './AboutUs';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'

function App() {
  return (
    
    <div className="App">
      <nav>
        
  <Link to='/exercise1'>Exercise1</Link>
  <Link to='/about-us'>About Us</Link>
  
</nav>



      <Exercise1 />
      


      <Routes>
        <Route path = '/exercise1' element = {<Exercise1/>} />
        <Route path = '/about-us' element = {<AboutUs/>} />
      </Routes>
      
    </div>
  );
}

export default App;
