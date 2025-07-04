import styles from "@/styles/Home.module.css"
import { CharacterCard } from "@/components/Card/CharacterCard/CharacterCard"
import { HeadMeta } from "@/components/HeadMeta/HeadMeta"
import { getLayout } from "@/components/Layout/Layout"
import Link from "next/link"
import { API } from "@/assets/api/api"
import { CharacterType, ResponseType } from "@/assets/api/rick-and-morty-api"

export const getStaticProps = async () => {
  const characters = await API.rickAndMorty.getCharacters()
  return {
    props: {
      characters,
    },
  }
}
type PropsType = {
  characters: ResponseType<CharacterType>
}

function Characters(props: PropsType) {
  const { characters } = props

  return (
    <>
      <HeadMeta title={"Characters"} />
      <div className={styles.grid}>
        {characters.results.map((character) => (
          <Link key={character.id} href={`/characters/${character.id}`}>
            <CharacterCard character={character} />
          </Link>
        ))}
      </div>
    </>
  )
}

Characters.getLayout = getLayout
export default Characters
