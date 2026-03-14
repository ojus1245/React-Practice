import React from 'react'
import ReactDom from 'react-dom/client'

import App from './App'

// general React element format :
// reactElement={
    // type:'a',
    // props:{
    //   href:'https://google.com',
    //   target:'_blank'
    // },
    // children:'Click me to visit google'
    // }



// }

// the Above code wont work that is because in this example we r using the render method of vite so when objects are rendered they should follow the key names that vite render method is expecting
const anotherElement=(
  <a href="https://google.com">Visit Google</a>
)
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google',
  // anotherElement
)
ReactDom.createRoot(document.getElementById('root')).render(
  <>
  <App/>
  {reactElement}
  </>,
)