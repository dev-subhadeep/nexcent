import Clients from "@/components/Clients"
import Community from "@/components/Community"
import Unlock from "@/components/Unlock"

export default function Home() {
  return (
    <main className="flex flex-col  lg:max-w-screen-lg mx-auto">
      <Clients />
      <Community />
      <Unlock />
    </main>
  )
}
