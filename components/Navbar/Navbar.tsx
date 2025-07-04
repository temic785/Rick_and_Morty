import Link from "next/link"
import styles from "./Navbar.module.scss"
export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href={"/"}>Main</Link>
      <Link href={"/characters"}>Characters</Link>
      <Link href={"/episodes"}>Episode</Link>
      <Link href={"/locations"}>Locations</Link>
    </div>
  )
}
