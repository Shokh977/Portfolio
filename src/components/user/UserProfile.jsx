"use client";
import { useState, useRef, useEffect } from 'react';
import styles from "./userProfile.module.css";
import Image from "next/image";
import { useSession, getSession } from "next-auth/react";
import { FaRegUser } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";

export const UserProfile = ({ signOut, session }) => {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  function cutIf (str, num){
    if(str.length > num ) {
      return str.substring(0,num) + '...'
    }else{
      return str
    }
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className={styles.userDropdown} ref={dropdownRef}>
    <button onClick={toggleDropdown} className={styles.userIcon}>
     <Image  src={session?.user?.image} className={styles.userImg} alt='user image' width={50} height={50}/>
    </button>
    {isOpen && (
      <div className={`${styles.dropdownMenu} ${isOpen ? styles.open : ''}`}>
        <ul>
          <li><p>{cutIf(session?.user?.name, 10)}</p></li>
          <li > <p className={styles.destructive} onClick={() => signOut()} href="/" >Sign Out</p></li>
        </ul>
      </div>
    )}
  </div>

    // </div>


  )
};
