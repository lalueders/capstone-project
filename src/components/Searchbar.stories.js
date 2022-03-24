import Searchbar from './Searchbar'
  export default {
      title: 'Searchbar',
      component: Searchbar
  }
        
  const Template = args => <Searchbar {...args} />
    
  export const Default = Template.bind({})
  Default.args = {}
            