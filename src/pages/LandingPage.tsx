import HeroSection from '../components/landing/HeroSection'
import Courses from '../components/landing/Courses'
import AI_model from '../components/landing/AI_model'
import SubscriptionPricing from '../components/landing/SubscriptionPricing'
import FAQ from './FAQ'

const LandingPage = () => {
  return (
    <div>
        <HeroSection />
        <Courses />
        <AI_model />
        <SubscriptionPricing />
        <FAQ />
    </div>
  )
}

export default LandingPage