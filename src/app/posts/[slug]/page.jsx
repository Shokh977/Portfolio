import styles from "./singlePage.module.css";
import Image from 'next/image';
import Comments from '../../../components/comments/Comments'
import { FaEye } from "react-icons/fa";
import { formatDateTime } from './../../../UI/formatDateTime';



const getData = async (slug) => {
    const res = await fetch(
        `http://localhost:3000/api/posts/${slug}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error("Failed");
    }

    return res.json();
};


const SinglePage = async ({ params }) => {
    const { slug } = params
    const data = await getData(slug)
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{data.title}
                    </h1>
                    <div className={styles.user}>
                        {data?.user?.image && (
                            <div className={styles.userImageContainer}>
                                <Image className={styles.avatar} src={data.user.image} alt={data.title} fill />
                            </div>
                        )}

                        <div className={styles.userTextContainer}>
                            <span className={styles.userName}>{data?.user?.name}</span>
                            <span className={styles.date}>{formatDateTime(data.createdAt)}</span>
                            <span className={styles.view}><FaEye/> {data.views}</span>
                        </div>
                    </div>
                </div>
                {data?.img && (
                    <div className={styles.imageContainer}>
                        <Image src={data.img} alt='' fill />

                    </div>
                )}
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                <div className={styles.desc} dangerouslySetInnerHTML={{ __html: data?.desc || '' }} />
                    <div className={styles.comment}>
                        <Comments postSlug={slug}/>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default SinglePage