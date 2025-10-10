import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './components/authentication/Login'
import Register from './components/authentication/Register'
import Navigation from './components/navigation/Navigation'
import MainLayout from './layouts/MainLayout'

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </ Routes>
    </>
  )
}

export default App
