import SearchNotes from './SearchNotes';
export default {
  title: 'Searchbar',
  component: SearchNotes,
};

const Template = args => <SearchNotes {...args} />;

export const Default = Template.bind({});
Default.args = {};
