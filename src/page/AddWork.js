<<<<<<< HEAD
=======

import React, { useState } from 'react';
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

  };
  return (
    <div>
      <h1>Add Work</h1>

      <input type="file" onChange={handleFileChange} />
      <br />
      <textarea
        placeholder="Enter description..."
        value={description}
        onChange={handleDescriptionChange}
      ></textarea>
      <br />
      <button onClick={handleUpload}>Upload</button>

    </div>
  );
}

export default AddWork;

// import React, { useState } from "react";
// import "./AddWork.css";

// function AddWork({ handleFileUpload }) {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = () => {
//     if (selectedFile) {
//       handleFileUpload(selectedFile);
//       setSelectedFile(null);
//     }
//   };

//   return (
//     <div className="add-work">
//       <h2>Add Work</h2>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// }

// export default AddWork;



// // import React from 'react'

// // function AddWork() {
// //   return (
// //     <div>
// //         <h1>Add Work</h1>
// //     </div>
// //   )
// // }

// // export default AddWork


>>>>>>> 8289a385378c96adf46ddfe3aab76859cb10102a
