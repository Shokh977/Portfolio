import styles from "./posthome.module.css";
import Image from "next/image";
import { CgMoreO } from "react-icons/cg";
import Link from "next/link"



const getData = async () => {
  const res = await fetch(
    'http://localhost:3000/api/posts'
  );

  if (!res.ok) {
    throw new Error("Failed");
  }
  const posts = res.json();
  return posts;
};
export const PostHome = async () => {
  const {posts} = await getData([])
 
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          Last<span> Posts</span>
        </h1>
        <p>
          Explore the latest posts and blogs about coding and much more here.
        </p>
      </div>
      <div className={styles.posts}>
        {posts && posts.slice(0,3).map(card => (
          <ul  key={card.id}>
              <li className={styles.card}>
              <Link className={styles.button} href={`/posts/${posts.slug}`}>
               <div>
              {card.img && (
        <div className={styles.imgContainer}>
          <Image src={card.img} alt={card.title} layout="fill" className={styles.image} />
        </div>
      )}                 <div className={styles.mask}></div>
              </div>
             <h1 className={styles.title}>{card.title}</h1>
              <p className={styles.desc}>{card.desc}</p>
              <CgMoreO  size={30}/>
              </Link>
             
               </li>
          </ul>
        ))}
      </div>
    </div>
  );
};
