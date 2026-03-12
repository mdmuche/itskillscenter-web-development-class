import './App.css'
import BlogForm from './components/BlogForm'
import BlogList from './components/BlogList'

function App() {

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Simple Blog App</h1>
      <BlogForm /> 
      <hr />
      <BlogList /> 

    </div>
  )
}

export default App
