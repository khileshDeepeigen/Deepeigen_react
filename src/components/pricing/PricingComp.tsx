import CourseCard from "../courses/CourseCard"
import PricingCard from "./PricingCard"
import "./pricingComp.css"

const PricingComp = () => {
    return (
        <div className="Pricing__Page">
            <div className="Pricing__UserHeader">
                <h1>
                    Welcome, John
                </h1>
                <p>Start your learning with DeepEigen</p>
            </div>
            <div className="Pricing__Container">
                <div className="P__Subscription">
                    <PricingCard />
                </div>
                <div className="P__Courses">
                    <div className="P__Course_Header">
                        <h1>All Courses</h1>
                        <p>Explore all AI & ML courses from Basic to Advance</p>
                    </div>
                    <CourseCard />
                </div>
            </div>
        </div>
    )
}

export default PricingComp