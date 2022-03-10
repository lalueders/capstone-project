import styled from 'styled-components/macro';
import { useState, useEffect } from 'react';

export default function Form({ notes, setNotes }) {
  const [inputData, setInputData] = useState({ date: '', title: '', text: '', location: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [location, setLocation] = useState();
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus('Geolocation not supported!');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition(
        position => {
          setTimeout(() => setStatus(null), 1000);
          setStatus('Locating...');
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          async function fetchData() {
            const response = await fetch(
              'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + lat + '&lon=' + lng
            );
            const data = await response.json();
            setLocation(data.address.city + ', ' + data.address.suburb);
            setInputData({ ...inputData, date: getDate(), location: data.address.city + ', ' + data.address.suburb });
          }
          try {
            fetchData();
          } catch (error) {
            console.error(error);
          }
        },
        () => {
          setStatus('Location not available!');
          setInputData({ ...inputData, date: getDate() });
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFormSubmit = e => {
    e.preventDefault();
    setNotes([inputData, ...notes]);
    showSubmitMessage();
  };

  const showSubmitMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 2000);
  };

  const getDate = () => {
    const today = new Date();
    return (
      today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2)
    );
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      {status ? <p>{status}</p> : <p>{location}</p>}
      <div>
        <input
          type="date"
          aria-label="date"
          name="date"
          id="date"
          required
          onChange={e => setInputData({ ...inputData, date: e.target.value })}
          value={inputData.date}
        ></input>
        <label htmlFor="date">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 248H128V192H48V248zM48 296V360H128V296H48zM176 296V360H272V296H176zM320 296V360H400V296H320zM400 192H320V248H400V192zM400 408H320V464H384C392.8 464 400 456.8 400 448V408zM272 408H176V464H272V408zM128 408H48V448C48 456.8 55.16 464 64 464H128V408zM272 192H176V248H272V192z" />
          </svg>
        </label>
      </div>
      <input
        onChange={e => setInputData({ ...inputData, title: e.target.value })}
        value={inputData.title}
        type="text"
        aria-label="title"
        name="title"
        maxLength="60"
        required
        placeholder="What's it about?..."
      ></input>
      <textarea
        onChange={e => setInputData({ ...inputData, text: e.target.value })}
        value={inputData.text}
        aria-label="text"
        name="text"
        rows="10"
        cols="30"
        maxLength="280"
        required
        placeholder="Write it down here..."
      ></textarea>
      <button type="submit">SAVE</button>
      {isSubmitted ? <SubmitMessage>Your data has been submitted!</SubmitMessage> : ''}
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: grid;
  margin: 0.5rem;
  gap: 0.5rem;
  resize: none;
  font-family: 'Open Sans', sans-serif;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    input {
      vertical-align: center;
    }

    svg {
      fill: #394a59;
      width: 24px;
    }
  }

  label {
    cursor: pointer;
    width: auto;
    text-decoration: underline;
    color: #394a59;
  }

  input {
    resize: none;
    border: 1px solid #394a59;
    border-radius: 4px;
    padding: 0.5rem;
    color: #394a59;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
  }

  textarea {
    resize: none;
    border: 1px solid #394a59;
    border-radius: 4px;
    padding: 0.5rem;
    color: #394a59;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
  }

  button {
    background: #394a59;
    color: white;
    font-size: 1.25rem;
    border: none;
    border-radius: 4px;
    padding: 0.5rem;
    cursor: pointer;
  }
`;

const SubmitMessage = styled.h3`
  font-size: 24px;
  color: green;
  text-align: center;
`;