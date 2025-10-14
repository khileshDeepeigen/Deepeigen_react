import "./auth.css"

const Verification = () => {
  return (
    <div className="verification__container">
      <div className="verification__header">
        <h1 className="verification__title">Verify your email</h1>
        <h3>We've sent an email to</h3>
        <h4 className="verification__mail">myname@email.com</h4>
      </div>

      <div className="verification__desc">
        <p>Just click on the link in that email to complete your signup.
        If you don't see it, you may need to check your spam folder.</p>
      </div>

      <div className="verification__resend">
        <p>Can't find the email? <span className="verification__click"> Resend Verification Email</span></p>
      </div>
    </div>
  )
}

export default Verification