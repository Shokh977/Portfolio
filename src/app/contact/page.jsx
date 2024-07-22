'use client'
import  styles  from "./contact.module.css";
import { IoIosLink } from "react-icons/io";
import { BiLogoTelegram } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";
import Contact from '../../../public/assets/contact.svg'
import ContactForm from "UI/contactForm";



const ContactPage = () => {

  return  <div className={styles.box}>
        <div className={styles.bgIcons}>
        <IoIosLink className={`${styles.icon} ${styles.link}`} style={{ transform: 'rotate(-100deg)' }} size={512} />
        <BiLogoTelegram className={`${styles.icon} ${styles.telegram}`} size={512} />
        <FaInstagram className={`${styles.icon} ${styles.instagram}`} style={{ transform: 'rotate(-40deg)' }} size={400} />   
        </div>
        <div className={styles.contactLogo} style={{ width: '100%', maxWidth: '552px', height: '326px' }}>
            <Contact className={styles.contactIcon}/>
        </div>
        <div className={styles.form}>
          <ContactForm/>
        </div>
    </div>
};
export default ContactPage;
