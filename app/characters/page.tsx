import styles from "@/styles/Home.module.css"
import { CharacterCard } from "@/components/Card/CharacterCard/CharacterCard"
import { HeadMeta } from "@/components/HeadMeta/HeadMeta"
import Link from "next/link"
import { CharacterType, ResponseType } from "@/assets/api/rick-and-morty-api"

const getCharacters = async (): Promise<ResponseType<CharacterType>> => {
  const res = await fetch(`https://rickandmortyapi.com/api/character`)
  return await res.json()
}

export default async function Characters() {
  const { results } = await getCharacters()
  return (
    <>
      <HeadMeta title={"Characters"} />
      <div className={styles.grid}>
        {results.map((character) => (
          <Link key={character.id} href={`/characters/${character.id}`}>
            <CharacterCard character={character} />
          </Link>
        ))}
      </div>
    </>
  )
}
