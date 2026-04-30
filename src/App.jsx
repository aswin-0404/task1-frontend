import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import ProtectedRoute from './api/ProtectedRoute'
import AdminDashboard from './components/AdminDashboard'
import RecruiterDashboard from './components/RecruiterDashboard'
import FinanceDashboard from './components/FinanceDashboard'
import ManagerDashboard from './components/ManagerDashboard'

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/' element={<Login/>}/>

      <Route path='admin/' element={
        <ProtectedRoute allowedRoles="admin">
          <AdminDashboard/>
        </ProtectedRoute>
      }/>

      <Route path='finance/' element={
        <ProtectedRoute allowedRoles="finance">
          <FinanceDashboard/>
        </ProtectedRoute>
      }/>

      <Route path='recruiter/' element={
        <ProtectedRoute allowedRoles="recruiter">
          <RecruiterDashboard/>
        </ProtectedRoute>
      }/>

      <Route path='manager/' element={
        <ProtectedRoute allowedRoles="manager">
          <ManagerDashboard/>
        </ProtectedRoute>
      }/>



    </Routes>
    </BrowserRouter>
  )
}

export default App
