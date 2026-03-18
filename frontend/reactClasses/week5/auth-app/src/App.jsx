import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login /> } />
          <Route path='/dashboard' element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
            } 
            />
        </Routes>
      </Router>
    </>
  )
}

export default App
