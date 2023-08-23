import './App.css';
import 'bootstrap'
import { Link, Route, Routes } from 'react-router-dom';
import LoginForm from './component/LoginComp';

import NgoHome from './component/NgoHome';
import CustomerHome from './component/CustomerHome';

import { useSelector } from 'react-redux';
import LogoutComp from './component/LogoutComp';
import ForgotPassword from './component/ForgotPassword';
import CustomerReg from './component/CustomerReg';
import NgoReg from './component/NgoReg';
import ArtGallery from './component/ArtGallery';
import Navcart from './component/Cart/Navcart';

function App() {
  //referering initial state of logged
  const mystate = useSelector((state) => state.logged);
  return (

    <div>

      <div style={{ display: mystate.loggedIn ? "none" : "block" }}>
        {/* <nav className='navbar navbar-expand-sm bg-light mb-3'>
          <div className='container-fluid'>
            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav mr-auto'>
                <li className='nav-item'>
                  <Link to="login" className='nav-link px-3'>Login</Link>
                </li>
                <li className='nav-item'>
                  <Link to="home" className='nav-link px-3'>Home</Link>
                </li>
                <li className='nav-item'>
                  <Link to="reg_customer" className='nav-link px-3'>Customer Registration</Link>
                </li>
                <li className='nav-item'>
                  <Link to="NgoReg" className='nav-link px-3'>NGO Registration</Link>
                </li>
                <li className='nav-item'>
                  <Link to="reg_artist" className='nav-link px-3'>Artist Registration</Link>
                </li>
                <li className='nav-item'>
                  <Link to="ArtGallaery" className='nav-link px-3'></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}

        {/* <ArtGallery /> */}
        <Navcart />
      </div>


      <Routes>
        <Route path='/login' element={<LoginForm></LoginForm>}></Route>
        { }
        <Route path='/ngo_home' element={<NgoHome></NgoHome>}></Route>
        <Route path='/customer_home' element={<CustomerHome></CustomerHome>}></Route>
        <Route path='/logout' element={<LogoutComp></LogoutComp>}></Route>
        <Route path='/forgotpassword' element={<ForgotPassword></ForgotPassword>}></Route>
        <Route path='/reg_customer' element={<CustomerReg></CustomerReg>}></Route>
        <Route path='/NgoReg' element={<NgoReg></NgoReg>}></Route>
        <Route path='/ArtGallaery' element={<ArtGallery ></ArtGallery>} />

      </Routes>

      <h1 className="bg-primary text-center p-4">Welcome to Art for Welfare Platform</h1>
    </div >
  );
}

export default App;
