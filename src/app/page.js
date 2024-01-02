import Clients from "@/components/Clients"
import Community from "@/components/Community"

export default function Home() {
  return (
    <main className="flex flex-col">
      <Clients />
      <Community />
    </main>
  )
}
