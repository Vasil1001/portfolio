import React from 'react'

export default function SendEmailModal() {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-4" className="btn">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">Email Sent</h3>
          <p className="py-4">Your email has been successfully sent to Vasilis!</p>
        </label>
      </label>
    </div>
  )
}
