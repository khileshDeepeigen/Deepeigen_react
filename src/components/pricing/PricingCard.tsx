
const PricingCard = () => {
    return (
        <>
            <div className="pricing-tabs">
                <button className="tab-button">Monthly</button>
                <button className="tab-button">Quarterly</button>
                <button className="tab-button tab-active">Yearly</button>
            </div>

            <div className="pricing-content">
                <div className="pricing-cards">

                    <div className="pricing-card basic-access">

                        <div className="card-header">
                            <h2 className="card-title">Basic</h2>
                            <p className="card-subtitle">Essential & foundation courses</p>
                        </div>

                        <div className="full-access-pricing">
                            <div className="full-divider"></div>

                            <div className="full-price-row">
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

                            <div className="full-divider"></div>

                            <h3 className="plus-title">CAT-II</h3>

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
                                    <span>Introduction to AI Fundamentals</span>
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
                                    <span>Machine Learning Essentials</span>
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
                                    <span>Core Mathematics for AI/ML</span>
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
                                    <span>Algorithm Foundations</span>
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
                                    <span>Conceptual Reasoning Skills</span>
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
                                    <span>Introduction to Generative AI</span>
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

                        <button className="join-now-btn basic-access-btn">Choose Plan</button>
                    </div>

                    <div className="pricing-card standard-access">
                        <div className="card-header">
                            <h2 className="card-title">Standard</h2>
                            <p className="card-subtitle">Deep & specialized courses</p>
                        </div>

                        <div className="full-access-pricing">
                            <div className="full-divider"></div>

                            <div className="full-price-row">
                                <div className="price-group">
                                    <span className="currency">₹</span>
                                    <span className="price-large">830</span>
                                    <span className="price-period">/year</span>
                                </div>
                                <div className="price-divider"></div>
                                <div className="price-group">
                                    <span className="currency-small">$</span>
                                    <span className="price-medium">50</span>
                                    <span className="price-period-small">/year</span>
                                </div>
                            </div>

                            <div className="full-divider"></div>

                            <h3 className="plus-title">CAT-IA & CAT-II</h3>

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

                        <button className="join-now-btn standard-access-btn">Choose Plan</button>
                    </div>

                    <div className="pricing-card premium-access">
                        <div className="best-value-badge">Best Value</div>

                        <div className="card-header">
                            <h2 className="card-title">Premium</h2>
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

                            <h3 className="plus-title">CAT-IA + CAT-IB + CAT-II</h3>

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

                        <button className="join-now-btn premium-access-btn">Get Full Access | Join Now</button>
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
        </>
    )
}

export default PricingCard