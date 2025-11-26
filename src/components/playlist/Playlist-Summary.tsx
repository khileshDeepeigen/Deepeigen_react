import { useState } from "react"
import "./styles/playlist-summary.css"

interface Lecture {
  id: string
  title: string
  price: number
  purchased?: boolean
}

interface PlaylistSummaryProps {
  onGoBack?: () => void
}

export default function PlaylistSummary({ onGoBack }: PlaylistSummaryProps) {
  const [selectedDuration, setSelectedDuration] = useState<"1month" | "6months" | "1year">("1year")

  const lectures: Lecture[] = [
    {
      id: "l1",
      title: "AI-102: Introduction to Fundamentals of Machine Learning",
      price: 11,
    },
    {
      id: "l2",
      title: "AI-102: Introduction to Fundamentals of Machine Learning",
      price: 11,
    },
    {
      id: "l3",
      title: "AI-102: Introduction to Fundamentals of Machine Learning",
      price: 11,
    },
    {
      id: "l4",
      title: "AI-102: Introduction to Fundamentals of Machine Learning",
      price: 11,
      purchased: true,
    },
    {
      id: "l5",
      title: "AI-102: Introduction to Fundamentals of Machine Learning",
      price: 11,
      purchased: true,
    },
  ]

  const lecturePrice = 12
  const assignmentPrice = 10
  const totalPrice = 22
  const payAmount = 20

  return (
    <div className="playlist-summary-wrapper">
      <button className="back-button" onClick={onGoBack}>
        <span>←</span>
        <span>Go back</span>
      </button>

      <div className="playlist-summary-container">
        <div className="summary-card">
          {/* Header */}
          <h1 className="summary-title">Playlist Summary</h1>

          {/* Subscribe Section */}
          <div className="subscribe-section">
            <h2 className="section-label">Subscribe for</h2>
            <div className="duration-buttons">
              <button
                className={`duration-btn ${selectedDuration === "1month" ? "active" : ""}`}
                onClick={() => setSelectedDuration("1month")}
              >
                1 Month
              </button>
              <button
                className={`duration-btn ${selectedDuration === "6months" ? "active" : ""}`}
                onClick={() => setSelectedDuration("6months")}
              >
                6 Months
              </button>
              <button
                className={`duration-btn ${selectedDuration === "1year" ? "active" : ""}`}
                onClick={() => setSelectedDuration("1year")}
              >
                1 Year
              </button>
            </div>
          </div>

          {/* Selected Lectures */} 
          <div className="lectures-section">
            <div className="section-header">
              <h3 className="section-label">Selected Lectures (15)</h3>
              <div className="section-price">${lecturePrice}</div>
            </div>

            <div className="lectures-list">
              {lectures.map((lecture) => (
                <div key={lecture.id} className="lecture-row">
                  <div className="lecture-icon-wrapper">
                    <button className="lecture-play-btn">
                      <span>▶</span>
                    </button>
                  </div>
                  <div className="lecture-content">
                    <p className="lecture-name">{lecture.title}</p>
                  </div>
                  <div className="lecture-status">
                    {lecture.purchased ? (
                      <span className="purchased-badge">Purchased</span>
                    ) : (
                      <span className="lecture-price">${lecture.price}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Assignment */}
          <div className="assignment-section">
            <div className="section-header">
              <h3 className="section-label">Custom Assignment</h3>
              <div className="section-price">${assignmentPrice}</div>
            </div>
          </div>

          {/* Total */}
          <div className="total-section">
            <h3 className="section-label">Total</h3>
            <span className="total-price">${totalPrice}</span>
          </div>

          {/* Payment Button */}
          <button className="pay-button">Pay ${payAmount}</button>
        </div>
      </div>
    </div>
  )
}

