import { Accordion } from './Accordion';
import styles from './project.module.css'

export const Projects = () => {
    return (
      <div className={styles.container}>
          <div className={styles.content}>
    <h1>
          My<span> Trips to</span>
    </h1>
        <p className={styles.text}>
            here you can explore places enjoyable to visit.
        </p>
          </div>
          <div>
              <Accordion/>
          </div>
      </div>
    );
  };