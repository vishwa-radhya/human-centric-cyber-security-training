import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/navbar.component'
import Home from './routes/home/home.component'
import Catalog from './routes/catalog/catalog.component'
import Favorites from './routes/favorites/favorites.component'
import Courses from './routes/courses/courses.component'
import Course from './routes/course/course.component'
import '@fontsource/chakra-petch'
import User from './routes/user/user.component'
import Quiz from './routes/quiz/quiz.component'
import CatalogQuiz from './routes/catalog-quiz/catalog-quiz.component'
import DataLoader from './components/data-loader/data-loader.component'
import { useContext,useState,useEffect } from 'react'
import { AuthContext } from './contexts/auth-context.context'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './utils/firebase'
import Community from './routes/community/community.component'
import CommunityVideos from './routes/community-videos/community-videos.component'
import 'animate.css'

function App() {

  const {handleSetUser} = useContext(AuthContext);
  const [isLoading,setIsLoading]=useState(false);
  
  useEffect(() => {
    const checkAuthState = async () => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if(user){
          handleSetUser(user);
          setIsLoading(false);
        }else{
          setIsLoading(false);
          handleSetUser(null);
        }
      });
      return () => unsubscribe();
    };
    setIsLoading(true);
    checkAuthState();      
  }, [handleSetUser]);

  return (
    <div className='app-div'>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>} />
          <Route path='catalog' element={<Catalog/>} />
          <Route path='favorites' element={<Favorites/>} />
          <Route path='catalog/:catalogName' element={<Courses/>}  />
          <Route path='course/:cId' element={<Course/>} />
          <Route path='user' element={<User/>} />
          <Route path='quiz' element={<Quiz/>} />
          <Route path='qz/:quizCatalog' element={<CatalogQuiz/>} />
          <Route path='people' element={<Community/>} />
          <Route path='com/:userUid' element={<CommunityVideos/>} />
        </Route>
      </Routes>
      {isLoading &&  <DataLoader />}
    </div>
  )
}

export default App
