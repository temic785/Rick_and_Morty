import styles from "@/styles/Home.module.css"
import { HeadMeta } from "@/components/HeadMeta/HeadMeta"
import { getLayout } from "@/components/Layout/Layout"
import { API } from "@/assets/api/api"
import { EpisodeType, ResponseType } from "@/assets/api/rick-and-morty-api"
import { Card } from "@/components/Card/Card"

export const getServerSideProps = async () => {
  const episodes = await API.rickAndMorty.getEpisodes()
  if (!episodes) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      episodes,
    },
  }
}
type PropsType = {
  episodes: ResponseType<EpisodeType>
}

function Episodes(props: PropsType) {
  const { episodes } = props

  return (
    <>
      <HeadMeta title={"Characters"} />
      <div className={styles.grid}>
        {episodes.results.map((episode) => (
          <Card name={episode.name} key={episode.id} />
        ))}
      </div>
    </>
  )
}

Episodes.getLayout = getLayout
export default Episodes
