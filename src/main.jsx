import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Portfolio from './Components/MainPage/Portfolio.jsx'
import SkillsPage from './Pages/SkillsPage.jsx'
import Certifications from './Pages/Certifications.jsx'
import Testimonials from './Pages/Testimonials.jsx'
import Blogs from './Pages/Blogs.jsx'
import ProjectsPage from './Pages/ProjectsPage.jsx'
import Error from './Error.jsx'
import Contact from './Pages/Contact.jsx'

const router = createBrowserRouter([
  {path:'/ntdev/',element:<App/>,error:<Error/>},
  {path:'/ntdev/portfolio', element:<Portfolio/>},
  {path:'/ntdev/skills', element:<SkillsPage/>},
  {path:'/ntdev/certifications', element:<Certifications/>},
  {path:'/ntdev/testimonials', element:<Testimonials/>},
  {path:'/ntdev/blogs', element:<Blogs/>},
  {path:'/ntdev/projectspage', element:<ProjectsPage/>},
  {path:'/ntdev/contact', element:<Contact/>},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
