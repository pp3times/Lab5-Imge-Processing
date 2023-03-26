// @ts-nocheck
import { useState } from 'react';

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);

  const handleSubmit = async (e) => {
    console.log('file', file);

    if (!file) {
      alert('Please select an image');
      return;
    }

    e.preventDefault();
    const formData = {
      image: file,
    };

    const response = await fetch('http://localhost:8000/process-image', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(formData);
    const data = await response.json();
    console.log(data);
    setProcessedImage(data.processed_image);
  };

  const handleFileChange = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.readyState === 2) {
        setFile(reader.result);
      }
    };
    setFile(reader.readAsDataURL(e.target.files[0]));
  };
  return (
    <div className="w-screen flex items-center justify-center flex-col">
      <form onSubmit={handleSubmit} className="flex space-y-10 flex-col w-1/6">
        <label className="space-y-4 flex flex-col">
          <p>Choose an image:</p>
          <input
            className="cursor-pointer file:cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            type="file"
            onChange={handleFileChange}
          />
        </label>
        <button
          type="submit"
          className="rounded-md bg-[#037aff] text-white font-bold py-2 px-4 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          Process Image
        </button>
      </form>
      <div className="flex items-center justify-between w-full mt-20 container mx-auto px-60 gap-20">
        {file && (
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <img
              src={file}
              alt="file"
              style={{ width: '100%', height: '200px' }}
            />
            <p className="text-xl text-blue-600">Current Image</p>
          </div>
        )}

        {processedImage && (
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <img
              src={processedImage}
              alt="processedImage"
              style={{ width: '100%', height: '200px' }}
            />
            <p className="text-xl text-blue-600">processed Image</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
