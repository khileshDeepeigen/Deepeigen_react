import { X } from "lucide-react";

const PostModal = ({ onClose }: { onClose: () => void }) => {
    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center z-50 px-4">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 relative">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Week 3 - Discussion
                    </h2>

                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <X size={22} />
                    </button>
                </div>

                {/* Title Input */}
                <label className="text-sm font-medium text-gray-700">
                    Title for the post<span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    placeholder="Give a post title"
                    className="w-full mt-1 mb-4 px-4 py-2 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 focus:ring outline-none"
                />

                {/* Description Input */}
                <label className="text-sm font-medium text-gray-700">
                    Description<span className="text-red-500">*</span>
                </label>
                <textarea
                    placeholder="Write more details for the post"
                    rows={4}
                    className="w-full mt-1 mb-6 px-4 py-2 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 focus:ring outline-none"
                />

                {/* Submit Button */}
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition">
                    Post in forum
                </button>
            </div>
        </div>
    );
};

export default PostModal;
