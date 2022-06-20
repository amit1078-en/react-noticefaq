import React from 'react'
import 'react-notice-faq/dist/index.css'
import Notice from 'react-notice-faq';

const App = (props) => 
{
  return <Notice project-id={props["projectid"]}/>
}
export default App
