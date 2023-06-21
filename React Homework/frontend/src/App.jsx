import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element ={ <Navigate to = "/home" />} path = '/'/>
          <Route element ={ <Home /> } path='home' />
          <Route element ={ <Signup /> } path='signup' />
          <Route element ={ <Login /> } path='login' />
          <Route element ={ <NotFound /> } path='*' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
