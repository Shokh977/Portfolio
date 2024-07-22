import  {AdminPanel}  from "../../components/admin/Admin";
import styles from './admin.module.css'

export default function AdminPage() {

  return (
    <div className={styles.container}>
      <AdminPanel/>
    </div>
  );
}