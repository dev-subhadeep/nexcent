import React from "react"
import Button from "./Button"

const NavButtons = () => {
  return (
    <div className="flex flex-row gap-2">
      <Button>Login</Button>
      <Button>Sign up</Button>
    </div>
  )
}

export default NavButtons
