import styled from 'styled-components/macro';
import { useState } from 'react';
import axios from 'axios';
import select from '../assets/imageUpload.svg';
import cancel from '../assets/cancelUpload.svg';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function ImageUpload({ setImage, image }) {
  const [loading, setLoading] = useState(false);
  const [process, setProcess] = useState(0);

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;

    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    formData.append('upload_preset', PRESET);

    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
        onUploadProgress: progressEvent => {
          setLoading(true);
          let percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProcess(percent);
        },
      })
      .then(onImageSave)
      .catch(err => console.error(err));
  }

  function onImageSave(response) {
    setImage(response.data.url);
    setLoading(false);
  }

  function handleRemoveImage() {
    setImage('');
    setProcess(0);
    setLoading(false);
  }

  return (
    <>
      {loading && <div>Uploading Image...{process}%</div>}
      {image ? (
        <Preview>
          <CancelButton onClick={handleRemoveImage}>
            <img src={cancel} width="35" alt="Thumb" />
          </CancelButton>
          <img src={image} alt="Delete" height="auto" width="100%" />
        </Preview>
      ) : (
        <div>
          <label htmlFor="file-upload">
            <img src={select} alt="upload" width="35" height="35" />
          </label>
          <input data-testid="file-upload" id="file-upload" type="file" onChange={upload} hidden />
        </div>
      )}
    </>
  );
}

const Preview = styled.div`
  position: relative;
  img {
    border-radius: 4px;
  }
`;

const CancelButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  position: absolute;
  right: 0.5rem;
  top: 0.75rem;
`;
