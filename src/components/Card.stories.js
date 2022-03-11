import Card from './Card.js';

export default {
  title: 'components/Card',
  component: Card,
};

const Template = args => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  date: '2022-03-07',
  title: 'Capstone Projekt gestartet',
  text: 'Es geht los! Schauen wir mal, ob ich in vier Wochen eine funktionierende App gebaut hab... ',
  location: 'Hamburg, Rotherbaum',
  categories: ['family', 'friends'],
};
