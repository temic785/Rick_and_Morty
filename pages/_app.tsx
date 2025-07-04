import "@/styles/globals.css"
import { ReactElement, ReactNode, useState } from "react"
import type { NextPage } from "next"
import type { AppProps } from "next/app"
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "../styles/nprogress.css"
import { useLoader } from "@/assets/hooks/useLoader"

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient())
  useLoader()
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}
