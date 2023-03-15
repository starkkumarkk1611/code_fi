import React from "react";

const OutputDetails = ({ outputDetails }) => {
     console.log(outputDetails);
     return (
          <div style={{ display: "flex", gap: "2rem", marginLeft: "1rem" }}>
               <p className="text-sm">
                    Status:{" "}
                    <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
                         {outputDetails?.status?.description}
                    </span>
               </p>
               <p className="text-sm">
                    Memory:{" "}
                    <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
                         {outputDetails?.memory}
                    </span>
               </p>
               <p className="text-sm">
                    Time:{" "}
                    <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
                         {outputDetails?.time}
                    </span>
               </p>
          </div>
     );
};

export default OutputDetails;