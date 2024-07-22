import { Hero } from '../homeComponents/hero/Hero';
import styles from './homepage.module.css';
import { About } from '../homeComponents/about/About';
import { Projects } from '../homeComponents/projects/Projects';
import { Work } from '../homeComponents/work/Work';
import { PostHome } from '../homeComponents/postHome/PostHome';
export const dynamic = "force-dynamic";

const HomePage = ()=>{
 

  return(<div className={styles.container}>
    <Hero/>
    <About/>
    <Projects/>
    <Work/>
    <PostHome/>
  </div>)
}
export default HomePage;