import React from "react"
import { clientList } from "@/lib/constants"
import Image from "next/image"
import logo1 from "../../public/client-logos/1.png"
import logo2 from "../../public/client-logos/2.png"
import logo3 from "../../public/client-logos/3.png"
import logo4 from "../../public/client-logos/4.png"
import logo5 from "../../public/client-logos/5.png"
import logo6 from "../../public/client-logos/6.png"
import logo7 from "../../public/client-logos/7.png"

const ClientLogos = () => {
  return (
    <div className="flex flex-row justify-evenly py-4">
      <Image src={logo1} alt="client 1" height={48} width={48} />
      <Image src={logo2} alt="client 2" height={48} width={48} />
      <Image src={logo7} alt="client 3" height={48} width={48} />
      <Image src={logo4} alt="client 4" height={48} width={48} />
      <Image src={logo5} alt="client 5" height={48} width={48} />
      <Image src={logo6} alt="client 6" height={48} width={48} />
      <Image src={logo7} alt="client 7" height={48} width={48} />
    </div>
  )
}

export default ClientLogos
