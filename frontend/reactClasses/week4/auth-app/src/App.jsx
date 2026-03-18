import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import ProtectRoute from './components/ProtectRoute'
import Dashboard from './components/Dashboard'
import CustomerPage from './pages/CustomerPage'
import StaffPage from './pages/StaffPage'
import AdminPage from './pages/AdminPage'

function App() {

  return (
    <>
      <h1>Auth App</h1>
      <Routes>
        <Route path='/' element={<Login /> } />
        <Route path='/dashboard' element={
          <ProtectRoute>
              <Dashboard/>
            </ProtectRoute>
        } />
        <Route path='/admin' element={
          <ProtectRoute roles={['admin']}>
              <AdminPage />
            </ProtectRoute>
        } />
        <Route path='/staff' element={
          <ProtectRoute roles={['staff']}>
              <StaffPage />
            </ProtectRoute>
        } />
        <Route path='/customer' element={
          <ProtectRoute roles={['customer']}>
              <CustomerPage />
            </ProtectRoute>
        } />
      </Routes>
    </>
  )
}

export default App
