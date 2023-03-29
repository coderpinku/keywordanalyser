import React, { useState } from 'react'
import { AiFillCaretDown, AiOutlineSearch } from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
const Main = () => {
const [showdata, setShowData] = useState(false);
  const searchData = ()=>{
    setShowData(true)
  }
  return (
    <div className='mt-28'>
      <div>
        <h1 className="text-4xl mb-4 text-center font-semibold text-[#495057]"> Find Great Keywords Using Google Autocomplete </h1>
      </div>
      <div>
        <ul className='flex max-md:flex-wrap justify-center gap-2  items-center max-md:[&>:not(:first-child)]:hidden max-md:justify-start max-md:pl-2'>
          <li className='w-27 pl-[20px] py-1 font-semibold border-b-[3px] border-[#6610f2]'>
            <a href='#'>
              <img className='h-6 w-6 inline mr-1' src='./img/google.png' />
              <span>
                Google
                <AiFillCaretDown className='max-md:inline hidden max-md:block' />
              </span>

            </a>
          </li>
          <li className='w-27 pl-[20px] py-1 font-semibold hover:border-b-[3px] border-[#6610f2]'>
            <a href='#'>
              <img className='h-6 w-6 inline mr-1' src='./img/playstore.png' />


            </a>
          </li>
          <li className='w-27 pl-[20px] py-1 font-semibold    hover:border-b-[3px] border-[#6610f2]'>
            <a href='#'>
              <img className='h-6 w-6 inline mr-1' src='./img/youtube.png' />


            </a>
          </li>
          <li className='w-27 pl-[20px] py-1 font-semibold    hover:border-b-[3px] border-[#6610f2] '>
            <a href='#'>
              <img className='h-6 w-6 inline mr-1' src='./img/amazon.png' />


            </a>
          </li>
          <li className='w-27 pl-[20px] py-1 font-semibold    hover:border-b-[3px] border-[#6610f2] '>
            <a href='#'>
              <img className='h-6 w-6 inline mr-1' src='./img/twitter.png' />


            </a>
          </li>
          <li className='w-27 pl-[20px] py-1 font-semibold  hover:border-b-[3px] border-[#6610f2]  '>
            <a href='#'>
              <img className='h-6 w-6 inline mr-1' src='./img/instagram.png' />

            </a>
          </li>
          <li className='w-27 pl-[20px] py-1 font-semibold   hover:border-b-[3px] border-[#6610f2] '>
            <a href='#'>
              <img className='h-6 w-6 inline mr-1' src='./img/eBay.png' />

            </a>
          </li>
        </ul>
      </div>

      <div className='flex justify-center items-center mt-4 max-md:flex-wrap'>

        <div className='flex max-md:flex-[1_1_20rem]'>
          <div className='h-[2.3rem] pt-1 border-[#495057] border-[1px] border-r-[0px] rounded-l-full text-[#495057] '>
            <span className='cursor-pointer pl-2 pr-1'>All <AiFillCaretDown className='inline' /></span>
         </div>
          <input type="text" placeholder='type a keyword and press enter' className='max-md:flex-[1_1_20rem] h-[2.3rem] border-[#495057] border-[1px] border-r-[0px] px-2 focus:outline-none focus:border-[#6610f2] max-md:border-r-[1px] max-md:rounded-r-full' />
    </div>
          <input type="text" placeholder='Global / Worldwide (All Countries)' className='max-md:flex-[1_1_20rem] w-[18rem] h-[2.3rem] border-[#495057] border-[1px] pl-2 max-md:rounded-full border-r-[0px] focus:outline-none max-md:rounded-l-full max-md:mt-4' />
          <select className='max-md:flex-[1_1_20rem] w-[8rem] h-[2.3rem] max-md:rounded-full focus:outline-none border-[#495057] border-[1px] max-md:mt-4 border-r-[0px] text-[#495057] cursor-pointer'>
            <option>English</option>
            <option>Hindi</option>
            <option>Malyalam</option>
            <option>French</option>
          </select>

       <div className='h-[2.3rem] ml-0 pr-2 pt-1 border-[#6610f2] border-[2px] bg-[#6610f2] hover:contrast-200 max-md:flex-[1_1_20rem] text-white rounded-r-full max-md:hidden'>
          <button className='cursor-pointer ' onClick={searchData}><AiOutlineSearch size={18} className='inline mx-4 ' /></button>
        </div>

        <div className='hidden max-md:block h-[2.3rem] w-[40rem] text-center mt-3 ml-0 pr-2 pt-1 border-[#6610f2] border-[1px] bg-[#6610f2] text-white rounded-full'>
          <button className='cursor-pointer ' onClick={searchData}><AiOutlineSearch size={20} className='inline'/> Serach</button>
        </div>
      </div>

      <div className='mt-12 text-[#495057] hidden' style={{display: showdata ? "block" : "none"}}>
        <div className='flex justify-evenly max-md:flex-wrap max-md:gap-8'>
          <div>Total Keywords
          <p className='text-black font-bold text-3xl'>56</p>
          </div>
          <div>Total Search <BsFillInfoCircleFill className='inline mb-1'/>
          <p className='text-black font-bold text-3xl'>88,880</p>
          </div>
          <div>Avarage Trend <BsFillInfoCircleFill className='inline mb-1'/>
          <p className='text-black font-bold text-3xl'>88%</p>
          </div>
          <div>Avarage CPC <BsFillInfoCircleFill className='inline mb-1'/>
          <p className='text-black font-bold text-3xl'>5.6</p>
          
          </div>
          <div>Competition <BsFillInfoCircleFill className='inline mb-1'/>
          <p className='text-black font-bold text-3xl'>8.66</p>
          
          </div>
        </div>
      </div>

    </div>
  )
}

export default Main