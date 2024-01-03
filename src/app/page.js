import Clients from "@/components/Clients"
import Community from "@/components/Community"
import CommunityUpdates from "@/components/CommunityUpdates"
import Unlock from "@/components/Unlock"

export default function Home() {
  return (
    <main className="flex flex-col h-full  lg:max-w-screen-lg mx-auto">
      <Clients />
      <Community />
      <Unlock />
      <CommunityUpdates />
    </main>
  )
}
