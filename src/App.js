import Login from './components/login';
import Register from './components/register';
import './components/login.css';

import { 
  BrowserRouter ,
  Routes , 
  Route ,
  Link
} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <div className='header'>
      <Link to="/"><span>Login</span></Link>
      <Link to="register"><span>Sign Up</span></Link>
     
    </div>
    <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='register' element={<Register/>} />

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
