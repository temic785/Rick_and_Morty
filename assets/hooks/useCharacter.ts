import { useEffect, useState } from "react"
import axios from "axios"
import { Nullabel } from "@/assets/types"
import { CharacterType } from "@/assets/hooks/useCharacters"
import { useRouter } from "next/router"

export const useCharacter = (): Nullabel<CharacterType> => {
  const [character, setCharacter] = useState<Nullabel<CharacterType>>(null)

  const router = useRouter()

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/character/${router.query.id}`)
      .then((res) => setCharacter(res.data))
  }, [])
  return character
}
