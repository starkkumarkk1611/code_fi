import React from 'react'

const SpinLoader = ({ style }) => {
     let customStyle = {
          ...style
     }
     return (
          <div className="spinner-container"  >
               <div className="loading-spinner" style={customStyle} ></div>
          </div>
     )
}

export default SpinLoader