import styled from 'styled-components/macro';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import AddCategories from './AddCategories';
import ImageUpload from './ImageUpload';
import addIcon from '../assets/iconAdd.svg';

export default function AddNote({
  showFormSubmitMessage,
  addCategory,
  categories,
  setNotes,
  notes,
}) {
  const navigate = useNavigate();
  const [image, setImage] = useState('');
  const [isToEdit, setIsToEdit] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [location, setLocation] = useState();
  const [status, setStatus] = useState('');
  const [categoriesSelected, setCategoriesSelected] = useState([]);
  const getDate = () => {
    const [date] = new Date().toISOString().split('T');
    return date;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      date: getDate(),
    },
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus('Geolocation not supported!');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition(
        position => {
          setTimeout(() => setStatus(null), 1000);
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          async function fetchData() {
            const response = await fetch(
              'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + lat + '&lon=' + lng
            );
            const data = await response.json();
            setLocation(data.address.state + ', ' + data.address.suburb);
          }
          try {
            fetchData();
          } catch (error) {
            console.error(error);
            setStatus('Location not available!');
          }
        },
        () => {
          setStatus('Location services are disabled!');
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggleAddCategories() {
    setIsToEdit(!isToEdit);
  }

  function onSubmit(data) {
    data.id = nanoid();
    data.location = location;
    data.categories = categoriesSelected;
    data.img = image;
    setNotes([data, ...notes]);
    showFormSubmitMessage();
    navigate('../');
  }

  function handleCategorySelect(event) {
    setIsActive(!isActive);
    if (categoriesSelected.includes(event.target.value)) {
      const index = categoriesSelected.indexOf(event.target.value);
      categoriesSelected.splice(index, 1);
    } else {
      setCategoriesSelected([...categoriesSelected, event.target.value]);
    }
  }

  return (
    <Wrapper>
      <CategoriesGrid>
        <StyledCategories>
          {!isToEdit && (
            <Button onClick={toggleAddCategories}>
              <img src={addIcon} alt="Add more categories" />
            </Button>
          )}
          {categories.map(category => (
            <CategoryTags
              key={nanoid()}
              value={category}
              active={categoriesSelected.includes(category)}
              onClick={handleCategorySelect}
            >
              {category}
            </CategoryTags>
          ))}
        </StyledCategories>
        {isToEdit && (
          <AddCategories
            addCategory={addCategory}
            toggleAddCategories={toggleAddCategories}
            categories={categories}
          />
        )}
      </CategoriesGrid>
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
        {errors.title?.message && <p>{errors.title?.message}</p>}
        <Location>{status ? <p>{status}</p> : <p>{location}</p>}</Location>
        <input
          {...register('title', {
            required: 'This is required.',
            maxLength: { value: 80, message: 'Max length 80' },
          })}
          type="text"
          aria-label="title"
          placeholder="Give your note a headline"
        />
        {errors.title?.message && <p>{errors.title?.message}</p>}
        <textarea
          {...register('text', {
            required: 'This is required.',
            maxLength: { value: 240, message: 'Max length 240' },
          })}
          type="text"
          aria-label="text"
          placeholder="Write your note here..."
        />
        {errors.title?.message && <p>{errors.title?.message}</p>}
        <ImageUpload setImage={setImage} image={image} />
        <StyledButton type="submit">SAVE</StyledButton>
      </StyledForm>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: calc(100vh - 72px);
  grid-template-rows: auto 1fr;
  display: grid;
  gap: 0.5rem;
  margin: 0.5rem;
`;

const CategoriesGrid = styled.section`
  display: grid;
  gap: 0.5rem;
  padding: 0.5rem 0;
`;

const Location = styled.section`
  color: var(--darkblue);
`;

const StyledForm = styled.form`
  height: 100%;
  grid-template-rows: auto auto auto 1fr auto auto;
  display: grid;
  gap: 1rem;
`;

const DateInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  img {
    fill: red;
  }
  svg {
    fill: #394a59;
    width: 20px;
  }
`;

const StyledCategories = styled.section`
  overflow: scroll;
  display: flex;
  gap: 0.5rem;
`;

const CategoryTags = styled.button`
  background: ${props => (props.active ? '#394a59' : '#ffffff')};
  border: 1px solid ${props => (props.active ? '#ffffff' : '#394a59')};
  color: ${props => (props.active ? '#ffffff' : '#394a59')};
  user-select: none;
  border-radius: 4px;
  padding: 0.5rem;
  font-size: 1rem;
  text-decoration: none;

  white-space: nowrap;
`;

const StyledButton = styled.button`
  background: #394a59;
  color: #dce6f2;
  font-size: 1.25rem;
  border: none;
  border-radius: 4px;
  padding: 0.75rem;
`;

const Button = styled.button`
  position: sticky;
  left: 0;
  background: #f2f0f0;
  display: flex;
  align-items: center;
  border: none;
  height: 100%;

  img {
    height: 20px;
  }
`;
