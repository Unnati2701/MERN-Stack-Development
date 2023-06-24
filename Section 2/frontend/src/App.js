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
import StateManagement from './components/StateManagement';
import ToDo from './components/ToDo';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div>
      <Toaster position='top-center'></Toaster>
      <AnimatePresence>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route element={ <Navigate to ="/home" /> } path='/' />
            <Route element={ <Home /> } path='home' />
            <Route element={ <Login /> } path='login' />
            <Route element={ <Signup /> } path='signup' />
            <Route element={ <EventHandling />} path='event' />
            <Route element={ <StateManagement />} path='state' />
            <Route element={ <ToDo />} path='todo' />
            <Route element={ <Notfound /> } path='*' />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
