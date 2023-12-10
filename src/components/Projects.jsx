import React, { useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Autoplay from 'embla-carousel-autoplay'
import { FaGithub } from 'react-icons/fa';
import project1 from '../assets/project1.jpeg'
import project2 from '../assets/project2.jpeg'
import project3 from '../assets/project3.jpg'
const projects = [
    {
        name:"Reciept forecast Pro",
        description:"Machine Learning based prediction application with XGBoost Regressor for Univariate time series data" ,
        tags:[
            "#Python",
            "LSTM",
            "#XGBoost",
            "Docker"
        ],
        image:project1,
        github_link:"https://github.com/surya-bit/ML-Application",

    },

    {
        name:"Intelligent offer search tool",
        description:"Web application based ETL tool that uses ALBERT encoder-decoder model with NLP tokenization, fortified by Elasticsearch",
        tags:[
            "#Python",
            "#ReactJS",
            "Transformers",
            "#ElascticSearch"
        ],
        image:project2,
        github_link:"https://github.com/surya-bit/nlp-app",

    },

    {
      name:"Microbiology-Image-Classification-Model",
      description:"The model is designed to classify microbiology images into one of four classes: Blasto, Positives, Negatives, and Background",
      tags:[
          "#Python",
          "#sklearn",
          "#Image processing "
      ],
      image:project3,
      github_link:"https://github.com/surya-bit/Microbiology-Image-Classification-Model-with-NasNet-Large",

  }

]

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  github_link,
}) => {
  return (
   <>
      <div className='relative w-full h-3/5'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-fit'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(github_link)}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer text-black'
            >
              <FaGithub
              className={index === 0 ? 'text-black': 'text-white'} />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag}`}
              className='text-[14px] text-pink-600 '
            >
              {tag}
            </p>
          ))}
        </div>
      </>
  );
};

const Projects = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
    const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [emblaApi])
    const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [emblaApi])
    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API  
        }
    }, [emblaApi])
  return (
    <>

        <div className="embla" ref={emblaRef}>

            <div className='embla__container'>
        {projects.map((project, index) => (
                    <div className='embla__slide' key={index} >
          <ProjectCard key={`project-${index}`} index={index} {...project} />
            <button className={index === 1 ? "absolute top-1/2 ml-3":  "absolute top-1/2 ml-3 text-black"} onClick={scrollPrev}>
                <FaChevronLeft />
            </button>
            <button className={index === 2 ? "absolute top-1/2 right-0 mr-3":"absolute top-1/2 right-0 mr-3 text-black"} onClick={scrollNext}>
                <FaChevronRight />
            </button>
        </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Projects;
