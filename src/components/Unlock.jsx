import React from "react"
import Button from "./Button"
import rafiki from "../../public/rafiki.png"
import Image from "next/image"

const Unlock = () => {
  return (
    <div className="lg:grid lg:grid-cols-5 py-4 px-6 items-center flex flex-col">
      <div className="col-span-2">
        <Image src={rafiki} width={441.53} height={310.87} />
      </div>
      <div className="flex flex-col gap-3 justify-start items-start col-span-3">
        <h2 className="text-4xl font-bold">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <Button type="primary">Learn More</Button>
      </div>
    </div>
  )
}

export default Unlock
