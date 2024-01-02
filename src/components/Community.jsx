import React from "react"
import Card from "./Card"
import Image from "next/image"
import clubsAndGroups from "../../public/icons/clubs-and-groups.png"
import membershipOrg from "../../public/icons/membership-organizations.png"
import natAssociations from "../../public/icons/national-associations.png"

const Community = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold">
        Manage your entire community <br /> in a single system
      </h2>
      <p>Who is Nextcent suitable for?</p>
      <div className="flex flex-col justify-between items-center gap-4 mx-auto my-5 md:flex-row">
        <Card>
          <Image src={membershipOrg} width={65} height={56} />
          <h3 className="text-3xl font-bold">Membership Organizations</h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </Card>
        <Card>
          <Image src={natAssociations} width={65} height={56} />
          <h3 className="text-3xl font-bold">National Associations</h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </Card>
        <Card>
          <Image src={clubsAndGroups} width={65} height={56} />
          <h3 className="text-3xl font-bold">
            Clubs And <br /> Groups
          </h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </Card>
      </div>
    </div>
  )
}

export default Community
