import React, {useState} from 'react'
import {FaTimes} from 'react-icons/fa'
import emailjs from '@emailjs/browser'
function handleLogin(e) {
    e.preventDefault()
    // Code to handle login goes here
    
}



const Contact = ({togglePop}) => {
    
    const [form , setForm ] = useState({
        name:'',
        email:'',
        message: '',
    
      })
      const [loading, setLoading ] = useState(false)
    
      const handleChange = (e) => {
          const {name , value } = e.target;
          
          setForm({...form, [name]: value})
      }
    
      const handleSubmit = (e) => {
        //console.log(process.env.SERVICE_ID)
        e.preventDefault();
        setLoading(true)
        emailjs.send(
        'service_7fsk847',
        'template_iqlx1ve',
        {
          from_name: form.name,
          to_name: 'Suryaraj',
          from_email: form.email,
          to_email: 'suryamachani23562@gmail.com',
          message: form.message,
        },
        '30WQVvIXBVIrtZJpx'
        ).then(() => {
          setLoading(false);
          togglePop();
          alert('Thank you. I will get back to you as soon as possible.');
          setForm({
            name:'',
            email:'',
            message:'',
          })
        }, (error) => {
        setLoading(false)
        console.log(error)
        alert("something went wrong")
      })}

    const closeTab = () => {
    togglePop()
    }
        return (
    <div className="absolute backdrop-blur z-50 left-0 top-0 w-full h-full overflow-auto bg-transparent text-black">
        <div className="items-center text-black absolute left-0 top-0 p-10 rounded-10 h-auto w-1/2">
        <div className='flex items-center justify-between'>
        <p  className='text-white text-3xl font-black' >Get in touch</p>
        <button onClick={closeTab} >
        
        <FaTimes size={30} className='text-white cursor-pointer hover:text-red-700' />
        </button>
        </div>
        <form
        
        onSubmit={handleSubmit}
        className='flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-black mb-4'>Your Name</span>
            <input
            type='text'
            name='name'
            value={form.name}
            onChange={handleChange}
            placeholder='What is your name?'
            className='bg-tertiary py-4 px-4 placeholder:text-secondary text-black bg-gray-100 rounded-lg outlined-none border-none font-medium'
            />

          </label>
          <label className='flex flex-col'>
            <span className='text-white font-black mb-4'>Your Email</span>
            <input
            type='email'
            name='email'
            value={form.email}
            onChange={handleChange}
            placeholder='What is your email?'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black bg-gray-100 rounded-lg outlined-none border-none font-medium'
            />
          
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-black mb-4'>Your Message</span>
            <textarea
            rows='7'
            name='message'
            value={form.message}
            onChange={handleChange}
            placeholder='What do you want to say?'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black bg-gray-100 rounded-lg outlined-none border-none font-medium'
            />
          
          </label>

          <button 
          type='submit'
          className='bg-[#050A18] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          
          >
            {loading ? 'Sending' : 'Send'}
          </button>
        </form>
        </div>
            </div>
        )
    
  
}

export default Contact
