import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchCertificate() {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Search Certificate</h2>
      <input placeholder="Certificate ID" onChange={(e) => setId(e.target.value)} />
      <button onClick={() => navigate(`/certificate/${id}`)}>Search</button>
    </div>
  );
}
