import { useState } from 'react'
import {FaGithub, FaLinkedin, FaTwitter, FaPython, FaCss3, FaJs, FaDocker, FaGithubAlt} from 'react-icons/fa'
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs'
import databricks from './assets/databricks.svg'
import apache from './assets/apache.svg'
import sql from './assets/sql.svg'
import umadison from './assets/Hero-Bascom.jpg'
import profilePic from './assets/Surya.jpg'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Carousel from './components/Carousel'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import './App.css'


const carousel = () => {
  
  return (
  <div>
  <img className='absolute' src={umadison}></img>
  <div className='absolute font-black t-0 text-black text-3xl'>
  University of Wisconsin,Madison
  </div>
  </div>
  )
}

function App() {
    const [active, setActive] = useState('about')
    const [seen, setSeen ] = useState(false)

  function togglePop () {
    setSeen(!seen);
}

return (
    <div className='h-screen grid grid-cols-12 grid-rows-5'>
    <div className='col-span-4 border-r border-slate-200 flex items-center font-black text-3xl p-9'>
    Suryaraj Machani
    </div>
    <div className='col-span-4 border-r  border-gray-400 flex items-center justify-evenly'>
    <div className={active === 'about' ? 'text-purple-950 font-black cursor-pointer' : 'font-black cursor-pointer' } onClick={() => setActive('about')}>ABOUT</div>
    <div className={active === 'work' ? 'text-purple-950 font-black cursor-pointer' : 'font-black cursor-pointer' } onClick={() => setActive('work')}>WORK</div>

      </div>
      <div className='col-span-2 border-r border-gray-400 flex items-center justify-evenly'>
      <a href='https://www.github.com/surya-bit'>
      <FaGithub size={25} className='hover:text-black' />
      </a>
      <a href='https://www.linkedin.com/in/surya-machani-8a8839154/'>
      <FaLinkedin size={25} className='hover:text-blue-900' />
      </a>
      <a href='https://twitter.com/machani_?t=4B5XPmT_hJvAfX3Pjc8fvA&s=09'>
      <FaTwitter size={25} className='hover:text-blue-500'  />
      </a>
      
      </div>
      <div onClick={() => setSeen(true)} className='col-span-2 flex items-center justify-center cursor-pointer font-black text-xl'>
      GET IN TOUCH
      {seen ? <Contact className='absolute z-20 top-1/2 left-1/2' seen={seen} togglePop={togglePop}  /> : null }
      </div>
      <div className='col-span-8 row-span-3 border-y border-gray-400'>
        {
          active === 'about'?
          <div className='h-full w-full contain-fit'> 
          {/*<img src={umadison} className='h-full w-full'></img>*/}
          <Carousel className='z-1' />
          </div>
          :
        <div className='w-full h-full overflow-scroll'>
                <Experience  />
                </div>
  }
      
      </div>
      <div className='col-span-4 row-span-3 border-y border-l border-gray-400 flex flex-col justify-evenly items-center'>
      {active === 'about' ? 
          <div className='flex flex-col items-center justify-evenly' >
          <div className='w-3/5 h-3/5'>
          <img className='rounded-full' src={profilePic} ></img>

      </div>
      <div className='mt-10 text-gray-100 text-center'>
      As a Master's student in Datascience at the University of Wisconsin-Madison, I am passionate about applying artificial intelligence and machine learning to solve real-world problems. I am always eager to learn new technologies and methods, and I aspire to become a leader and a contributor in the field of Data Science and AI.
      </div>
      </div>
       : 
       <Projects /> 
     }
      </div>
      <div className='col-span-8 border-b  border-gray-400 flex items-center justify-between'>
      {
        active === 'about' ?   <div className='flex items-center justify-center px-3 '>
        
      <span className='text-3xl font-black'>Skills:</span>
      
      <div className='ml-10'>
        
        <FaPython size={40} />
        Python
        </div>

      <div className='ml-10 flex flex-col item-center justify-center'>
      <img src='https://developer.sas.com/guides/r/_jcr_content/par/styledcontainer_1d31/par/image.img.png/1522676368103.png' className='h-12 ' />

          <div>R</div> 
      </div>


          <div className='ml-10 text-white'>

          <img src={databricks} className='h-12 '  /> 
          Databricks
          </div> 
          <div className='ml-10'>

          <img src={apache} className='h-12'  /> 
          Pyspark
          </div> 
          <div className='ml-10'>

          <img src={sql} className='h-12'  /> 
         SQL 
          </div> 
          <div className='ml-10'>

          <FaGithub size={40} />
          Git 
          </div>

      <div className='ml-10'>
        
        <FaDocker size={40} />
        Docker
        </div> 

          { /* <img className='p-10' src='https://uploads-ssl.webflow.com/60c0a5bb9df18e0c7bea5c2c/60c4acf1be141ddaf108cf16_plus-shape.svg'></img> */ }
      </div> 
     :
      <Testimonials className='border-b ' />
      }
        </div>
      <div className='col-span-2 border-b border-x border-gray-400 flex items-center justify-center'> 
        <BsArrowLeft size={60} onClick={() => setActive('about')} />
      </div>
      <div className='col-span-2 border-b  border-gray-400 flex items-center justify-center'>
      <BsArrowRight size={60} onClick={() => setActive('work')} />
      
          </div>
    </div>
  )
}

export default App
