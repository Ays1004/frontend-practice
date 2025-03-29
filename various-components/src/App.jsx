import './App.css'
import GeminiChatBar from './components/GeminiChatBar'
import GoogleSearchBar from './components/GoogleSearchBar'
import Login from './components/Login'

function App() {

  return (
    <>
      <GoogleSearchBar></GoogleSearchBar>
      <GeminiChatBar></GeminiChatBar>
      <Login> </Login>
    </>
  )
}

export default App
