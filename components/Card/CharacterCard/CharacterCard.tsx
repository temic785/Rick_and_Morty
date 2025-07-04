import Image from "next/image"
import styles from "./CharacterCard.module.scss"
import { CharacterType } from "@/assets/api/rick-and-morty-api"

type PropsType = {
  character: CharacterType
}

export const CharacterCard = ({ character }: PropsType) => {
  return (
    <div className={styles.card}>
      <div>{character.name}</div>
      <Image src={character.image} alt={`Picture of ${character.name}`} height={300} width={300} />
      <div className={styles.info}>
        {/* prettier-ignore */}
        <p><strong>Status:</strong> {character.status}</p>
        {/* prettier-ignore */}
        <p><strong>Location:</strong> {character.location.name}</p>
        {/* prettier-ignore */}
        <p><strong>Species:</strong> {character.species}</p>
      </div>
    </div>
  )
}
