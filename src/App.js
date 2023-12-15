import './App.css';
import Dashboard from './Client/Backend/pages/Dashboard';
import Deposit from './Client/Backend/pages/Deposit';
import Home from './Client/Backend/pages/Home';
import Investment from './Client/Backend/pages/Investment-plans';
import Withdrawl from './Client/Backend/pages/Withdrawl';
// import SideNav from './Client/Backend/components/SideNav';
// import OuterNav from './Client/Components/OuterNav';
import About from './Client/Pages/About';
import Contact from './Client/Pages/Contact';
import Investments from './Client/Pages/Investments';
import Login from './Client/Pages/Login';
import Signup from './Client/Pages/Signup';
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
        <Route path='/sign-up' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Dashboard' element={<Home/>}/>
        <Route path='/investment/Invest-now' element={<Investment/>}/>
        <Route path='/deposit-funds' element={<Deposit/>}/>
        <Route path='/withdraw-funds' element={<Withdrawl/>}/>
        {/* <Route path='/sideNav' element={<SideNav/>}/> */}
      </Routes>

    </div>
  );
}

export default App;
