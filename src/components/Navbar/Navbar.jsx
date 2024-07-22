import Link from "next/link";
import styles from "./navbar.module.css";
import { Auth } from "../Auth/Auth";
import { ThemeToggle } from "../ThemeToggle";
import { getServerSession } from "next-auth";
import authOptions from "../../utilities/auth";


export const Navbar = async() => {
  const session = await getServerSession(authOptions)


  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h1>
         <Link href='/'> Uphill<span>.</span></Link>
        </h1>
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href='/' className={styles.link}>Home</Link>
        <Link href='/blog' className={styles.link}>Blog</Link>
        <Link href='/contact' className={styles.link}>Contact</Link>
      </div>       
       <Auth ses = {session}/>
    </div>
  );
};
