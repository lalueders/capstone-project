import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

export default function ListPage({ notes }) {
  return (
    <>
      <Heading>MY NOTES</Heading>
      <main>
        {notes.map((note, index) => (
          <Card
            key={index}
            date={note.date}
            title={note.title}
            text={note.text}
            location={note.location}
            categories={note.categories}
          />
        ))}
      </main>
    </>
  );
}

const Heading = styled.h1`
  color: red;
  text-align: center;
`;

const StyledSubmitMessage = styled.p`
  font-size: 24px;
  color: green;
  text-align: center;
`;
