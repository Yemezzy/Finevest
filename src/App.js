import './App.css';
import OuterNav from './Client/Components/OuterNav';
import Startpage from './Client/Startpage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <OuterNav/>
      <Routes>
        
        <Route path='/' element={<Startpage/>}/>
      </Routes>

    </div>
  );
}

export default App;
