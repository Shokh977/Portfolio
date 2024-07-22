import Image from 'next/image';
import styles from './about.module.css';
import Link from 'next/link';
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { FaReact,FaHtml5,FaFigma   } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiPrisma,SiRedux ,SiTypescript } from "react-icons/si";


export const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutMe}>
        <h1>
          <Image src='/assets/hero/boxshaped.svg' alt="" className={styles.box} width={20} height={20}/>
          About <span>me</span>
        </h1>
        <p>
        </p>
      </div>
      <div className={styles.imgTxt}>
        <Image src='/assets/profile.jpg' width={147} height={151} alt="" className={styles.profileImage}/>
        <div className={styles.txt}>
          <div className={styles.aboutParagraph}>
            <p>
              안녕하세요. 쇼크룩입니다. 다른 사람에게 망설임 없이 추천할 수 있고
              일상생활에 자연스럽게 녹아드는 제품을 개발하는 것이 저의
              목표입니다.좋은 제품을 만들기 위해 사용자의 상황에 몰입하고,
              최선의 방향을 고민하며, 적극적으로 소통합니다. 나는 변화에
              유연하게 적응하고 새로운 도전을 즐깁니다
            </p>
            <button>
            <Link href="/assets/myResume.pdf" passHref target="_blank" rel="noopener noreferrer">
        Download CV
      </Link>
            </button>
            <div className={styles.stack}>
              <ul className={styles.stackList}>
                <li><RiJavascriptFill size={28}/><h2>JavaScript</h2></li>
                <li><SiTypescript /><h2>TypeScript</h2></li>
                <li><FaHtml5 /><h2>HTML/CSS</h2></li>
                <li><FaReact/><h2>ReactJS</h2></li>
                <li><RiNextjsFill/><h2>NextJS</h2></li>
                <li><BiLogoMongodb/><h2>Mongodb</h2></li>
                <li><SiPrisma/><h2>Prisma</h2></li>
                <li><FaFigma /><h2>Figma</h2></li>
                <li><SiRedux /><h2>Redux</h2></li>

              </ul>
            </div>
            <Image src ='/assets/hero/circle.svg' alt="" className={styles.aboutCircle} width={20} height={20}/>

          </div>
        </div>
      </div>
    </div>
  );
};
