import EditNote from './EditNote';

export default {
  title: 'components/EditNote',
  component: EditNote,
};

const Template = args => <EditNote {...args} />;

export const Default = Template.bind({});
Default.args = {
  noteToEdit: {
    id: '1',
    date: '2022-03-07',
    title: 'Capstone Projekt gestartet',
    text: 'Es geht los! Schauen wir mal, ob ich in vier Wochen eine funktionierende App gebaut hab... ',
    location: 'Hamburg, Rotherbaum',
    categories: ['family', 'friends'],
  },
  categories: ['family', 'friends', 'vacation', 'others'],
};
