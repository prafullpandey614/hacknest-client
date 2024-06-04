import React, { useState } from 'react';
import axios from 'axios';

const FileUploader = () => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [accessToken, setAccessToken] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTokenChange = (e) => {
    setAccessToken(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('file', file);

      const response = await axios.post('http://127.0.0.1:8000/videoprocessor/upload-video', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${accessToken}`
        }
      });

      console.log('File uploaded successfully:', response.data);

      // Reset form fields after successful upload
      setTitle('');
      setFile(null);
      setAccessToken('');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <h2>Upload File</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label>File:</label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <div>
          <label>Access Token:</label>
          <input type="text" value={accessToken} onChange={handleTokenChange} />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default FileUploader;
