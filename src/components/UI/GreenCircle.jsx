import React from 'react'

const GreenCircle = ({children}) => {
  return (
    <div 
        style={{width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "#1db954", justifyContent: "center", alignItems: "center", display: "flex"}}
    >
        {children}
    </div>
  )
}

export default GreenCircle