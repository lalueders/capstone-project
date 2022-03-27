import Filter from './Filter';
export default {
  title: 'Filter',
  component: Filter,
};

const Template = args => <Filter {...args} />;

export const Default = Template.bind({});
Default.args = { categories: ['family', 'friends', 'vacation', 'others'] };
