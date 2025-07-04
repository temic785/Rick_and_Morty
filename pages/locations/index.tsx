import styles from "@/styles/Home.module.css"
import { HeadMeta } from "@/components/HeadMeta/HeadMeta"
import { getLayout } from "@/components/Layout/Layout"
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query"
import { CharacterType, LocationType, ResponseType } from "@/assets/api/rick-and-morty-api"
import { API } from "@/assets/api/api"
import { Card } from "@/components/Card/Card"

const getLocations = () => {
  return fetch("https://rickandmortyapi.com/api/location", { method: "GET" }).then((res) =>
    res.json()
  )
}

export const getStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.fetchQuery(["locations"], getLocations)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
type PropsType = {
  characters: ResponseType<CharacterType>
}

function Locations() {
  const { data: locations } = useQuery<ResponseType<LocationType>>(["locations"], getLocations)

  if (!locations) return null

  return (
    <>
      <HeadMeta title={"Characters"} />
      <div className={styles.grid}>
        {locations.results.map((location) => (
          <Card name={location.name} key={location.id} />
        ))}
      </div>
    </>
  )
}

Locations.getLayout = getLayout
export default Locations
