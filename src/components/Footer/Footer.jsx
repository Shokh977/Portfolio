import styles from "./footer.module.css";
import Image from 'next/image';
import {
  FaGithubSquare,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
//
import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

export const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.footerCon}>
          <div className={styles.content}>
            <div className={styles.brand}>
              <div className={styles.logoBrand}> 
              <Image src='/assets/logo.png' width={45} height={30} className={styles.logo}/>
              <h1>phill<span>.</span></h1></div>
             
              <p className={styles.brandDesc}>
              Explore the world of coding with me! This site serves as a platform for sharing knowledge, tutorials, and insights on all things coding. Join the community, share your thoughts, and stay updated with the latest tutorials and posts. Let's learn and grow together!
              </p>
            </div>
              <div className={styles.contactInfo}>      <div className={styles.socialMedia}>
            <a href="https://www.linkedin.com/in/abdulazizov-shokhrukh-b7a6b2225">
              <FaLinkedin size={20} className={styles.linked}/>
            </a>
            <a href="https://www.youtube.com/@shokh_tv">
              <FaYoutube size={20} className={styles.youtube}/>
            </a>
            <a href="https://instagram.com/shokhtv07?igshid=MzNlNGNkZWQ4Mg==">
              <FaInstagram size={20} className={styles.instagram}/>
            </a>
            <a
              href="https://github.com/Shokh977"
              className={styles.home__socialLink}
              target="_blank">
              {" "}
              <FaGithubSquare size={20} className={styles.github}/>{" "}
            </a>
          </div>
                  
          <div className={styles.contact}>
            <p>
              <IoCallOutline size={20} />
              010-5726-1777
            </p>
            <p>
              <CgMail size={20} />
              uphill7165@gmail.com
            </p>
            <p>
              <CiLocationOn size={20} />
              South Korea
            </p>
          </div>
          
          
          </div>
 
          </div>
       
       
        </div>
        <div className={styles.line}></div>
        <div className={styles.copy}>
          <p>Copyright 2024 | All rights Reserved</p>
        </div>
    </div>
  );
};
