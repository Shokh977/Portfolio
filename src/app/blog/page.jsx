import { Featured } from "../../components/Featured/Featured";
import styles from "./blog.module.css";
import { CategoryList } from "../../components/CategoryList/CategoryList";
import  CardList  from "../../components/CardList/CardList";
// import  Menu  from "@/components/Menu/Menu";

export default function Home({ searchParams }) {
  let page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page}/>
        {/* <Menu/> */}
      </div>
    </div>
  );
}
