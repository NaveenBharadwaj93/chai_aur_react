import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const reactElement = React.createElement('a',{href: 'http://google.com', target: '_blank'},' Click here to search more')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <br />
    {reactElement}
  </React.StrictMode>,
)
