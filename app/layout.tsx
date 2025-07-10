import { ReactNode } from "react"
import { Metadata } from "next"
import "@/app/globals.css"
export const metadata: Metadata = {
  title: "Main",
  description: "New NextJS",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
