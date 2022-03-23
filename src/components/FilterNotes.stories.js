import FilterNotes from './FilterNotes'
  export default {
      title: 'FilterNotes',
      component: FilterNotes
  }
        
  const Template = args => <FilterNotes {...args} />
    
  export const Default = Template.bind({})
  Default.args = {}
            