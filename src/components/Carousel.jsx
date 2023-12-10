import React, {useEffect, useCallback} from 'react'
import umadison from '../assets/Hero-Bascom.jpg'
import pesu from '../assets/pes.png'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './Testimonials.css'
const universities = [
  {
    fname : "University of ",
    lname: "Wisconsin,Madison",
    image : umadison,
    degree: "Master's in Statistics,Data Science"
  },

  {
    fname: "PES",
    lname:"University",
    image: pesu,
    degree: "Bachelor's in ECE "
  }
]

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const scrollPrev = useCallback(() => {    if (emblaApi) emblaApi.scrollPrev()  }, [emblaApi])
  const scrollNext = useCallback(() => {    if (emblaApi) emblaApi.scrollNext()  }, [emblaApi])
  useEffect(() => {   
     if (emblaApi) {  
          console.log(emblaApi.slideNodes()) // Access API  
          }  }, [emblaApi])
  return (
    <div className="embla" ref={emblaRef}>

    <div className='embla__container'>
    { universities.map((item, index) =>
      (
      <div className='embla__slide'>

    <div className='absolute z-30 text-slate-900 font-black text-black top-0 text-[100px]'>
    <p>{item.fname}</p>
    <p>{item.lname}</p>
    <span className='text-3xl'>
      {item.degree}
    </span>
    </div>
    <img src={item.image} className='h-full w-full blur-[1px] z-20'></img>
    </div>

      ) )
  
    }
    </div>
    </div>
  )
}

export default Carousel
