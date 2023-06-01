import './App.css';
import {BrowserRouter, Browsrouter , Route, Routes } from "react-router-dom";
import Login from './Pages/Login/Login'
import RegForm from './Pages/Register/RegistrationForm';
import Home from './Pages/Home/Home';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
              <Route exact path='/login' element={<Login/>}/>
          </Routes>
          <Routes>
              <Route exact path='/reg' element={<RegForm/>}/>
          </Routes>
          <Routes>
              <Route exact path='/home' element={<Home/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
