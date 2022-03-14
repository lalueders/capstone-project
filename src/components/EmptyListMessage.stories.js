import EmptyListMessage from './EmptyListMessage'
  export default {
      title: 'EmptyListMessage',
      component: EmptyListMessage
  }
        
  const Template = args => <EmptyListMessage {...args} />
    
  export const Default = Template.bind({})
  Default.args = {}
            