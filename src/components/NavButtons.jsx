import React from "react"
import Button from "./Button"

const NavButtons = () => {
  return (
    <div className="flex flex-row gap-4">
      <Button>Login</Button>
      <Button type="primary">Sign up</Button>
    </div>
  )
}

export default NavButtons
