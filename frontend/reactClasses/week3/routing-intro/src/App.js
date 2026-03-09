import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
import Error from './pages/Error';

import './App.css';
import ProtectedRoute from './components/common/ProtectRoute';

const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <div className="App">
       <Router>
          <Routes>
            <Route path='/' element={<Home /> } />
            <Route path='/about' element={<About /> } />
            <Route path='/blog' element={<Blog /> } />
            <Route path='/login' element={<Login /> } />
            <Route path='/dashboard' element={
              <ProtectedRoute>
                <Suspense fallback={<div>Loading...</div>}>
                  <Dashboard />
                </Suspense>
              </ProtectedRoute>
              } />
            <Route path='*' element={<Error /> } />
          </Routes>
       </Router>
    </div>
  );
}

export default App;
