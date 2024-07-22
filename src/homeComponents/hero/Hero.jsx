import styles from "./hero.module.css";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Hero = () => {
  const codeString = `const me = {
           name: 'Shokhrukh',
           whatIDo: 'web development',
           stack: {
                   JavaScript,
                   React,
                   NextJs,...
                  }
              };`;

  return (
    <div className={styles.container}>
      <div className={styles.heroLeft}>
        <div className={styles.shapes}>
          <Image
            src="/assets/hero/circle.svg"
            alt=""
            className={styles.circle}
            width={20}
            height={20}
          />
          <Image
            src="/assets/hero/boxshaped.svg"
            alt=""
            className={styles.box}
            width={20}
            height={20}
          />
        </div>
        <div className={styles.heroTitle}>
          <h1>
            I'm <span>쇼크룩</span>
          </h1>
          <h1 className={styles.frontend}>
            <span>Frontend</span> Developer
          </h1>
          <button>
            <a href="mailto:uphill7165@gmail.com">Contact</a>
          </button>
        </div>
      </div>
      <div className={styles.heroRight}>
        {/* <Image src='/assets/hero/snippet.png' width={463} height={314} alt="" className={styles.heroImg} /> */}
        <div className={styles.heroImg}>
          <div className={styles.head}>
            <div className={styles.circles}>
              <div className={styles.orange}></div>
              <div className={styles.yellow}></div>
              <div className={styles.green}></div>
            </div>
          </div>
          <SyntaxHighlighter
            language="javascript"
            style={solarizedlight}
            className={styles.customCode}>
            {codeString}
          </SyntaxHighlighter>
        </div>

        <div className={styles.socialIcons}>
          <Image
            src="/assets/hero/css.png"
            alt=""
            className={styles.github}
            width={50}
            height={50}
          />
          <Image
            src="/assets/hero/atom.png"
            alt=""
            className={styles.instagram}
            width={50}
            height={50}
          />
          <Image
            src="/assets/hero/figma.png"
            alt=""
            className={styles.youtube}
            width={50}
            height={50}
          />
          <Image
            src="/assets/hero/interface.png"
            alt=""
            className={styles.linkedIn}
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};
