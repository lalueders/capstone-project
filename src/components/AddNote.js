// import styled from 'styled-components/macro';
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { nanoid } from 'nanoid';

// export default function AddNote({ notes, setNotes, showFormSubmitMessage }) {
//   const [inputData, setInputData] = useState({
//     id: nanoid(),
//     date: '',
//     title: '',
//     text: '',
//     location: '',
//     categories: [],
//   });

//   const [location, setLocation] = useState();
//   const [status, setStatus] = useState(null);
//   const navigate = useNavigate();

//   const getDate = () => {
//     const [date] = new Date().toISOString().split('T');
//     return date;
//   };

//   useEffect(() => {
//     if (!navigator.geolocation) {
//       setStatus('Geolocation not supported!');
//     } else {
//       setStatus('Locating...');
//       navigator.geolocation.getCurrentPosition(
//         position => {
//           setTimeout(() => setStatus(null), 1000);
//           const lat = position.coords.latitude;
//           const lng = position.coords.longitude;
//           async function fetchData() {
//             const response = await fetch(
//               'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + lat + '&lon=' + lng
//             );
//             const data = await response.json();
//             setLocation(data.address.city + ', ' + data.address.suburb);
//             setInputData({
//               ...inputData,
//               date: getDate(),
//               location: data.address.city + ', ' + data.address.suburb,
//             });
//           }
//           try {
//             fetchData();
//           } catch (error) {
//             console.error(error);
//             setStatus('Location not available!');
//           }
//         },
//         () => {
//           setStatus('Location services are disabled!');
//         }
//       );
//       // setInputData({ ...inputData, date: getDate() });
//     }

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const handleFormSubmit = e => {
//     e.preventDefault();
//     setNotes([inputData, ...notes]);
//     setInputData({ ...inputData, date: getDate(), title: '', text: '', categories: [] });
//     navigate('../');
//     showFormSubmitMessage();
//   };

//   const handleOnChangeCategories = event => {
//     if (event.target.checked) {
//       setInputData({ ...inputData, categories: [...inputData.categories, event.target.value] });
//     } else {
//       const index = inputData.categories.indexOf(event.target.value);
//       inputData.categories.splice(index, 1);
//       setInputData({ ...inputData, categories: [...inputData.categories] });
//     }
//   };

//   const handleOnChangeDate = event => {
//     setInputData({ ...inputData, date: event.target.value });
//   };

//   const handleOnChangeTitle = event => {
//     setInputData({ ...inputData, title: event.target.value });
//   };

//   const handleOnChangeText = event => {
//     setInputData({ ...inputData, text: event.target.value });
//   };

//   return (
//     <StyledForm onSubmit={handleFormSubmit}>
//       <StyledCategories>
//         <div>
//           <input
//             onChange={handleOnChangeCategories}
//             checked={inputData.categories.includes('family')}
//             type="checkbox"
//             name="categories"
//             value="family"
//             id="family"
//             hidden
//           ></input>
//           <label htmlFor="family">family</label>
//         </div>
//         <div>
//           <input
//             onChange={handleOnChangeCategories}
//             checked={inputData.categories.includes('friends')}
//             type="checkbox"
//             name="categories"
//             value="friends"
//             id="friends"
//             hidden
//           ></input>
//           <label htmlFor="friends">friends</label>
//         </div>
//         <div>
//           <input
//             onChange={handleOnChangeCategories}
//             checked={inputData.categories.includes('vacation')}
//             type="checkbox"
//             name="categories"
//             value="vacation"
//             id="vacation"
//             hidden
//           ></input>
//           <label htmlFor="vacation">vacation</label>
//         </div>
//         <div>
//           <input
//             onChange={handleOnChangeCategories}
//             checked={inputData.categories.includes('others')}
//             type="checkbox"
//             name="categories"
//             value="others"
//             id="others"
//             hidden
//           ></input>
//           <label htmlFor="others">others</label>
//         </div>
//       </StyledCategories>
//       {status ? (
//         <StyledLocation>{status}</StyledLocation>
//       ) : (
//         <StyledLocation>{location}</StyledLocation>
//       )}
//       <StyledDate>
//         <input
//           type="date"
//           aria-label="date"
//           name="date"
//           id="date"
//           required
//           onChange={handleOnChangeDate}
//           value={inputData.date}
//         ></input>
//         <label htmlFor="date">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
//             <path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 248H128V192H48V248zM48 296V360H128V296H48zM176 296V360H272V296H176zM320 296V360H400V296H320zM400 192H320V248H400V192zM400 408H320V464H384C392.8 464 400 456.8 400 448V408zM272 408H176V464H272V408zM128 408H48V448C48 456.8 55.16 464 64 464H128V408zM272 192H176V248H272V192z" />
//           </svg>
//         </label>
//       </StyledDate>
//       <StyledTitle
//         onChange={handleOnChangeTitle}
//         value={inputData.title}
//         type="text"
//         aria-label="title"
//         name="title"
//         maxLength="60"
//         required
//         placeholder="What's it about?..."
//       ></StyledTitle>
//       <StyledTextarea
//         onChange={handleOnChangeText}
//         value={inputData.text}
//         aria-label="text"
//         name="text"
//         maxLength="280"
//         required
//         placeholder="Write it down here..."
//       ></StyledTextarea>
//       <StyledButton type="submit">SAVE</StyledButton>
//     </StyledForm>
//   );
// }

// const StyledForm = styled.form`
//   height: 100%;
//   display: grid;
//   grid-template-rows: auto auto auto auto 1fr auto;
//   gap: 0.5rem;
//   padding: 0.5rem;
//   font-family: 'Open Sans', sans-serif;
//   color: #394a59;
// `;

// const StyledCategories = styled.section`
//   display: flex;
//   gap: 0.5rem;

//   label {
//     user-select: none;
//     display: block;
//     border-radius: 4px;
//     border: 1px solid #394a59;
//     padding: 0.5rem;
//     text-decoration: none;
//     background: #ffffff;
//     color: #394a59;
//     cursor: pointer;
//   }
//   input:checked ~ label {
//     user-select: none;
//     border-radius: 4px;
//     border: 1px solid #ffffff;
//     padding: 0.5rem;
//     text-decoration: none;
//     background: #394a59;
//     color: #ffffff;
//     cursor: pointer;
//   }
// `;

// const StyledLocation = styled.p`
//   color: #394a59;
//   font-size: 1rem;
// `;

// const StyledDate = styled.section`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;

//   input {
//     font-size: 1rem;
//     font-family: 'Open Sans', sans-serif;
//     color: #394a59;
//     background: #ffffff;
//     border-radius: 4px;
//     border: 1px solid #394a59;
//     padding: 0.25rem;
//   }

//   svg {
//     fill: #394a59;
//     width: 20px;
//     cursor: pointer;
//   }
// `;

// const StyledTitle = styled.input`
//   font-size: 1rem;
//   font-family: 'Open Sans', sans-serif;
//   color: #394a59;
//   background: #ffffff;
//   resize: none;
//   border-radius: 4px;
//   border: 1px solid #394a59;
//   padding: 0.5rem;
// `;

// const StyledTextarea = styled.textarea`
//   font-size: 1rem;
//   font-family: 'Open Sans', sans-serif;
//   color: #394a59;
//   background: #ffffff;
//   resize: none;
//   border-radius: 4px;
//   border: 1px solid #394a59;
//   padding: 0.5rem;
// `;

// const StyledButton = styled.button`
//   background: #394a59;
//   color: #dce6f2;
//   font-size: 1.25rem;
//   border: none;
//   border-radius: 4px;
//   padding: 0.75rem;
//   cursor: pointer;
// `;
