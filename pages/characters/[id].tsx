import { CharacterCard } from "@/components/CharacterCard/CharacterCard"
import { HeadMeta } from "@/components/HeadMeta/HeadMeta"
import { getLayout } from "@/pages/Layout/Layout"
import { useCharacter } from "@/assets/hooks/useCharacter"
import styles from "./[id].module.scss"
function Character() {
  const character = useCharacter()

  return (
    <>
      <HeadMeta title={"Character"} />
      <div className={styles.container}>{character && <CharacterCard character={character} />}</div>
    </>
  )
}

Character.getLayout = getLayout
export default Character
