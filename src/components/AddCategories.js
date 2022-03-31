import styled from 'styled-components/macro';
import { useState } from 'react';
import cancel from '../assets/iconCancel--light.svg';
import add from '../assets/iconAdd.svg';

export default function AddCategories({ categories, addCategory, toggleAddCategories }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  function handleClickToCancel() {
    setInput('');
    toggleAddCategories();
  }

  function handleClickToAddCategory(event) {
    const categoriesToLowerCase = categories.map(category => category.toLowerCase());
    if (categoriesToLowerCase.includes(input.toLocaleLowerCase())) {
      event.preventDefault();
      setError('This category already exists!');
    } else {
      addCategory(input);
      setInput('');
      toggleAddCategories();
    }
  }

  return (
    <div>
      <StyledForm onSubmit={handleClickToAddCategory}>
        <input
          type="text"
          onChange={event => setInput(event.target.value)}
          value={input}
          aria-label="Add category"
          name="Add category"
          maxLength="20"
          minLength="3"
          required
          placeholder="Add new category..."
          autoFocus
        ></input>
        <StyledButton type="submit">
          <img src={add} width="20" height="20" alt="Add more categories here" />
        </StyledButton>
        <StyledButton onClick={handleClickToCancel}>
          <img src={cancel} width="20" height="20" alt="Don't add category and cancel" />
        </StyledButton>
      </StyledForm>
      {error && <p>{error}</p>}
    </div>
  );
}

const StyledForm = styled.form`
  padding: 0.5rem 0;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  input[type='text'] {
    padding: 0.5rem;
    font-size: 0.9rem;
    border: none;
    border-radius: 0;
    background: inherit;
    border-bottom: 1px solid #a3afbf;
    outline: none;
  }
`;

const StyledButton = styled.button`
  padding: 0;
  background: inherit;
  border: none;
`;
