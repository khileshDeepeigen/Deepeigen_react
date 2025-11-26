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
import TermsCondition from './pages/TermsCondition'
import PrivacyPolicyGDPR from './pages/PrivacyPolicyGDPR'
import FAQ from './pages/FAQ'
import CourseDetails from './components/courses/CourseDetails'
import MakePlaylist from './components/makePlaylist/MakePlaylist'
import AboutUs from './pages/AboutUsPage'
import ForgotPassword from './components/authentication/ForgotPassword'
import { ResetPassword } from './components/authentication/ResetPassword'
import { PasswordResetConfirmation } from './components/authentication/PasswordResetConfirmation'

import UserDashboard from './pages/UserDashboard'
import Profile from './components/userDashboard/Profile'
import Settings from './components/userDashboard/Settings'
import Billing_Invoice from './components/userDashboard/BillingAndInvoices'
import CourseViewPage from './pages/CourseViewPage'
import PlaylistSummary from './components/playlist/Playlist-Summary'

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/reset_password" element={<ResetPassword />} />
          <Route path="/password_reset_confirmation" element={<PasswordResetConfirmation
            email="test@example.com"
            onResend={() => { }}
          />} />

          <Route path="/team" element={<Team />} />
          <Route path="/career" element={<Careers />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/media" element={<Media />} />

          <Route path="/courses" element={<Courses />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/privacy_policyGDPR" element={<PrivacyPolicyGDPR />} />
          <Route path="/terms_conditions" element={<TermsCondition />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/course_details" element={<CourseDetails />} />
          <Route path="/make_playlist" element={<MakePlaylist />} />

          {/* user dashboard */}
          <Route path="/user_dashboard" element={<UserDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/billings_invoices" element={<Billing_Invoice />} />

          <Route path="/course-view" element={<CourseViewPage />} />

          <Route path="/playlist-summary" element={<PlaylistSummary/>} />
        </Route>
      </ Routes>
    </>
  )
}

export default App
