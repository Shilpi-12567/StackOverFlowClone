import React from 'react'
import './RightSidebar.css'
import Widget from '../RightSidebar/Widget'
import WidgetTags from '../RightSidebar/WidgetTags'
const RightSidebar = () => {
  return (
   <aside className='right-sidebar'>
<Widget/>
<WidgetTags/>
   </aside>
  )
}

export default RightSidebar