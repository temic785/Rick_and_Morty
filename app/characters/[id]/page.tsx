import { CharacterCard } from "@/components/Card/CharacterCard/CharacterCard"
import { HeadMeta } from "@/components/HeadMeta/HeadMeta"
import styles from "./[id].module.scss"
import { API } from "@/assets/api/api"
import Link from "next/link"
import { notFound } from "next/navigation"

type Props = {
  params: { id: string }
}

export async function generateStaticParams() {
  const { results } = await API.rickAndMorty.getCharacters()
  return results.map((character) => ({
    id: String(character.id),
  }))
}

export default async function Character({ params }: Props) {
  try {
    const character = await API.rickAndMorty.getCharacter(params.id)

    return (
      <>
        <HeadMeta title={character.name} />
        <div className={styles.container}>
          <CharacterCard character={character} />
          <Link href="/characters" className={styles.goToBack}>
            GO TO BACK
          </Link>
        </div>
      </>
    )
  } catch {
    notFound()
  }
}
