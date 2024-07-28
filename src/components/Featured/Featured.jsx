import styles from "./featured.module.css";
import Image from "next/image";
import Link from 'next/link'

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/posts`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
export const Featured = async () => {
  const  {posts}  = await getData();
  
  console.log(posts, 'posts ffrom featured')
const sort = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
const lastest = sort[0]

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Hey,</b> update your skills with us
      </h1>
      {lastest && (
        <div className={styles.post}>
          <div className={styles.imgContainer}>
            {lastest.img ?
             (
              <Image src={lastest.img} alt={posts.title} layout="fill" className={styles.image} />
            )
            :
            (
              <Image src='/assets/favicon.png' alt={posts.title} layout="fill" className={styles.image} />
            )
            }
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.postTitle}>{lastest.title}</h1>
            <p className={styles.postDesc}>{lastest.desc.substring(0,100)}</p>
            <Link className={styles.button} href={`/posts/${lastest.slug}`}>More</Link>
            </div>
        </div>
      )}
    </div>
  );
};
