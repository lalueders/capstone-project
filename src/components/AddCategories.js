import styled from 'styled-components/macro';
import { useState } from 'react';

export default function AddCategories({ addCategory }) {
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState('');

  const handleOnClick = () => {
    setEdit(!edit);
  };

  const handleSubmit = () => {
    addCategory(input);
    setInput('');
    setEdit(!edit);
  };

  return (
    <Wrapper>
      {edit ? (
        <button onClick={handleOnClick}>Close</button>
      ) : (
        <button onClick={handleOnClick}>Add</button>
      )}
      {edit ? (
        <StyledForm onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={event => setInput(event.target.value)}
            value={input}
            aria-label="Add category"
            name="Add category"
            maxLength="60"
            minLength="4"
            required
            placeholder="Add a new category"
          ></input>
          <button type="submit">Add</button>
        </StyledForm>
      ) : (
        ''
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section``;

const StyledForm = styled.form`
  padding: 1rem;
  display: flex;
  gap: 0.5rem;
`;
