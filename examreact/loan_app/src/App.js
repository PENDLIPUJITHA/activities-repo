import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import { ProfileLogin, ProfileRegistration, ProfileSuccess } from './components/Profile';
import { CustomerLogin, CustomerRegistration, LoginSuccess } from './Components/Customer';


function App() {
    return (
      <div className="container-fluid">
        <div className="alert alert-secondary">
            <h2 className='text-center'>Wallet Application</h2>
        </div>
        <div>
          <Routes>
            <Route path='' element={<CustomerLogin/>}></Route>
            <Route path='/login' element={<CustomerLogin/>}></Route>
            <Route path='/register' element={<CustomerRegistration/>}></Route>
            <Route path='/success/:emailId/*' element={<LoginSuccess/>}></Route>
          </Routes>
        </div>
      </div>
    );
  }
  
  export default App;