import { useState } from "react";

const AdminDashboard = () => {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    if (!file) {
      alert("Please select Excel file");
      return;
    }
    alert("Excel uploaded (backend connect pending)");
  };

  return (
    <div style={styles.page}>
      <h2>Admin Dashboard</h2>

      <div style={styles.grid}>
        {/* Upload Section */}
        <div style={styles.card}>
          <h3>📤 Upload Excel</h3>
          <input
            type="file"
            accept=".xlsx,.xls"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button style={styles.btn} onClick={handleUpload}>
            Upload
          </button>
        </div>

        {/* Certificate List */}
        <div style={styles.card}>
          <h3>📋 Certificates</h3>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Student</th>
                <th>Domain</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CVS-001</td>
                <td>Rahul Sharma</td>
                <td>AI Internship</td>
                <td>
                  <button style={styles.approve}>Approve</button>
                  <button style={styles.reject}>Reject</button>
                </td>
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
    background: "#e2e8f0",
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
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
  },
  btn: {
    marginTop: "10px",
    padding: "6px 12px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    marginTop: "10px",
    borderCollapse: "collapse",
  },
  approve: {
    marginRight: "5px",
    background: "green",
    color: "white",
    border: "none",
    padding: "4px 8px",
  },
  reject: {
    background: "red",
    color: "white",
    border: "none",
    padding: "4px 8px",
  },
};

export default AdminDashboard;
