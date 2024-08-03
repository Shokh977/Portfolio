"use client";
import { useState } from "react";
import styles from "./auth.module.css";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { UserProfile } from "../user/UserProfile";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import { MdPostAdd } from "react-icons/md";

export const Auth = ({ses}) => {
  const [open, setOpen] = useState(false);
  const { status, data:session} = useSession();
  
  const handleLinkClick =()=>{
    setOpen(false)
  }

  const isAdmin = session?.user?.role === 'ADMIN'
   return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>Login</Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}><MdPostAdd size={32}/></Link>
         {isAdmin && <Link href="/admin" className={styles.link}>Admin</Link>}
         <div className={styles.link}><UserProfile signOut={signOut} session = {ses}  /></div> 
        </>
      )}

      
      <div className={styles.userNav}>
         {status === "unauthenticated" &&  
            <div className={styles.addNuser}>
          <Link href="/write" className={styles.link}><MdPostAdd size={32}/></Link>
          <UserProfile signOut={signOut} session = {ses} className={styles.user}/>
            </div>
          }  
        <div
        className={styles.hamburger}
        onClick={() => setOpen((prev) => !prev)}
      >
      
      {!open? <GiHamburgerMenu size={30}/> : <IoClose size={30}/>}

      </div>
      </div>
      
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/" onClick={handleLinkClick}>Home</Link>
          <Link href="/blog" onClick={handleLinkClick}>Blog</Link>
          <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
        </div>
      )}
    </>
  );
};
