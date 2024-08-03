import  CardList  from '../../components/CardList/CardList'
import styles from './post.module.css';

 const BlogPost = ({searchParams})=>{
    const page = parseInt(searchParams.page) || 1
    const {cat} = searchParams

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>{cat} Blog</h1>
            <div className={styles.content}>
                <CardList page={page} cat={cat}/>
            </div>

        </div>
    )
}
export default BlogPost;