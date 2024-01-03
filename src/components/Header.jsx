import React from "react"
import NavButtons from "./NavButtons"
import Nav from "./Nav"
import logo from "../../public/logo.png"
import Image from "next/image"

const Header = () => {
  return (
    <header className="flex flex-row justify-between py-4 px-10 items-center">
      <div id="logo">
        <Image src={logo} height={24} width={155} />
      </div>
      <Nav />
      <NavButtons />
    </header>
  )
}

export default Header
