import Note from './Note.js';

export default {
  title: 'components/Note',
  component: Note,
};

const Template = args => <Note {...args} />;

export const Default = Template.bind({});
Default.args = {
  date: '2022-03-07',
  title: 'Capstone Projekt gestartet',
  text: 'Es geht los! Schauen wir mal, ob ich in vier Wochen eine funktionierende App gebaut hab... ',
  location: 'Hamburg, Rotherbaum',
  categories: ['family', 'friends'],
  img: 'https://res.cloudinary.com/dq7bhlygi/image/upload/v1647956325/l8osfoevkdxcrpm8dvho.jpg',
};
