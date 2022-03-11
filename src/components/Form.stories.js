import Form from './Form';
export default {
  title: 'components/Form',
  component: Form,
};

const Template = args => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {};
