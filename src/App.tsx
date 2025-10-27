import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './components/authentication/Login'
import Register from './components/authentication/Register'
import MainLayout from './layouts/MainLayout'
import Team from './pages/Team'
import Verification from './components/authentication/Verification'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Media from './pages/Media'
import Courses from './pages/Courses'
import Pricing from './pages/Pricing'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/team" element={<Team/>} />
          <Route path="/career" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/media" element={<Media />} />

          <Route path="/courses" element={<Courses />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />

        </Route>
      </ Routes>
    </>
  )
}

export default App
