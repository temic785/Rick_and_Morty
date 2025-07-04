import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"
import { Nullable } from "@/assets/types/Nullable"
import { CharacterType } from "@/assets/api/rick-and-morty-api"

export const useCharacter = (): Nullable<CharacterType> => {
  const [character, setCharacter] = useState<Nullable<CharacterType>>(null)

  const router = useRouter()

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL}/character/${router.query.id}`)
      .then((res) => setCharacter(res.data))
  }, [])
  return character
}
