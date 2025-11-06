import PricingCard from '../pricing/PricingCard';
import './subscriptionPricing.css';

export default function SubscriptionPricing() {
  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h1 className="pricing-title">Subscription Pricing</h1>
        <p className="pricing-description">
          Select the right learning package to accelerate your journey in 
          Al and Applied Mathematics Start with foundational courses in Cat-A, 
          expand into specialized fields with Cat-B, or unlock everything with Full Access. 
          Upgrade or adjust anytime_ no hidden fees, just learning.
        </p>
      </div>

      <PricingCard />
    </div>
  );
}
