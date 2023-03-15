import React from "react";
import { classnames } from "../../utils/general";

const CustomInput = ({ customInput, setCustomInput }) => {
     return (
          <>
               {" "}
               <textarea
                    rows="5"
                    value={customInput}
                    onChange={(e) =>
                         setCustomInput(e.target.value)
                    }
                    placeholder={`Custom input`}

                    style={{
                         outline: "none",
                         border: "none",
                         marginLeft: "1rem",
                         color: "white",
                         background: "#1f1f1f",
                         padding: "0.5rem",
                         fontSize: "1.2rem"
                    }}
               ></textarea>
          </>
     );
};

export default CustomInput;