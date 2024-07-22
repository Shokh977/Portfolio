import Link from 'next/link';
import styles from "./menuCategories.module.css"


export default function MenuCategories() {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}>
        Style
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.english}`}>
        english
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.js}`}>
        JavaScript
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.react}`}>
        React
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.travel}`}>
        Travel
      </Link>
    </div>
  );
}
