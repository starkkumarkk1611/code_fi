import React, { useState, useEffect } from "react";

const OutputWindow = ({ outputDetails, testCase }) => {
     console.log(testCase);
     const [statusMsg, setStatusMsg] = useState();
     const [outputElement, setOutputElement] = useState();



     const getOutput = () => {
          let statusId = outputDetails?.status?.id;
          console.log(statusId);

          if (statusId === 6) {
               console.log("6");
               // compilation error
               setStatusMsg("Compilation Error");
               return (
                    <pre className="px-2 py-1 font-normal text-xs text-red-500">
                         {atob(outputDetails?.compile_output)}
                    </pre>
               );
          } else if (statusId === 3) {
               console.log("3");
               setStatusMsg("Accepted");
               return (
                    <pre className="px-2 py-1 font-normal text-xs text-green-500">
                         {atob(outputDetails.stdout) !== null
                              ? `${atob(outputDetails.stdout)}`
                              : null}
                    </pre>
               );
          } else if (statusId === 5) {
               setStatusMsg("Time Limit Exceeded");
               return (
                    <pre className="px-2 py-1 font-normal text-xs text-red-500">
                         {`Time Limit Exceeded`}
                    </pre>
               );
          } else if (statusId === 4) {
               setStatusMsg(outputDetails?.status?.description);
               return (
                    <pre className="px-2 py-1 font-normal text-xs text-red-500">
                         {atob(outputDetails.stdout) !== null
                              ? `${atob(outputDetails.stdout)}`
                              : null}
                    </pre>
               );
          } else {
               console.log("stdeer");
               setStatusMsg(outputDetails?.status?.description);
               return (
                    <pre className="px-2 py-1 font-normal text-xs text-red-500">
                         {atob(outputDetails?.stderr)}
                    </pre>
               );
          }
     };
     useEffect(() => {
          let element = getOutput();
          setOutputElement(element);
     }, [])
     return (
          <div style={{ maxHeight: "400px", overflowY: "scroll", padding: "0 1rem" }} >
               <h1 style={{ textAlign: "left" }}>{statusMsg}</h1>
               {statusMsg === "Wrong Answer" &&
                    < div >
                         <h4 style={{ textAlign: "left" }}>Expected Output</h4>
                         <pre style={{ display: "flex", textAlign: "left" }}> {testCase.expectedOutput}</pre>
                    </div>
               }
               <div style={{ textAlign: "left" }}>
                    {outputElement}
               </div>
          </div >
     );
};

export default OutputWindow;