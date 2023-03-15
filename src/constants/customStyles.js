

export const customStyles = {
     control: (styles) => ({
          ...styles,
          width: "100%",
          maxWidth: "14rem",
          minWidth: "12rem",
          borderRadius: "0",
          color: "red",
          fontSize: "0.8rem",
          lineHeight: "1.75rem",
          backgroundColor: "#1f1f1f",
          cursor: "pointer",
          border: "2px solid #000000",
          boxShadow: "5px 5px 0px 0px rgba(0,0,0);",
          ":hover": {
               border: "2px solid #000000",
               boxShadow: "none",
               backgroundColor: "#eb0c1c",
          },
     }),
     option: (styles) => {
          return {
               ...styles,
               color: "#fff",
               fontSize: "0.8rem",
               lineHeight: "1.75rem",
               width: "100%",
               background: "#1f1f1f",
               ":hover": {
                    backgroundColor: "#eb0c1c",
                    color: "#fff",
                    cursor: "pointer",
               },
          };
     },
     menu: (styles) => {
          return {
               ...styles,
               backgroundColor: "#1f1f1f",
               maxWidth: "14rem",
               border: "2px solid #000000",
               borderRadius: "5px",
               boxShadow: "5px 5px 0px 0px rgba(0,0,0);",
          };
     },

     placeholder: (defaultStyles) => {
          return {
               ...defaultStyles,
               color: "#000",
               fontSize: "0.8rem",
               lineHeight: "1.75rem",
          };
     },
     singleValue: (defaultStyles) => {
          return {
               ...defaultStyles,
               color: "#fff"
          }
     },

};
