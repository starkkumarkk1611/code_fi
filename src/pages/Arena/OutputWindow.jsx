import React from "react";

const OutputWindow = ({ outputDetails }) => {
     console.log(atob(outputDetails.stdout));
     const getOutput = () => {
          let statusId = outputDetails?.status?.id;
          console.log(statusId);

          if (statusId === 6) {
               console.log("6");
               // compilation error
               return (
                    <pre className="px-2 py-1 font-normal text-xs text-red-500">
                         {atob(outputDetails?.compile_output)}
                    </pre>
               );
          } else if (statusId === 3) {
               console.log("3");

               return (
                    <pre className="px-2 py-1 font-normal text-xs text-green-500">
                         {atob(outputDetails.stdout) !== null
                              ? `${atob(outputDetails.stdout)}`
                              : null}
                    </pre>
               );
          } else if (statusId === 5) {
               console.log("5");

               return (
                    <pre className="px-2 py-1 font-normal text-xs text-red-500">
                         {`Time Limit Exceeded`}
                    </pre>
               );
          } else {
               console.log("stdeer");

               return (
                    <pre className="px-2 py-1 font-normal text-xs text-red-500">
                         {atob(outputDetails?.stderr)}
                    </pre>
               );
          }
     };
     console.log(getOutput());
     return (
          <>
               <h1 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2">
                    Output
               </h1>
               <div className="w-full h-56 bg-[#1e293b] rounded-md text-white font-normal text-sm overflow-y-auto">
                    {getOutput()}
               </div>
          </>
     );
};

export default OutputWindow;