import styles from "@/styles/Home.module.css"
import { HeadMeta } from "@/components/HeadMeta/HeadMeta"
import { LocationType, ResponseType } from "@/assets/api/rick-and-morty-api"
import { Card } from "@/components/Card/Card"
import { notFound } from "next/navigation"

const getLocations = async (): Promise<ResponseType<LocationType>> => {
  const res = await fetch(`https://rickandmortyapi.com/api/location`, {
    next: { revalidate: 60 },
  })
  return await res.json()
}

export default async function Locations() {
  const { results } = await getLocations()

  if (!results) {
    notFound()
  }
  return (
    <>
      <HeadMeta title={"Characters"} />
      <div className={styles.grid}>
        {results.map((location) => (
          <Card name={location.name} key={location.id} />
        ))}
      </div>
    </>
  )
}
