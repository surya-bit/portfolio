import React, { useEffect, useCallback } from 'react'
import harsha from '../assets/harsha.jpeg'
import subhash from '../assets/shubash.jpeg'
import sireesha from '../assets/shreesha.jpeg'
import useEmblaCarousel from 'embla-carousel-react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Autoplay from 'embla-carousel-autoplay'
import './Testimonials.css'
const testimonials = [

    {
        testimonial:
            "During the summer internship Surya exhibited his quick grasp of our complex products and proactive problem solving approach contributed to our project's success",
        name: "Harsha Banda",
        designation: "President and CTO",
        company: "MetaSystems Group",
        image: harsha,
    },
    {
        testimonial:
            "Very few students leave an impact in the dept throught their achievements and contibutions. I take pride in seeing Mr.Suryaraj as an elite member of this group of students in the department",
        name: "Dr. Subhash Kulkarni",
        designation: "Principal",
        company: "PESU Research Foundation",
        image: subhash,
    },
    {
        testimonial:
            "His lab records and grades are a testimonial for the practical skills he possess. During his internship he showed a lot of enthusiasm in learning algorithms",
        name: "Dr. B Sireesha",
        designation: "Associate Professor",
        company: "PES University",
        image: sireesha,
    },
];


const Testimonials = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
    const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [emblaApi])
    const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [emblaApi])
    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API  
        }
    }, [emblaApi])
    return (
        <div className="embla" ref={emblaRef}>

            <div className='embla__container'>
                {testimonials.map((testimonial, index) => (
                    <div className='embla__slide' key={index} >
                        <div className='flex items-center justify-center mt-1 px-6 pt-4'>

                            <img className='rounded-full h-24 mr-2' src={testimonial.image} ></img>

                    <div className='flex flex-col items-center'>
                            <div className='text-slate-500 text-center italic p-2'>
                                "
                               <span> {testimonial.testimonial}</span>
                                "
                            </div>
                            <div>
                                -{testimonial.name}
                            </div>
                       <span className='text-xs italic'> {testimonial.designation}, {testimonial.company}</span>
                    </div>
                        </div>
                    </div>
                ))}

            </div>
            <button className="absolute top-1/2 ml-3" onClick={scrollPrev}>
                <FaChevronLeft />
            </button>
            <button className="absolute top-1/2 right-0 mr-3" onClick={scrollNext}>
                <FaChevronRight />
            </button>
        </div>
    )
}

export default Testimonials
