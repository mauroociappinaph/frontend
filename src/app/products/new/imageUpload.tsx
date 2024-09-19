import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

interface ImageUploadProps {
  setImageUrl: (url: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ setImageUrl }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  console.log("ImageUpload component rendered");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    console.log("handleUpload function called");
    if (!selectedFile) {
      setError("No file selected.");
      return;
    }

    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "emprendeart_img");

    try {
      console.log("Posting to Cloudinary:");
      console.log({ formData });
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dj8g1egez/image/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response from Cloudinary:", response.data);
      setImageUrl(response.data.secure_url); // Set the image URL in the parent component
    } catch (error) {
      setError("Error uploading the image. Please try again.");
      console.error("Error uploading image:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input className="my-2 " type="file" onChange={handleFileChange} />
      <Button className="my-2" onClick={handleUpload} disabled={uploading}>
        {uploading ? "Subiendo..." : "Subir imagen"}
      </Button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ImageUpload;
