import styles from "@/styles/Home.module.css"
import { HeadMeta } from "@/components/HeadMeta/HeadMeta"
import { EpisodeType, ResponseType } from "@/assets/api/rick-and-morty-api"
import { Card } from "@/components/Card/Card"
import { notFound } from "next/navigation"

const getEpisodes = async (): Promise<ResponseType<EpisodeType>> => {
  const res = await fetch(`https://rickandmortyapi.com/api/episode`, {
    next: { revalidate: 60 },
  })
  return await res.json()
}

export default async function Episodes() {
  const { results } = await getEpisodes()
  if (!results) {
    notFound()
  }
  return (
    <>
      <HeadMeta title={"Characters"} />
      <div className={styles.grid}>
        {results.map((episode) => (
          <Card key={episode.id} name={episode.name} />
        ))}
      </div>
    </>
  )
}
