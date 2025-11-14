import { useState } from "react";

export default function ChangePasswordForm() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showReNew, setShowReNew] = useState(false);

  return (
    <form className="max-w-md w-full space-y-5">

      {/* Current Password */}
      <div className="flex flex-col gap-1">
        <label className="text-base font-medium text-gray-700">
          Current Password <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type={showCurrent ? "text" : "password"}
            required
            className="border border-gray-300 rounded-md px-3 py-4 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter current password"
          />
          <button
            type="button"
            onClick={() => setShowCurrent(!showCurrent)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showCurrent ? "👁️" : "👁️‍🗨️"}
          </button>
        </div>
      </div>

      {/* New Password */}
      <div className="flex flex-col gap-1">
        <label className="text-base font-medium text-gray-700">
          New Password <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type={showNew ? "text" : "password"}
            required
            className="border border-gray-300 rounded-md px-3 py-4 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter new password"
          />
          <button
            type="button"
            onClick={() => setShowNew(!showNew)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showNew ? "👁️" : "👁️‍🗨️"}
          </button>
        </div>
      </div>

      {/* Re-enter Password */}
      <div className="flex flex-col gap-1">
        <label className="text-base font-medium text-gray-700">
          Re-enter Password <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            type={showReNew ? "text" : "password"}
            required
            className="border border-gray-300 rounded-md px-3 py-4 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Re-enter new password"
          />
          <button
            type="button"
            onClick={() => setShowReNew(!showReNew)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showReNew ? "👁️" : "👁️‍🗨️"}
          </button>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full cursor-pointer bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
      >
        Change Password
      </button>
    </form>
  );
}
