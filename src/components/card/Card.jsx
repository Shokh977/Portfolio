import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Card({ item, key }) {
  return (
    <div className={styles.container} key={key}>
      {item.img && (
        <div className={styles.imgContainer}>
          <Image src={item.img} alt={item.title} layout="fill" className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <Link href={`/posts/${item.slug}`}>
          <h1 className={styles.title}>{item.title}</h1>
        </Link>
        <p className={styles.desc}>{item.desc.substring(0, 60) + "..."}</p>
        <div className={styles.detail}>
          <span className={styles.date}>{item.createdAt.substring(0, 10)}</span>
          <span className={styles.category}> {item.catSlug}</span>
          <Link className={styles.link} href={`/posts/${item.slug}`}>More</Link>
        </div>
      </div>
    </div>
  );
}
