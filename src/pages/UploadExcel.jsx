import axios from "../api/axios";

export default function UploadExcel() {
  const handleUpload = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    await axios.post("/admin/upload-excel", formData);
    alert("Uploaded successfully");
  };

  return (
    <div className="container">
      <h2>Upload Excel</h2>
      <input type="file" onChange={handleUpload} />
    </div>
  );
}
