
const BasicPlanModal = ({ onClose }: {onClose: ()=> void}) => {

  const installments = [
    { id: 1, paid: "$10", status: "Paid" },
    { id: 2, paid: "$10", status: "Paid" },
    { id: 3, paid: "$0", status: "Due" },
    { id: 4, paid: "$0", status: "Due" },
    { id: 5, paid: "$0", status: "Due" },
    { id: 6, paid: "$0", status: "Due" },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-4">
      <div className="bg-white rounded-xl shadow-xl relative 
                       max-w-lg sm:max-w-xl md:max-w-2xl 
                      max-h-[90vh] overflow-y-auto p-6 sm:p-10">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer text-3xl sm:text-4xl top-3 right-4 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl mt-6 font-semibold text-gray-900">
          Basic Plan
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-500 mt-2 mb-6 text-lg sm:text-xl md:text-2xl">
          Monthly Subscription
        </p>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm md:text-base text-left text-gray-700">
            <thead>
              <tr className="border-b  border-gray-200 text-gray-500">
                <th className="py-3 px-2">Date</th>
                <th className="py-3 px-2">Amount</th>
                <th className="py-3 px-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {installments.map((item) => (
                <tr key={item.id} className="border-b border-gray-100">
                  <td className="py-3 px-3">{item.id}</td>
                  <td className="py-3 px-3">{item.paid}</td>
                  <td
                    className={`py-2 px-3 font-medium ${
                      item.status === "Paid" ? "text-green-500" : "text-gray-500"
                    }`}
                  >
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Button */}
        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg text-base sm:text-lg"
          >
            Okay, Got it
          </button>
        </div>
      </div>
    </div>
  );
};


export default BasicPlanModal