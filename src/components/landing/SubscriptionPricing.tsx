import './subscriptionPricing.css';

export default function SubscriptionPricing() {
  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <h1 className="pricing-title">Subscription Pricing</h1>
        <p className="pricing-description">
          Select the right learning package to accelerate your journey in Al and Applied Mathematics Start with foundational courses in Cat-A, expand into specialized fields with Cat-B, or unlock everything with Full Access. Upgrade or adjust anytime_ no hidden fees, just learning.
        </p>
      </div>

      <div className="pricing-tabs">
        <button className="tab-button">Monthly</button>
        <button className="tab-button">Quarterly</button>
        <button className="tab-button tab-active">Yearly</button>
      </div>

      <div className="pricing-content">
        <div className="pricing-cards">
          <div className="pricing-card limited-access">
            <div className="card-header">
              <h2 className="card-title">Limited Access</h2>
              <p className="card-subtitle">Essential & specialized courses</p>
            </div>

            <div className="card-body">

              <div className="cat-section">
                <div className="cat-header">
                  <h3 className="cat-title cat-a">CAT-A</h3>
                  <div className="cat-divider"></div>

                  <div className="price-row">
                    <div className="price-group">
                      <span className="currency">₹</span>
                      <span className="price-large">830</span>
                      <span className="price-period">/year</span>
                    </div>
                    <div className="price-divider"></div>
                    <div className="price-group">
                      <span className="currency-small">$</span>
                      <span className="price-medium">10</span>
                      <span className="price-period-small">/year</span>
                    </div>
                  </div>
                  <div className="cat-divider"></div>
                </div>

                <div className="feature-list">
                  <div className="feature-item">
                    <svg className="check-icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_63_643)">
                        <path d="M5.62508 12.2501L15.0834 2.79175L16.2917 4.04175L5.62508 14.7084L0.666748 9.75008L1.91675 8.50008L5.62508 12.2501Z" fill="#0F9C0F" />
                      </g>
                      <defs>
                        <clipPath id="clip0_63_643">
                          <rect width="16" height="16" fill="white" transform="translate(0.5 0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>Introduction to AI Fundamentals</span>
                  </div>
                  <div className="feature-item">
                    <svg className="check-icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_63_647)">
                        <path d="M5.62508 12.2501L15.0834 2.79175L16.2917 4.04175L5.62508 14.7084L0.666748 9.75008L1.91675 8.50008L5.62508 12.2501Z" fill="#0F9C0F" />
                      </g>
                      <defs>
                        <clipPath id="clip0_63_647">
                          <rect width="16" height="16" fill="white" transform="translate(0.5 0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>Linear Algebra Essentials</span>
                  </div>
                  <div className="feature-item">
                    <svg className="check-icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_63_651)">
                        <path d="M5.62508 12.2501L15.0834 2.79175L16.2917 4.04175L5.62508 14.7084L0.666748 9.75008L1.91675 8.50008L5.62508 12.2501Z" fill="#0F9C0F" />
                      </g>
                      <defs>
                        <clipPath id="clip0_63_651">
                          <rect width="16" height="16" fill="white" transform="translate(0.5 0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>Python for Data Science</span>
                  </div>
                  <div className="feature-item">
                    <svg className="check-icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_63_655)">
                        <path d="M5.62508 12.2501L15.0834 2.79175L16.2917 4.04175L5.62508 14.7084L0.666748 9.75008L1.91675 8.50008L5.62508 12.2501Z" fill="#0F9C0F" />
                      </g>
                      <defs>
                        <clipPath id="clip0_63_655">
                          <rect width="16" height="16" fill="white" transform="translate(0.5 0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>Machine Leaning Basics</span>
                  </div>
                  <div className="feature-item">
                    <svg className="check-icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_63_659)">
                        <path d="M5.62508 12.2501L15.0834 2.79175L16.2917 4.04175L5.62508 14.7084L0.666748 9.75008L1.91675 8.50008L5.62508 12.2501Z" fill="#0F9C0F" />
                      </g>
                      <defs>
                        <clipPath id="clip0_63_659">
                          <rect width="16" height="16" fill="white" transform="translate(0.5 0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>Statistics for AI</span>
                  </div>
                </div>

                <a href="#" className="view-courses">View Courses →</a>
                <button className="choose-plan-btn">Choose Plan</button>

              </div>

              <div className="column-divider"></div>

              <div className="cat-section">
                <div className="cat-header">
                  <h3 className="cat-title cat-b">CAT-B</h3>
                  <div className="cat-divider"></div>

                  <div className="price-row">
                    <div className="price-group">
                      <span className="currency">₹</span>
                      <span className="price-large">400</span>
                      <span className="price-period">/year</span>
                    </div>
                    <div className="price-divider"></div>
                    <div className="price-group">
                      <span className="currency-small">$</span>
                      <span className="price-medium">5</span>
                      <span className="price-period-small">/year</span>
                    </div>
                  </div>
                  <div className="cat-divider"></div>
                </div>

                <div className="feature-list">
                  <div className="feature-item">
                    <svg className="check-icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_63_674)">
                        <path d="M5.62508 12.2501L15.0834 2.79175L16.2917 4.04175L5.62508 14.7084L0.666748 9.75008L1.91675 8.50008L5.62508 12.2501Z" fill="#0F9C0F" />
                      </g>
                      <defs>
                        <clipPath id="clip0_63_674">
                          <rect width="16" height="16" fill="white" transform="translate(0.5 0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>Deep Learning with PyTorch</span>
                  </div>
                  <div className="feature-item">
                    <svg className="check-icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_63_678)">
                        <path d="M5.62508 12.2501L15.0834 2.79175L16.2917 4.04175L5.62508 14.7084L0.666748 9.75008L1.91675 8.50008L5.62508 12.2501Z" fill="#0F9C0F" />
                      </g>
                      <defs>
                        <clipPath id="clip0_63_678">
                          <rect width="16" height="16" fill="white" transform="translate(0.5 0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>Natural Language Processing</span>
                  </div>
                  <div className="feature-item">
                    <svg className="check-icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_63_682)">
                        <path d="M5.62508 12.2501L15.0834 2.79175L16.2917 4.04175L5.62508 14.7084L0.666748 9.75008L1.91675 8.50008L5.62508 12.2501Z" fill="#0F9C0F" />
                      </g>
                      <defs>
                        <clipPath id="clip0_63_682">
                          <rect width="16" height="16" fill="white" transform="translate(0.5 0.5)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>Computer Vision Fundamentals</span>
                  </div>
                  <div className="feature-item feature-disabled">
                    <svg className="cross-icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.5 4.5L4.5 12.5M4.5 4.5L12.5 12.5" stroke="#CE2823" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Reinforced Leaning Overview</span>
                  </div>
                  <div className="feature-item feature-disabled">
                    <svg className="cross-icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.5 4.5L4.5 12.5M4.5 4.5L12.5 12.5" stroke="#CE2823" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Generative AI Models</span>
                  </div>
                </div>

                <a href="#" className="view-courses">View Courses →</a>
                <button className="choose-plan-btn">Choose Plan</button>

              </div>

            </div>

          </div>

          <div className="pricing-card full-access">
            <div className="best-value-badge">Best Value</div>

            <div className="card-header">
              <h2 className="card-title">Full Access</h2>
              <p className="card-subtitle">Complete curriculum & all premium courses</p>
            </div>

            <div className="full-access-pricing">
              <div className="full-divider"></div>

              <div className="full-price-row">
                <div className="price-group">
                  <span className="currency">₹</span>
                  <span className="price-large">3,735</span>
                  <span className="price-strikethrough">₹9,999</span>
                  <span className="price-period">/year</span>
                </div>
                <div className="price-divider"></div>
                <div className="price-group">
                  <span className="currency-small">$</span>
                  <span className="price-medium">50</span>
                  <span className="price-strikethrough-small">$75</span>
                  <span className="price-period-small">/year</span>
                </div>
              </div>

              <div className="full-divider"></div>

              <h3 className="plus-title">Everything in CAT A & B, Plus:</h3>

              <div className="feature-list">
                <div className="feature-item">
                  <svg className="check-icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_63_707)">
                      <path d="M5.62508 12.2501L15.0834 2.79175L16.2917 4.04175L5.62508 14.7084L0.666748 9.75008L1.91675 8.50008L5.62508 12.2501Z" fill="#0F9C0F" />
                    </g>
                    <defs>
                      <clipPath id="clip0_63_707">
                        <rect width="16" height="16" fill="white" transform="translate(0.5 0.5)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Advanced Machine Learning Techniques</span>
                </div>
                <div className="feature-item">
                  <svg className="check-icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_63_711)">
                      <path d="M5.62508 12.2501L15.0834 2.79175L16.2917 4.04175L5.62508 14.7084L0.666748 9.75008L1.91675 8.50008L5.62508 12.2501Z" fill="#0F9C0F" />
                    </g>
                    <defs>
                      <clipPath id="clip0_63_711">
                        <rect width="16" height="16" fill="white" transform="translate(0.5 0.5)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Deep Learning Masterclass</span>
                </div>
                <div className="feature-item">
                  <svg className="check-icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_63_715)">
                      <path d="M5.62508 12.2501L15.0834 2.79175L16.2917 4.04175L5.62508 14.7084L0.666748 9.75008L1.91675 8.50008L5.62508 12.2501Z" fill="#0F9C0F" />
                    </g>
                    <defs>
                      <clipPath id="clip0_63_715">
                        <rect width="16" height="16" fill="white" transform="translate(0.5 0.5)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Mathematical Optimization for AI</span>
                </div>
                <div className="feature-item">
                  <svg className="check-icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_63_719)">
                      <path d="M5.62508 12.2501L15.0834 2.79175L16.2917 4.04175L5.62508 14.7084L0.666748 9.75008L1.91675 8.50008L5.62508 12.2501Z" fill="#0F9C0F" />
                    </g>
                    <defs>
                      <clipPath id="clip0_63_719">
                        <rect width="16" height="16" fill="white" transform="translate(0.5 0.5)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Generative AI</span>
                </div>
                <div className="feature-item">
                  <svg className="check-icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_63_723)">
                      <path d="M5.62508 12.2501L15.0834 2.79175L16.2917 4.04175L5.62508 14.7084L0.666748 9.75008L1.91675 8.50008L5.62508 12.2501Z" fill="#0F9C0F" />
                    </g>
                    <defs>
                      <clipPath id="clip0_63_723">
                        <rect width="16" height="16" fill="white" transform="translate(0.5 0.5)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Computer Vision with Advanced Architectures</span>
                </div>
                <div className="feature-item">
                  <svg className="check-icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_63_727)">
                      <path d="M5.62508 12.2501L15.0834 2.79175L16.2917 4.04175L5.62508 14.7084L0.666748 9.75008L1.91675 8.50008L5.62508 12.2501Z" fill="#0F9C0F" />
                    </g>
                    <defs>
                      <clipPath id="clip0_63_727">
                        <rect width="16" height="16" fill="white" transform="translate(0.5 0.5)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Graph Neural Networks</span>
                </div>
                <div className="feature-item">
                  <svg className="check-icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_63_731)">
                      <path d="M5.62508 12.2501L15.0834 2.79175L16.2917 4.04175L5.62508 14.7084L0.666748 9.75008L1.91675 8.50008L5.62508 12.2501Z" fill="#0F9C0F" />
                    </g>
                    <defs>
                      <clipPath id="clip0_63_731">
                        <rect width="16" height="16" fill="white" transform="translate(0.5 0.5)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Advanced Reinforced Learning</span>
                </div>
                <div className="feature-item">
                  <svg className="check-icon" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_63_735)">
                      <path d="M5.62508 12.2501L15.0834 2.79175L16.2917 4.04175L5.62508 14.7084L0.666748 9.75008L1.91675 8.50008L5.62508 12.2501Z" fill="#0F9C0F" />
                    </g>
                    <defs>
                      <clipPath id="clip0_63_735">
                        <rect width="16" height="16" fill="white" transform="translate(0.5 0.5)" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Quantum Computing for Machine Learning</span>
                </div>
              </div>
            </div>

            <button className="join-now-btn">Get Full Access | Join Now</button>
          </div>
        </div>

        <div className="or-divider">
          <div className="line"></div>
          <span>Or</span>
          <div className="line"></div>
        </div>

        <div className="custom-playlist">
          <div className="playlist-header">
            <h2 className="playlist-title">Create Your Own Playlist</h2>
            <p className="playlist-description">Choose or select any courses or lectures of your liking and create a custom plan</p>
          </div>
          <button className="create-playlist-btn">Create Playlist →</button>
        </div>
      </div>
    </div>
  );
}
