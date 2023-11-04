import './App.css';
// import OuterNav from './Client/Components/OuterNav';
import About from './Client/Pages/About';
import Contact from './Client/Pages/Contact';
import Investments from './Client/Pages/Investments';
import Startpage from './Client/Startpage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <OuterNav/> */}
      <Routes> 
        <Route path='/' element={<Startpage/>}/>
        <Route path='/About-us' element={<About/>}/>
        <Route path='/investment-plans' element={<Investments/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
      </Routes>

    </div>
  );
}

export default App;
