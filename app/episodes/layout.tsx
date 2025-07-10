import { Metadata, NextPage } from "next"
import { PropsWithChildren } from "react"
import { BaseLayout } from "@/components/BaseLayout/BaseLayout"

export const metadata: Metadata = {
  title: "Episodes",
  description: "New NextJS",
}

const Layout: NextPage<PropsWithChildren> = ({ children }) => {
  return <BaseLayout>{children}</BaseLayout>
}
export default Layout
