import Image from "next/image"
import { CharacterType } from "@/assets/hooks/useCharacters"
import styles from "./CharacterCard.module.scss"

type PropsType = {
  character: CharacterType
}

export const CharacterCard = ({ character }: PropsType) => {
  return (
    <div className={styles.card}>
      <div>{character.name}</div>
      <Image src={character.image} alt={`Picture of ${character.name}`} height={300} width={300} />
    </div>
  )
}
