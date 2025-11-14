const CancelModal = ({ onClose }: {onClose: ()=> void}) => {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 sm:p-8 relative animate-fadeIn">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-lg text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          ✕
        </button>

        {/* Warning Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-[#FFF4E5] p-4 rounded-full">
            <span className="text-4xl">⚠️</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-gray-900">
          Cancel Subscription?
        </h2>

        {/* Sub-title */}
        <p className="text-center text-gray-600 mt-2 text-base">
          <span className="font-medium">Basic Plan</span>{" "}
          <span className="text-indigo-600 font-semibold">$15/Month</span>
        </p>

        {/* Description */}
        <p className="text-center text-gray-500 mt-4 text-sm leading-relaxed px-2">
          Are you sure you want to cancel this subscription? You will lose access
          to all courses and resources provided in this plan.
        </p>

        {/* Buttons */}
        <div className="flex justify-center mt-8 gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2 cursor-pointer rounded-md font-medium border border-purple-600 text-purple-700 hover:bg-purple-50 flex items-center gap-2"
          >
            ← Go Back
          </button>

          <button className="px-5 py-2 cursor-pointer rounded-md font-medium border border-red-500 text-red-600 hover:bg-red-50">
            Cancel Subscription
          </button>
        </div>

        {/* Refund Policy Link */}
        <p className="text-center text-gray-500 text-xs mt-6">
          To check the eligibility of refund, please refer our{" "}
          <a href="#" className="text-blue-600 underline">
            Refund Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default CancelModal;
