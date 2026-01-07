import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../api/axios";

export default function ViewCertificate() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`/certificates/${id}`).then(res => setData(res.data));
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>{data.studentName}</h2>
      <p>Domain: {data.domain}</p>
      <p>Duration: {data.startDate} - {data.endDate}</p>
      <a href={`http://localhost:5000/api/certificates/${id}/download`}>
        Download PDF
      </a>
    </div>
  );
}
