import React from "react"

const Card = ({ children }) => {
  return (
    <div className="w-72 flex flex-col justify-center items-center shadow-md p-6 rounded-lg gap-4">
      {children}
    </div>
  )
}

export default Card
