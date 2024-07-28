import Link from "next/link";
import styles from "./categoryList.module.css";
import Image from "next/image";

const getData = async () =>{
  const res = await fetch('https://portfolio-omega-sand-21.vercel.app/api/categories')
if(!res.ok){
  throw new Error('Failed')

}
return res.json()
}


export const CategoryList = async () => {
  const data = await getData()
  console.log(data, 'data from categorylist')

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data? data.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        )) : <p className={styles.NoFound}> No Category Found </p>}
      </div>
    </div>
  );
}
