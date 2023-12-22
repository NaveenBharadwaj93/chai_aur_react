import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {

  return(
    <div>
      <h1> Hello there from main function itself</h1>
    </div>
  )
  
}


const reactElement = React.createElement('a',{'href':'http://google.com','target':'_blank'},"visit google.com")

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {reactElement},
   <MyApp />,
   <App />
   
  </React.StrictMode>,
)
