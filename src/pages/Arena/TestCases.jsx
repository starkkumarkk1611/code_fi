import React from 'react';
import SpinLoader from '../../components/loader/SpinLoader';

const TestCases = ({ setCurrentTestCase, currentTestCase, testCases }) => {

     return (
          <div style={{ maxHeight: "400px", overflowY: "scroll" }} >
               {

                    testCases.map(({ processing }, index) => (
                         <div style={index === currentTestCase ? { background: "#eb0c1c", display: "flex", alignItems: "center", justifyContent: "flex-start", padding: "1rem", border: "2px solid #1f1f1f", borderLeft: "0", borderTop: "0" } : {
                              display: "flex", alignItems: "center", justifyContent: "flex-start", padding: "1rem", border: "2px solid #1f1f1f", borderLeft: "0", borderTop: "0"
                         }}
                              onClick={() => setCurrentTestCase(index)}
                              key={index}>
                              {processing ? <SpinLoader style={{ height: "20px", width: "20px" }} /> : "Done"}
                              <div style={{ marginLeft: "1rem" }}> Test Case {index}</div>
                         </div>
                    ))
               }


          </div >
     )
}

export default TestCases