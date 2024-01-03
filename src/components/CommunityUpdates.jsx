import React from "react"
import blog1image from "../../public/blogs/OneRen.png"
import CardWithImgBg from "./CardWithImgBg"
import Link from "next/link"

const CommunityUpdates = () => {
  return (
    <div className="text-center">
      <h2>Caring is the new marketing</h2>
      <p>
        The Nexcent blog is the best place to read about the latest membership
        insights, trends and more. See who&apos;s joining the community, read
        about how our community are increasing their membership income and
        lot&apos;s more.​
      </p>
      <div>
        <article>
          <CardWithImgBg image={blog1image}>
            <p>Creating Streamlined Safeguarding Processes with OneRen</p>
            <Link href="#" className="text-primary">
              Readmore ➡
            </Link>
          </CardWithImgBg>
        </article>
      </div>
    </div>
  )
}

export default CommunityUpdates
