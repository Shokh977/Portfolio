'use client'
import { useSession } from "next-auth/react";
import styles from './adminPanel.module.css'

const users = [
    {
        id: 1,
        name: 'user1',
        email: 'email@email.com',
    }
    , {
        id: 2,
        name: 'user2',
        email: 'email@email.com',
    }, {
        id: 3,
        name: 'user3',
        email: 'email@email.com',
    }
]

// Define the AdminPanel component
export const AdminPanel = () => {
  // Use useSession hook to get session information
  const { data: session, status } = useSession();

  // Check if session is loading
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  // Check if user is authenticated and has the 'ADMIN' role
  if (!session || !session.user || session.user.role !== 'ADMIN') {
    return <p>No access to this page.</p>;
  }

  // Render the admin panel content if authorized
  return (
    <>
    <h1>{session.user.name}</h1>
      
    <div className={styles.tableContainer}>
      <h2>users</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            {/* Add more user info headers as needed */}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              {/* Add more user info columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Additional information about posts */}
    </div>
      
    </>
  );
};
