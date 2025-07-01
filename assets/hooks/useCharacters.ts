import { useEffect, useState } from "react"
import axios from "axios"
import { Nullabel } from "@/assets/types"

export const useCharacters = (): Nullabel<CharacterType[]> => {
  const [characters, setCharacters] = useState<Nullabel<CharacterType[]>>(null)
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/character`)
      .then((res) => setCharacters(res.data.results))
  }, [])
  return characters
}
export type CharacterType = {
  id: number
  name: string
  image: string
}
