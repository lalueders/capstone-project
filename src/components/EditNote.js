import styled from 'styled-components/macro';

export default function EditNote({ noteToEdit }) {
  console.log(noteToEdit);
  return (
    <ul>
      <li>{noteToEdit.date}</li>
      <li>{noteToEdit.location}</li>
      <li>{noteToEdit.title}</li>
      <li>{noteToEdit.text}</li>
      <ul>
        {noteToEdit.categories.map(category => (
          <li>{category}</li>
        ))}
      </ul>
    </ul>
  );
}
