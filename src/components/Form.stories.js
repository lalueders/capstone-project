import Form from './Form'
  export default {
      title: 'Form',
      component: Form
  }
        
  const Template = args => <Form {...args} />
    
  export const Default = Template.bind({})
  Default.args = {}
            