import styled from 'styled-components/macro';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import AddCategories from './AddCategories';

export default function AddNote({ addCategory, categories }) {
  const [active, setActive] = useState(false);
  const [categoriesSelected, setCategoriesSelected] = useState([]);
  const getDate = () => {
    const [date] = new Date().toISOString().split('T');
    return date;
  };
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      date: getDate(),
    },
  });

  const onSubmit = data => {
    data.id = nanoid();
    data.categories = [categoriesSelected];
    console.log(data);
  };
  // console.log(watch());

  const handleCategorySelect = event => {
    setActive(!active);
    if (categoriesSelected.includes(event.target.value)) {
      const index = categoriesSelected.indexOf(event.target.value);
      categoriesSelected.splice(index, 1);
    } else {
      setCategoriesSelected([...categoriesSelected, event.target.value]);
    }
  };

  return (
    <Wrapper>
      <StyledCategories>
        {categories.map(category => (
          <Button
            key={nanoid()}
            value={category}
            onClick={handleCategorySelect}
            active={categoriesSelected.includes(category)}
          >
            {category}
          </Button>
        ))}
      </StyledCategories>
      <AddCategories addCategory={addCategory} />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <DateInput>
          <input
            {...register('date', {
              required: 'This is required.',
              maxLength: { value: 80, message: 'Max length 80' },
            })}
            type="date"
            aria-label="date"
            id="date"
          />
          <label htmlFor="date">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 248H128V192H48V248zM48 296V360H128V296H48zM176 296V360H272V296H176zM320 296V360H400V296H320zM400 192H320V248H400V192zM400 408H320V464H384C392.8 464 400 456.8 400 448V408zM272 408H176V464H272V408zM128 408H48V448C48 456.8 55.16 464 64 464H128V408zM272 192H176V248H272V192z" />
            </svg>
          </label>
        </DateInput>
        <input
          {...register('title', {
            required: 'This is required.',
            maxLength: { value: 80, message: 'Max length 80' },
          })}
          type="text"
          aria-label="title"
          placeholder="Give your note a headline"
        />
        <p>{errors.title?.message}</p>
        <textarea
          {...register('text', {
            required: 'This is required.',
            maxLength: { value: 240, message: 'Max length 240' },
          })}
          type="text"
          aria-label="text"
          placeholder="Write your note here..."
        />
        <p>{errors.text?.message}</p>
        <button type="submit">SAVE</button>
      </StyledForm>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  gap: 0.5rem;
  margin: 0.5rem;
`;

const StyledForm = styled.form`
  display: grid;
  gap: 0.5rem;
`;

const DateInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  svg {
    fill: #394a59;
    width: 20px;
    cursor: pointer;
  }
`;

const StyledCategories = styled.section`
  padding-bottom: 1rem;
  overflow: scroll;
  display: flex;
  gap: 0.5rem;
`;

const Button = styled.button`
  background: ${props => (props.active ? '#394a59' : '#ffffff')};
  border: 1px solid ${props => (props.active ? '#ffffff' : '#394a59')};
  color: ${props => (props.active ? '#ffffff' : '#394a59')};
  user-select: none;
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 1rem;
  text-decoration: none;
`;
