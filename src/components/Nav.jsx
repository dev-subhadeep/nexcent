import React from "react"

import { menuList } from "@/lib/constants"
import Link from "next/link"

const Nav = () => {
  return (
    <nav>
      <ul className="md:flex flex-row gap-8 hidden">
        {menuList.map((menu) => (
          <li key={menu.path}>
            <Link href={menu.path}>{menu.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
