import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/navbar.component'
import Home from './routes/home/home.component'
import Catalog from './routes/catalog/catalog.component'
import Favorites from './routes/favorites/favorites.component'
import Courses from './routes/courses/courses.component'
import Course from './routes/course/course.component'
import '@fontsource/chakra-petch'

function App() {


  return (
    <div className='app-div'>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>} />
          <Route path='catalog' element={<Catalog/>} />
          <Route path='favorites' element={<Favorites/>} />
          <Route path='catalog/:catalogName' element={<Courses/>}  />
          <Route path='course/:courseId' element={<Course/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
