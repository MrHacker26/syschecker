import React from 'react'
import CompatibilityChecker from './CompatibilityChecker'
import {MdDarkMode} from 'react-icons/md';
import {AiFillGithub} from 'react-icons/ai';
import Switcher from "./Switcher";

const Home = () => {
  return (
    <div className='dark:bg-gray-800 bg-white'> 
    <div  className='text-white fixed right-8 top-4'><Switcher/></div>
    <div className='flex flex-col justify-center h-screen items-center mx-auto w-full'>
    <h1 className='text-black mb-16 text-3xl md:w-fit w-[300px] md:text-5xl font-bold dark:text-white'>System Compatiblity Checker Tool</h1>
    <CompatibilityChecker/>
    <a href='https://www.gogle.com' target='_blank'><AiFillGithub  className='text-black dark:text-white fixed right-8 bottom-5' size={30} /></a>
    </div>
    </div>
  )
}

export default Home