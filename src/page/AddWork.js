import React, { useState, useEffect } from "react";
import "./addwork.css";
import "./toasts.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


function AddWork() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleUpload = () => {
    if (selectedFile && description) {
        const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('description', description);
       
      axios.post('http://localhost:8000/api/upload', formData,{
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})
        .then((response) => {
          console.log(response.data);
          // Reset input values
          setSelectedFile(null);
          setDescription('');
          toast.success("File uploaded successfully");
        })
        .catch((error) => {
          console.error(error);
          toast.error("Could not upload file");        });
    } else {
      toast.error("Please select a file and provide a description.");    }
  }


  useEffect(() => {
    const fileInput = document.querySelector("#file");

    const handleFileNameChange = (e) => {
      const [file] = e.target.files;
      if (file) {
        const { name: fileName, size } = file;
        const fileSize = (size / 1000).toFixed(2);
        const fileNameAndSize = `${fileName} - ${fileSize}KB`;
        setFileName(fileNameAndSize);
      }
    };

    fileInput.addEventListener("change", handleFileNameChange);

    return () => {
      fileInput.removeEventListener("change", handleFileNameChange);
    };
  }, []);

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} ></Toaster>

      <h1 className="jelo0" >Add Work</h1>

      <div className="input6757">
        <div className="form-floating">
          <input
            className="form-control my-4"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
          />
          <label htmlFor="floatingTextarea2">Add Title</label>
        </div>

        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            value={description}
            onChange={handleDescriptionChange}
            id="floatingTextarea2"
          />
          <label htmlFor="floatingTextarea2">Add Description</label>
        </div>

        <div className="file-input">
          <div className="kjk87">
            <label htmlFor="file" className="file-label">
              Select file
            </label>
            <input
              type="file"
              id="file"
              className="file"
              onChange={handleFileChange}
            />
          </div>

          <div className="nkk90">
            <button
              className="upload-btn btn btn-primary my-3"
              onClick={handleUpload}
              disabled={!selectedFile || !description}
            >
              Upload
            </button>
          </div>
        </div>
        <div className="file-info">
          <span className="file-name">{fileName}</span>
        </div>
      </div>
    </div>
  );
}

export default AddWork;
