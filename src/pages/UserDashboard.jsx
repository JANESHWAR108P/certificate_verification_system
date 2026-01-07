import { useAuth } from "../auth/AuthContext";

const UserDashboard = () => {
  const { user } = useAuth();

  return (
    <div style={styles.page}>
      <h2>User Dashboard</h2>
      <p className="muted">Welcome, {user?.name}</p>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>📄 Certificate Status</h3>
          <p style={styles.pending}>Pending</p>
        </div>

        <div style={styles.card}>
          <h3>🗂 Applied Certificates</h3>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Certificate ID</th>
                <th>Domain</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CVS-001</td>
                <td>Web Development</td>
                <td style={styles.pending}>Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

/* ===== CSS (INLINE) ===== */
const styles = {
  page: {
    padding: "25px",
    background: "#f1f5f9",
    minHeight: "100vh",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  pending: {
    color: "orange",
    fontWeight: "bold",
  },
};

export default UserDashboard;
