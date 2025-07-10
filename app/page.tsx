import { Metadata } from "next"
import { Navbar } from "@/components/Navbar/Navbar"

export const metadata: Metadata = {
  title: "Main",
  description: "New NextJS",
}
export default function Home() {
  return (
    <>
      <Navbar />
    </>
  )
}
