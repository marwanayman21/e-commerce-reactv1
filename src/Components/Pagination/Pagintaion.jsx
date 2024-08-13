import React, { useState } from "react";

function Pagination({ handelApiCall, skip, setSkip }) {
    const [loading, setLoading] = useState(false);

    const handleClick = (newSkip) => {
      if (newSkip < 0 || newSkip > 13) return; // Adjust max skip value based on your needs
      setLoading(true);
      setSkip(newSkip, async () => {
        await handelApiCall(newSkip);
        setLoading(false);
      });
    };

    return (
      <div className="flex items-center justify-center space-x-2 pt-24 pb-10">
        <button
          className="px-4 py-2 btn-hover text-white rounded-lg disabled:bg-gray-300"
          onClick={() => handleClick(skip - 1)}
          disabled={skip === 0 || loading}
        >
          Previous
        </button>

        <div className="flex items-center space-x-1">
          <p>{skip + 1}</p>
          <p>|</p>
          <p>10</p> {/* Update based on the number of pages you have */}
        </div>

        <button
          className="px-4 py-2 btn-hover text-white rounded-lg  disabled:bg-gray-300"
          onClick={() => handleClick(skip + 1)}
          disabled={skip === 13 || loading} // Adjust max skip value based on your needs
        >
          Next
        </button>
      </div>
    );
}

export default Pagination;
