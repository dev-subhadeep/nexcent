import React from "react"
import Image from "next/image"

const CardWithImgBg = ({ image, children }) => {
  return (
    <div className=" flex flex-col max-w-72 justify-center">
      <div className="overflow-hidden">
        <Image
          src={image}
          height={286}
          width={368}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="bg-white -my-24 mx-auto w-11/12 rounded-xl p-4 shadow-xl">
        {children}
      </div>
    </div>
  )
}

export default CardWithImgBg
