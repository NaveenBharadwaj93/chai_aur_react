import Chai from './Chai'


function App() {

  const username = `chaiAurCode`

  return (
    // added this fragment to add multiple html elements. jsx allows only one element.
    <> 
      <h1>Chai aur react with vite | NB {username}</h1>
      <Chai />
    </>
  )
}

export default App
