import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './Layout/Layout'
import { CreatePosts } from './pages/CreatePosts'
import { Posts } from './pages/Posts'
import { Page } from './components/Page'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Page />} />
          <Route path='posts' element={<Posts />}/>
          <Route path='create-posts' element={<CreatePosts />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
