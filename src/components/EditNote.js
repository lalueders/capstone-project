import styled from 'styled-components/macro';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function EditNote({ updateNote, noteToEdit }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: noteToEdit.id,
      date: noteToEdit.date,
      title: noteToEdit.title,
      text: noteToEdit.text,
      location: noteToEdit.location,
    },
  });

  return (
    <Wrapper>
      <StyledForm
        onSubmit={handleSubmit(data => {
          // console.log(noteToEdit.categories);
          data.categories = noteToEdit.categories;
          updateNote(data);
        })}
      >
        <StyledList role="list">
          {noteToEdit.categories.map(category => (
            <li key={category}>{category}</li>
          ))}
        </StyledList>
        <StyledDateInput>
          <input
            {...register('date', {
              required: 'This is required.',
            })}
            type="date"
            aria-label="date"
            placeholder="Change date"
            id="date"
          ></input>
          <label htmlFor="date">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 248H128V192H48V248zM48 296V360H128V296H48zM176 296V360H272V296H176zM320 296V360H400V296H320zM400 192H320V248H400V192zM400 408H320V464H384C392.8 464 400 456.8 400 448V408zM272 408H176V464H272V408zM128 408H48V448C48 456.8 55.16 464 64 464H128V408zM272 192H176V248H272V192z" />
            </svg>
          </label>
        </StyledDateInput>
        <StyledLocationInput
          {...register('location', {
            required: 'This is required.',
            maxLength: { value: 80, message: 'Max length 80' },
          })}
          type="text"
          aria-label="location"
          placeholder="Change location"
        ></StyledLocationInput>
        <StyledTitleInput
          {...register('title', {
            required: 'This is required.',
            maxLength: { value: 80, message: 'Max length 80' },
          })}
          type="text"
          aria-label="title"
          placeholder="Title"
        ></StyledTitleInput>
        <p>{errors.title?.message}</p>
        <StyledTextarea
          {...register('text', {
            required: 'This is required.',
            maxLength: { value: 280, message: 'Max length is 280' },
          })}
          aria-label="text"
          name="text"
          placeholder="text"
        ></StyledTextarea>
        <p>{errors.text?.message}</p>
        <SubmitWrapper>
          <StyledButton type="button" onClick={() => navigate('/')}>
            CANCEL
          </StyledButton>
          <StyledButton type="submit">SAVE</StyledButton>
        </SubmitWrapper>
      </StyledForm>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  gap: 0.5rem;
  padding: 0.5rem;
  font-family: 'Open Sans', sans-serif;
  color: #394a59;
`;

const StyledForm = styled.form`
  height: 100%;
  display: grid;
  grid-template-rows: auto auto auto auto auto 1fr auto;
  gap: 0.5rem;

  font-family: 'Open Sans', sans-serif;
  color: #394a59;
`;

const StyledDateInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
    color: #394a59;
    background: #ffffff;
    border-radius: 4px;
    border: 1px solid #394a59;
    padding: 0.25rem;
  }

  svg {
    fill: #394a59;
    width: 20px;
    cursor: pointer;
  }
`;

const StyledLocationInput = styled.input`
  font-size: 1rem;
  font-family: 'Open Sans', sans-serif;
  color: #394a59;
  background: #ffffff;
  resize: none;
  border-radius: 4px;
  border: 1px solid #394a59;
  padding: 0.5rem;
`;

const StyledTitleInput = styled.input`
  font-size: 1rem;
  font-family: 'Open Sans', sans-serif;
  color: #394a59;
  background: #ffffff;
  resize: none;
  border-radius: 4px;
  border: 1px solid #394a59;
  padding: 0.5rem;
`;

const StyledTextarea = styled.textarea`
  font-size: 1rem;
  font-family: 'Open Sans', sans-serif;
  color: #394a59;
  background: #ffffff;
  resize: none;
  border-radius: 4px;
  border: 1px solid #394a59;
  padding: 0.5rem;
`;

const SubmitWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.75rem;

  justify-content: space-between;
`;

const StyledButton = styled.button`
  background: #394a59;
  color: #dce6f2;
  font-size: 1.25rem;
  border: none;
  border-radius: 4px;
  padding: 0.75rem;
  cursor: pointer;
`;

const StyledList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  li {
    border-radius: 4px;
    border: 1px solid #ffffff;
    padding: 0.5rem;
    text-decoration: none;
    background: #394a59;
    color: #ffffff;
  }
`;
