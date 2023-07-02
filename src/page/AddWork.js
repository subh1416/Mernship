import React, { useState } from "react";
import './addwork.css';
import axios from 'axios'


function AddWork() {

  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState('');

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
          alert('File uploaded successfully');
        })
        .catch((error) => {
          console.error(error);
            alert('File upload failed')      
        });
    } else {
      alert('Please select a file and provide a description.');
    }


  // const divStyle = {
  //   height: "100px",
  // };

  // const colorjuw = {
  //   backgroundColor: '#9b59b6',
  // };
}
  return (
    <div>
      <h1>Add Work</h1>
       
      <div className="input6757">
        <div className="form-floating my-4"  >
          <label for="floatingTextarea">Add Title</label>
        </div>

        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            value={description}
        onChange={handleDescriptionChange}
            id="floatingTextarea2"
          ></textarea>
          <label for="floatingTextarea2">Add Description</label>
        </div>
        <button class="btn btn-primary my-3" onClick={handleUpload}>Upload</button>
        <input type="file" onChange={handleFileChange} />
      <br />
      </div>
    </div>
  );
}

export default AddWork;