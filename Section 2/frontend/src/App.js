import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Notfound from './components/Notfound';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';
import { Toaster} from 'react-hot-toast';

function App() {
  return (
    <div>
      <Toaster position=''></Toaster>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route element={ <Navigate to ="/home" /> } path='/' />
          <Route element={ <Home /> } path='home' />
          <Route element={ <Login /> } path='login' />
          <Route element={ <Signup /> } path='signup' />
          <Route element={ <EventHandling />} path='event' />
          <Route element={ <Notfound /> } path='*' />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;