import logo from './logo.svg';
import './App.css';
import Page1 from './components/Page1';
import {useState,useEffect} from 'react';
import About from './components/About';
import Section3 from './components/Section3';
import NewsCategories from './components/NewsCategories';
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import News from './components/News';
import Common from './components/Common';
import FullStory from './components/FullStory'
import Idwise from './components/Idwise'


function App() {
  const [about,setAbout]=useState([])
  const [categories,setCategories]=useState([])
  const [news,setNews]=useState([])
  const [item,setItem]=useState({})

 useEffect(()=>{

 
  
  
const getTasks= async()=>{
  await fetchData()
  
}
const getTasks2= async()=>{
  await fetchData2()
}
const getTasks3=async()=>{
  await fetchData3()
}

getTasks()
getTasks2()
getTasks3()
 
  
 

 },[])


 const fetchData=async()=>{
  const res=await fetch('http://localhost:5000/about')
  const data=await res.json()
  console.log(data)
  setAbout(data)
}
const fetchData2=async()=>{ 
  const res1=await fetch('http://localhost:5000/categories')
  const data1=await res1.json()
  console.log(data1)
  setCategories(data1)}

  const fetchData3=async()=>{ 
    const res1=await fetch('http://localhost:5000/newsCategories')
    const data1=await res1.json()
    console.log(data1)
    setNews(data1)
  }

  const stateUp=(item)=>{
    setItem(item)
  }
 

 


  return (
   
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path='/' element={<Page1/>}/>
      <Route path='/about' element={<About about={about} categories={categories}/>}/>
      <Route path='/news' element={<News/>}/>
      <Route path='/news/:id' element={<Common/>}/>
      <Route path='/news/story/:id1' element={<Idwise/>}/>
      <Route path='/news/:id/fullstory' element={<FullStory item={item}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  
  );
}

export default App;
