import HeroSection from '../components/landing/HeroSection'
import Courses from '../components/landing/Courses'
import AI_model from '../components/landing/AI_model'
import SubscriptionPricing from '../components/landing/SubscriptionPricing'
import Footer from '../components/landing/Footer'
import FAQ from '../components/landing/FAQ'

const LandingPage = () => {
  return (
    <div>
        <HeroSection />
        <Courses />
        <AI_model />
        <SubscriptionPricing />
        <FAQ />
        <Footer />
    </div>
  )
}

export default LandingPage