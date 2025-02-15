import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
  👨‍💻 Hi, I'm Kollimarla Gnaneswar, a passionate Software Developer with a strong focus on building scalable and optimized backend systems. I specialize in Java, MERN stack, and cloud technologies, crafting high-performance applications with efficiency and user experience in mind.
  <br />
  🚀 As a <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/your-link/' target='_blank'>Software Developer</a>, I thrive on solving complex problems and delivering seamless digital solutions.
  <br />
  ✍️ Beyond coding, I enjoy sharing insights through engaging blogs on <a className='text-purple-300 hover:text-purple-400 duration-300' href="https://medium.com/@your-medium" target='_blank'>Medium</a>, exploring software development and technology trends.
  <br />
  📸 In my free time, I also have an interest in photography—capturing moments and telling stories through visuals.
</p>

            <ButtonLink
              url='https://drive.google.com/file/d/1doFMUEIhs5WnHKZrognat3IYZRycwd0v/view?usp=sharing'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;