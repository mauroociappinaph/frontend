import React, { useState } from "react";
import axios from "axios";

interface ImageUploadProps {
  setImageUrl: (url: string) => void; // Callback to set the image URL in the parent component
}

const ImageUpload: React.FC<ImageUploadProps> = ({ setImageUrl }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("No file selected.");
      return;
    }

    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "your_upload_preset"); // Preset for Cloudinary upload

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setImageUrl(response.data.secure_url); // Set the image URL in the parent component
    } catch (error) {
      setError("Error uploading the image. Please try again.");
      console.error("Error uploading image:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload Image"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ImageUpload;
