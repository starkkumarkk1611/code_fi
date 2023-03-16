import React, { useEffect, useState } from "react";
import CodeEditorWindow from "./CodeEditorWindow";
import axios from "axios";
import { languageOptions } from "../../constants/languageOptions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { defineTheme } from "../../lib/defineTheme";
import useKeyPress from "../../hooks/useKeyPress";
import OutputWindow from "./OutputWindow";
import CustomInput from "./CustomInput";
import OutputDetails from "./OutputDetails";
import ThemeDropdown from "./ThemeDropdown";
import LanguagesDropdown from "./LanguagesDropdown";
import TestCases from "./TestCases";

const javascriptDefault = `// some comment`;

const Landing = () => {
     const [code, setCode] = useState(javascriptDefault);
     const [customInput, setCustomInput] = useState("");
     const [outputDetails, setOutputDetails] = useState(null);
     const [processing, setProcessing] = useState(null);
     const [theme, setTheme] = useState("cobalt");
     const [language, setLanguage] = useState(languageOptions[0]);
     const [customInputActive, setCustomInputActive] = useState(false);
     const [runTestCase, setRunTestCases] = useState(false);
     // from backend data
     const [opponentDetails, setOppenentsDetails] = useState({
          username: "stark",
          eoa: "0xab4545ca5445454cabd4fe5454545",
          nft: {
               id: "0x545454assfsfsfsfcscsasds",
               nft_url: "https://nft_imgage",
          }
     })
     const [question, setQuestion] = useState();
     const [testCases, setTestCases] = useState([{
          id: 0,
          input: "2\n5\n1 2 3 4 5\n5\n5 4 3 2 1n",
          expectedOutput: "1 2 3 4 5\n5 4 3 2 1",
          outputDetails: "",
          submissionsToken: "",
          processing: false,
     },
     {
          id: 1,
          input: "2\n5\n1 2 3 4 5\n5\n5 4 3 2 1",
          expectedOutput: "1 2 3 4 5\n5 4 3 2 1",
          outputDetails: "",
          submissionsToken: "",
          processing: false,
     },
     {
          id: 2,
          input: "2\n5\n1 2 3 4 5\n5\n5 4 3 2 1",
          expectedOutput: "1 2 3 4 5\n5 4 3 2 1",
          outputDetails: "",
          submissionsToken: "",
          processing: false,
     },
     {
          id: 2,
          input: "2\n5\n1 2 3 4 5\n5\n5 4 3 2 1",
          expectedOutput: "1 2 3 4 5\n5 4 3 2 1",
          outputDetails: "",
          submissionsToken: "",
          processing: false,
     },
     {
          id: 2,
          input: "2\n5\n1 2 3 4 5\n5\n5 4 3 2 1",
          expectedOutput: "1 2 3 4 5\n5 4 3 2 1",
          outputDetails: "",
          submissionsToken: "",
          processing: false,
     },
     {
          id: 2,
          input: "2\n5\n1 2 3 4 5\n5\n5 4 3 2 1",
          expectedOutput: "1 2 3 4 5\n5 4 3 2 1",
          outputDetails: "",
          submissionsToken: "",
          processing: false,
     },
     {
          id: 2,
          input: "2\n5\n1 2 3 4 5\n5\n5 4 3 2 1",
          expectedOutput: "1 2 3 4 5\n5 4 3 2 1",
          outputDetails: "",
          submissionsToken: "",
          processing: false,
     },
     {
          id: 2,
          input: "2\n5\n1 2 3 4 5\n5\n5 4 3 2 1",
          expectedOutput: "1 2 3 4 5\n5 4 3 2 1",
          outputDetails: "",
          submissionsToken: "",
          processing: false,
     },
     ]);

     // from backend data end
     const [currentTestCase, setCurrentTestCase] = useState(0);

     const enterPress = useKeyPress("Enter");
     const ctrlPress = useKeyPress("Control");

     const onSelectChange = (sl) => {
          console.log("selected Option...", sl);
          setLanguage(sl);
     };




     useEffect(() => {
          if (enterPress && ctrlPress) {
               console.log("enterPress", enterPress);
               console.log("ctrlPress", ctrlPress);
               handleCompileForCustomInput();
          }
     }, [ctrlPress, enterPress]);

     const onChange = (action, data) => {
          switch (action) {
               case "code": {
                    setCode(data);
                    break;
               }
               default: {
                    console.warn("case not handled!", action, data);
               }
          }
     };
     const checkStatusForTestCases = async () => {
          for (let x = 0; x < testCases.length; x++) {
               if (testCases[x].submissionsToken && testCases[x].processing) {
                    let token = testCases[x].submissionsToken;
                    const options = {
                         method: "GET",
                         url: process.env.REACT_APP_RAPID_API_URL + "/" + token,
                         params: { base64_encoded: "true", fields: "*" },
                         headers: {
                              "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
                              "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
                         },
                    };
                    try {
                         let response = await axios.request(options);
                         let statusId = response.data.status?.id;

                         // Processed - we have a result
                         if (statusId === 1 || statusId === 2) {
                              console.log("hello Recursion", x)
                              // still processing
                              setTimeout(() => {
                                   checkStatusForTestCases()
                              }, 2000)
                         } else {
                              setTestCases(prev => {
                                   let temp = [...prev];
                                   temp[x].processing = false;
                                   temp[x].outputDetails = response.data;
                                   return temp;
                              })
                              // setProcessing(false)
                              // setOutputDetails(response.data)
                              // showSuccessToast(`Compiled Successfully!`)
                              console.log('response.data', response.data)
                         }
                    } catch (err) {
                         console.log("err", err);
                         setProcessing(false);

                         showErrorToast();
                    }
               }

          }
     }

     useEffect(() => {
          console.log("runTestCase")
          if (runTestCase) {
               console.log("che")
               checkStatusForTestCases();
          }
     }, [runTestCase])

     useEffect(() => {
          console.log(testCases);
     }, [testCases])

     const handleCompileForTestCases = async (e) => {
          setTestCases(prev => {
               let temp = [...prev]
               for (let x = 0; x < temp.length; x++) {
                    temp[x].outputDetails = "";
                    temp[x].submissionsToken = ""
                    temp[x].processing = true;
               }
               return temp;
          })
          setProcessing(true);
          let formData = {
               submissions: []
          }
          testCases.forEach(({ expectedOutput, input }) => {
               formData.submissions.push({
                    language_id: language.id,
                    source_code: btoa(code),
                    stdin: btoa(input),
                    expected_output: btoa(expectedOutput)
               })
          })


          const options = {
               method: 'POST',
               url: `${process.env.REACT_APP_RAPID_API_URL}/batch`,
               params: { base64_encoded: 'true' },
               headers: {
                    'content-type': 'application/json',
                    'Content-Type': 'application/json',
                    "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
                    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
               },
               data: formData
          };
          try {


               let res = await axios.request(options);
               console.log(res.data);
               setTestCases(prev => {
                    let temp = [...prev];
                    res.data.forEach(({ token }, index) => {
                         temp[index].submissionsToken = token;
                    })
                    return temp;
               });
               console.log("Hello yaar")
               setRunTestCases(true);
          }
          catch (err) {
               let error = err.response ? err.response.data : err;
               setProcessing(false);
               console.log(error);
          }
     }
     //  for checking all test cases status passed Or not;
     useEffect(() => {
          if (processing) {
               const interval = setInterval(() => {
                    console.log("Checking")
                    let flag = true;
                    for (let testCase of testCases) {
                         if (!testCase.outputDetails) {
                              flag = false;
                         }
                    }
                    if (flag) {
                         console.log("all complete")
                         setProcessing(false);
                         setRunTestCases(false);
                    }
               }, 2000);
               return () => clearInterval(interval);
          }
     });

     const handleCompileForCustomInput = async (e) => {
          setProcessing(true);
          const formData = {
               language_id: language.id,
               // encode source code in base64
               source_code: btoa(code),
               stdin: btoa(customInput),
          };
          const options = {
               method: "POST",
               url: process.env.REACT_APP_RAPID_API_URL,
               params: { base64_encoded: "true", fields: "*" },
               headers: {
                    "content-type": "application/json",
                    "Content-Type": "application/json",
                    "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
                    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
               },
               data: formData,
          };

          axios
               .request(options)
               .then(function (response) {
                    console.log("res.data", response.data);
                    const token = response.data.token;
                    checkStatusForCustomInput(token);
               })
               .catch((err) => {
                    let error = err.response ? err.response.data : err;
                    setProcessing(false);
                    console.log(error);
               });
     };

     const checkStatusForCustomInput = async (token, index) => {
          const options = {
               method: "GET",
               url: process.env.REACT_APP_RAPID_API_URL + "/" + token,
               params: { base64_encoded: "true", fields: "*" },
               headers: {
                    "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
                    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
               },
          };
          try {
               let response = await axios.request(options);
               let statusId = response.data.status?.id;

               // Processed - we have a result
               if (statusId === 1 || statusId === 2) {
                    // still processing
                    setTimeout(() => {
                         checkStatusForCustomInput(token)
                    }, 2000)
                    return
               } else {
                    setProcessing(false)
                    setOutputDetails(response.data)
                    showSuccessToast(`Compiled Successfully!`)
                    console.log('response.data', response.data)
                    return
               }
          } catch (err) {
               console.log("err", err);
               setProcessing(false);
               showErrorToast();
          }
     };

     function handleThemeChange(th) {
          const theme = th;
          console.log("theme...", theme);

          if (["light", "vs-dark"].includes(theme.value)) {
               setTheme(theme);
          } else {
               defineTheme(theme.value).then((_) => setTheme(theme));
          }
     }
     useEffect(() => {
          defineTheme("sunburst").then((_) =>
               setTheme({ value: "sunburst", label: "Sunburst" })
          );
     }, []);

     const showSuccessToast = (msg) => {
          toast.success(msg || `Compiled Successfully!`, {
               position: "top-right",
               autoClose: 1000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
          });
     };
     const showErrorToast = (msg) => {
          toast.error(msg || `Something went wrong! Please try again.`, {
               position: "top-right",
               autoClose: 1000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
          });
     };

     const handleCustomInput = (e) => {
          setCustomInputActive(e.target.checked);
     }


     return (
          <div className="arena" style={{ display: "flex", width: "100%", }}>
               <div style={{ flex: 2, borderRight: "2px solid #1f1f1f" }}>
                    Question Panel
               </div>
               <div style={{ flex: 3, height: "90vh", overflowY: "scroll" }} >
                    <ToastContainer
                         position="top-right"
                         autoClose={2000}
                         hideProgressBar={false}
                         newestOnTop={false}
                         closeOnClick
                         rtl={false}
                         pauseOnFocusLoss
                         draggable
                         pauseOnHover
                    />
                    <div style={{ display: "flex", justifyContent: "flex-end", alignContent: "center" }}>
                         <div style={{ padding: "2px 4px" }}>
                              <LanguagesDropdown onSelectChange={onSelectChange} />
                         </div>
                         <div style={{ padding: "2px 4px" }}>
                              <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
                         </div>
                    </div>
                    <div style={{ height: "100%" }}>
                         <CodeEditorWindow
                              code={code}
                              onChange={onChange}
                              language={language?.value}
                              theme={theme.value}
                         />

                         <div style={{}}>
                              <div style={{ marginTop: "0.5rem", display: "flex", justifyContent: "space-between" }}>
                                   <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", width: "50%" }}>
                                        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginLeft: "1rem" }}>
                                             <input type="checkbox" id="customInput" name="customInput" onChange={handleCustomInput} style={{ margin: "1rem 0", marginRight: "0.5rem" }} />
                                             <label htmlFor="customInput">Run against custom inputs</label>
                                        </div>
                                        {customInputActive && <CustomInput
                                             customInput={customInput}
                                             setCustomInput={setCustomInput}
                                        />
                                        }
                                   </div>
                                   <div style={{ padding: "1rem" }}>
                                        <button style={{ backgroundColor: "#1f1f1f", color: "#fff", border: "none", padding: "0.5rem 1rem", fontWeight: "600", fontSize: "1.1rem", marginRight: "1rem" }}
                                             onClick={customInputActive ? handleCompileForCustomInput : handleCompileForTestCases}
                                             disabled={!code || processing}
                                        >  {processing ? "Processing..." : "Run Code"}</button>
                                        <button style={{ backgroundColor: "#eb0c1c", color: "#fff", border: "none", padding: "0.5rem 1rem", fontWeight: "600", fontSize: "1.1rem" }}>Submit</button>
                                   </div>
                              </div>

                              <div className="flex flex-col items-end">
                                   {customInputActive && outputDetails &&
                                        <div>
                                             <OutputDetails outputDetails={outputDetails} />
                                             <OutputWindow outputDetails={outputDetails} testCase={testCases[currentTestCase]} />
                                        </div>
                                   }
                              </div>
                              {
                                   !customInputActive && testCases[0].submissionsToken &&
                                   <div style={{ display: "flex", height: "fit-content" }}>
                                        <div style={{ flex: 2, height: "fit-content" }}>
                                             <TestCases currentTestCase={currentTestCase} setCurrentTestCase={setCurrentTestCase} testCases={testCases} />
                                        </div>
                                        <div style={{ flex: 3 }}>
                                             {testCases[currentTestCase].outputDetails && <OutputDetails outputDetails={testCases[currentTestCase].outputDetails} />}
                                             {testCases[currentTestCase].outputDetails && <OutputWindow outputDetails={testCases[currentTestCase].outputDetails} testCase={testCases[currentTestCase]} />}
                                        </div>
                                   </div>
                              }



                         </div>
                    </div>
                    {/* <Footer /> */}
               </div>
          </div>
     );
};
export default Landing;