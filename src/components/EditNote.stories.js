import EditNote from './EditNote'
  export default {
      title: 'EditNote',
      component: EditNote
  }
        
  const Template = args => <EditNote {...args} />
    
  export const Default = Template.bind({})
  Default.args = {}
            