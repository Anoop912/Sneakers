import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Hero from './pages/Hero.jsx'
import ForMens from './pages/ForMens.jsx'
import ForWomens from './pages/ForWomens.jsx'
import ForKids from './pages/ForKids.jsx'
import NewArived from './pages/NewArived.jsx'
import Categories from './pages/Categories.jsx'
import LookBack from './pages/LookBack.jsx'
function App() {
 
  return (
    <>
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/ForMen' element={<ForMens/>}/>
        <Route path='/ForWomen' element={<ForWomens/>}/>
        <Route path='/ForKids' element={<ForKids/>}/>
        <Route path='/NewArrivals' element={<NewArived/>}/>
        <Route path='/Categories' element={<Categories/>}/>
        <Route path='/Lookbook' element={<LookBack/>}/>
       </Routes>
       <Footer/>
       </BrowserRouter>

    </>
  )
}

export default App
