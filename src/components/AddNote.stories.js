import AddNote from './AddNote';
export default {
  title: 'components/AddNote',
  component: AddNote,
};

const Template = args => <AddNote {...args} />;

export const Default = Template.bind({});
Default.args = {
  categories: ['family', 'friends', 'vacation', 'others'],
};
