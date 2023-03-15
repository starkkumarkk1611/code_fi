import React from 'react'

const TestCases = ({ setCurrentTestCase, currentTestCase, testCases }) => {

     return (
          <div>
               <h1>TestCases</h1>
               <div>
                    {
                         testCases.map(({ processing }, index) => (
                              <div style={index == currentTestCase ? { border: "2px solid green" } : { border: "2px solid red" }} onClick={() => setCurrentTestCase(index)} key={index}>{processing ? "Running" : "Done"} Test Case {index} </div>
                         ))
                    }
               </div>

          </div>
     )
}

export default TestCases