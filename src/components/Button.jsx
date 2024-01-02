import React from "react"

const Button = ({ type, children }) => {
  return (
    <button
      className={
        type === "primary"
          ? "bg-primary text-white py-2 px-4 rounded"
          : "text-primary"
      }
    >
      {children}
    </button>
  )
}

export default Button
