import React from "react"

const Card = ({ children }) => {
  return (
    <div className="w-72 flex flex-col justify-center items-center">
      {children}
    </div>
  )
}

export default Card
