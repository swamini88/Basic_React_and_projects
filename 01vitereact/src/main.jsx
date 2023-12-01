import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function CustomApp(){
//     return(
//         <div>
//             <h2>custom app </h2>
//         </div>
//     )
// }


// const reactElement={
//     type : 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children : 'click me to visit goolge'
// }
 
const anotherElement =(
    <a href='https://google.com' target='_blank'>visit for google</a>
)
const anotherUsername ="chai aur react with another username"
const reactElement = React.createElement(
    'a',
    {href : 'https://google.com',target:'_blank'},
    'vist me for goole website',
    anotherUsername
)
ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
 
    
   
 
)
