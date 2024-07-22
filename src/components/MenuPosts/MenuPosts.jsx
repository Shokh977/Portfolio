import Link from "next/link";
import Image from "next/image";
import styles from "./menuPosts.module.css";

export default function MenuPosts({ withImage }) {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src='/path-to-your-image.jpg' fill alt="Post image" className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}> &apos;title</span>
          <h3 className={styles.postTitle}>
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Joe Doe</span>
            <span className={styles.date}> - 10.03.2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
