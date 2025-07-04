import { CharacterCard } from "@/components/Card/CharacterCard/CharacterCard"
import { HeadMeta } from "@/components/HeadMeta/HeadMeta"
import { getLayout } from "@/components/Layout/Layout"
import styles from "./[id].module.scss"
import { API } from "@/assets/api/api"
import { CharacterType } from "@/assets/api/rick-and-morty-api"
import { GetStaticPaths, GetStaticProps } from "next"
import { router } from "next/client"

export const getStaticPaths: GetStaticPaths = async () => {
  const { results } = await API.rickAndMorty.getCharacters()
  const paths = results.map((character) => ({
    params: { id: String(character.id) },
  }))

  return {
    paths,
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params || {}
  try {
    const character = await API.rickAndMorty.getCharacter(id as string)
    return {
      props: {
        character,
      },
    }
  } catch (error: any) {
    if (error.response?.status === 404) {
      return {
        notFound: true,
      }
    }
    throw error
  }
}
type PropsType = {
  character: CharacterType
}

function Character(props: PropsType) {
  const { character } = props
  const goToCharacters = () => router.push(`/characters`)
  return (
    <>
      <HeadMeta title={"Character"} />
      <div className={styles.container}>
        {character && <CharacterCard character={character} />}
        <button onClick={goToCharacters} className={styles.goToBack}>
          GO TO BACK
        </button>
      </div>
    </>
  )
}

Character.getLayout = getLayout
export default Character
