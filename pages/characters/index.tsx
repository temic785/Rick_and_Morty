import styles from "@/styles/Home.module.css"
import { useCharacters } from "@/assets/hooks/useCharacters"
import { CharacterCard } from "@/components/CharacterCard/CharacterCard"
import { HeadMeta } from "@/components/HeadMeta/HeadMeta"
import { getLayout } from "@/pages/Layout/Layout"
import Link from "next/link"

function Characters() {
  const characters = useCharacters()

  return (
    <>
      <HeadMeta title={"Characters"} />
      <div className={styles.grid}>
        {characters &&
          characters.map((character) => (
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
