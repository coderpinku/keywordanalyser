import React, { useState } from 'react'
import { AiFillCaretDown, AiOutlineClose } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import {BsFillEnvelopeHeartFill, BsFillCartDashFill, BsFillPeopleFill} from 'react-icons/bs'

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [menuBar, setMenuBar] = useState(false);
    function toggleMenu() {
        setShow(!show)
        setShow1(false)
        setShow2(false)
        setShow3(false)
    }
    function toggleMenu2() {
        setShow1(!show1)
        setShow(false)
        setShow2(false)
        setShow3(false)
    }
    function toggleMenu3() {
        setShow2(!show2)
        setShow(false)
        setShow1(false)
        setShow3(false)
    }
    function toggleMenu4() {
        setShow3(!show3)
        setShow(false)
        setShow1(false)
        setShow2(false)
    }
    return (
        <>
        
        
        <nav className='flex justify-between items-center p-4 border-b-[1.5px]'>
            <div>
                <h1 className='text-3xl font-bold'>Keyword Analyser</h1>
            </div>
            <div className='max-md:hidden'>
                <ul className='flex gap-6 text-[#495057]'>
                    <li onClick={toggleMenu} className='cursor-pointer hover:text-black' >

                        Find Keywords <AiFillCaretDown className='inline' />

                        <ul className='absolute w-40 h-60 border-2 pt-2 top-14 rounded-md shadow bg-white' style={{ display: show ? "block" : "none" }}>
                            <li className='bg-[#6610f2] text-white  w-27 pl-[20px] py-1 font-semibold'>
                                <a href='#'>
                                    <img className='h-4 w-4 inline mr-1' src='./img/google.png' />
                                    <span>
                                        Google
                                    </span>

                                </a>
                            </li>
                            <li className='hover:bg-[#6610f2] w-27 pl-[20px] py-1 font-semibold hover:text-white'>
                                <a href='#'>
                                    <img className='h-4 w-4 inline mr-1' src='./img/playstore.png' />
                                    <span>
                                        PlayStore
                                    </span>

                                </a>
                            </li>
                            <li className='w-27 pl-[20px] py-1 font-semibold hover:text-white hover:bg-[#6610f2]'>
                                <a href='#'>
                                    <img className='h-4 w-4 inline mr-1' src='./img/youtube.png' />
                                    <span>
                                        YouTube
                                    </span>

                                </a>
                            </li>
                            <li className='w-27 pl-[20px] py-1 font-semibold  hover:text-white hover:bg-[#6610f2]'>
                                <a href='#'>
                                    <img className='h-4 w-4 inline mr-1' src='./img/amazon.png' />
                                    <span>
                                        Amazon
                                    </span>

                                </a>
                            </li>
                            <li className='w-27 pl-[20px] py-1 font-semibold  hover:text-white hover:bg-[#6610f2]'>
                                <a href='#'>
                                    <img className='h-4 w-4 inline mr-1' src='./img/twitter.png' />
                                    <span>
                                        Twitter
                                    </span>

                                </a>
                            </li>
                            <li className='w-27 pl-[20px] py-1 font-semibold hover:text-white hover:bg-[#6610f2]'>
                                <a href='#'>
                                    <img className='h-4 w-4 inline mr-1' src='./img/instagram.png' />
                                    <span>
                                        Instagram
                                    </span>

                                </a>
                            </li>
                            <li className='w-27 pl-[20px] py-1 font-semibold hover:text-white hover:bg-[#6610f2]'>
                                <a href='#'>
                                    <img className='h-4 w-4 inline mr-1' src='./img/eBay.png' />
                                    <span>
                                        eBay
                                    </span>

                                </a>
                            </li>
                        </ul>
                    </li>

                    <li onClick={toggleMenu2} className='cursor-pointer hover:text-black'>
                        Check Search Volume <AiFillCaretDown className='inline' />
                        <ul className=' absolute w-40 h-60 border-2 pt-2 top-14 rounded-md shadow bg-white' style={{ display: show1 ? "block" : "none" }}>
                            <li className='bg-[#6610f2] text-white  w-27 pl-[20px] py-1 font-semibold'>
                                <a href='#'>
                                    <img className='h-4 w-4 inline mr-1' src='./img/google.png' />
                                    <span>
                                        Google
                                    </span>

                                </a>
                            </li>
                            <li className='hover:bg-[#6610f2] w-27 pl-[20px] py-1 font-semibold hover:text-white'>
                                <a href='#'>
                                    <img className='h-4 w-4 inline mr-1' src='./img/playstore.png' />
                                    <span>
                                        PlayStore
                                    </span>

                                </a>
                            </li>
                            <li className='w-27 pl-[20px] py-1 font-semibold hover:text-white hover:bg-[#6610f2]'>
                                <a href='#'>
                                    <img className='h-4 w-4 inline mr-1' src='./img/youtube.png' />
                                    <span>
                                        YouTube
                                    </span>

                                </a>
                            </li>
                            <li className='w-27 pl-[20px] py-1 font-semibold  hover:text-white hover:bg-[#6610f2]'>
                                <a href='#'>
                                    <img className='h-4 w-4 inline mr-1' src='./img/amazon.png' />
                                    <span>
                                        Amazon
                                    </span>

                                </a>
                            </li>
                            <li className='w-27 pl-[20px] py-1 font-semibold  hover:text-white hover:bg-[#6610f2]'>
                                <a href='#'>
                                    <img className='h-4 w-4 inline mr-1' src='./img/twitter.png' />
                                    <span>
                                        Twitter
                                    </span>

                                </a>
                            </li>
                            <li className='w-27 pl-[20px] py-1 font-semibold hover:text-white hover:bg-[#6610f2]'>
                                <a href='#'>
                                    <img className='h-4 w-4 inline mr-1' src='./img/instagram.png' />
                                    <span>
                                        Instagram
                                    </span>

                                </a>
                            </li>
                            <li className='w-27 pl-[20px] py-1 font-semibold hover:text-white hover:bg-[#6610f2]'>
                                <a href='#'>
                                    <img className='h-4 w-4 inline mr-1' src='./img/eBay.png' />
                                    <span>
                                        eBay
                                    </span>

                                </a>
                            </li>
                        </ul>
                    </li>
                    <li onClick={toggleMenu3} className='cursor-pointer hover:text-black'>
                        Keyword tool <AiFillCaretDown className='inline' />
                        <ul class="absolute w-[15rem] h-48  border-2 py-2 ml-4 mt-3 flex flex-col gap-1 rounded-md shadow bg-white" style={{ display: show2 ? "flex" : "none" }}>
                            <li className='w-full pl-4 hover:text-white hover:bg-[#6610f2]'>
                                <a href="#">Keyword Tool Pro</a>
                            </li>
                            <li className='w-full pl-4 hover:text-white hover:bg-[#6610f2]'>
                                <a  href="#">Keyword Tool Pro YouTube</a>
                            </li>
                            <li className='w-full pl-4 hover:text-white hover:bg-[#6610f2]'>
                                <a  href="#">Keyword Tool Pro Bing</a>
                            </li>
                            <li className='w-full pl-4 hover:text-white hover:bg-[#6610f2]'>
                                <a  href="#">Keyword Tool Pro Amazon</a>
                            </li>
                            <li className='w-full pl-4 hover:text-white hover:bg-[#6610f2]'>
                                <a  href="#">Keyword Tool Pro eBay</a>
                            </li>
                            <li className='w-full pl-4 hover:text-white hover:bg-[#6610f2]'>
                                <a  href="#">Keyword Tool Pro Instagram</a>
                            </li>
                        </ul>
                    </li>
                    <li onClick={toggleMenu4} className='cursor-pointer hover:text-black'>
                        API Access <AiFillCaretDown className='inline' />
                        <ul class="absolute w-[12rem] h-20  border-2 py-2 ml-4 mt-3 flex flex-col gap-1 rounded-md shadow bg-white" style={{ display: show3 ? "block" : "none" }}>
                            <li className='w-full pl-4 hover:text-white hover:bg-[#6610f2]'>
                                <a href="#">Keyword Tool API</a>
                            </li>
                            <li className='w-full pl-4 hover:text-white hover:bg-[#6610f2]'>
                                <a href="#">API Documentation</a>
                            </li>
                            </ul>
                    </li>
                </ul>
            </div>
            <div className='max-md:hidden'>
                <ul className='flex gap-6 '>
                    <li><a href='#' className='text-[#6610f2] hover:contrast-200'><BsFillEnvelopeHeartFill className='inline mb-1' /> Contact</a></li>
                    <li><a href='#' className='text-[#6610f2] hover:contrast-200'><BsFillCartDashFill className='inline mb-1' /> Keyword</a></li>
                    <li><a href='#' className='bg-[#6610f2] hover:contrast-200 px-4 py-2 rounded-full text-white'><BsFillPeopleFill className='inline mb-1' /> Login</a></li>
                </ul>
            </div>
            <div className='hidden max-md:block' onClick={() => setMenuBar(!menuBar)}>
                {
                    menuBar ?
                    
                    <AiOutlineClose size={25} className='mt-3' />
                    :
                    <RxHamburgerMenu size={25} className='mt-3' />
                }
            </div>
                </nav>
            <div className={menuBar ? 'flex flex-col top-0 left-0 bg-white h-screen w-[80%] absolute p-4 border-[1.5px] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
            <div>
                <h1 className='text-2xl font-bold'>Keyword Analyser</h1>
            </div>
            <div className=''>
                <ul className='flex flex-col gap-4 mt-8 '>
                    <li onClick={toggleMenu} className='cursor-pointer'>

                        Find Keywords <AiFillCaretDown className='inline' />

                        <ul className='absolute w-40 h-60 border-2 pt-2 top-[6.5rem] rounded-md shadow bg-white' style={{ display: show ? "block" : "none" }}>
                            <li className='bg-[#6610f2] text-white  w-27 pl-[20px] py-1 font-semibold'>
                                <a href='#'>
                                    <img className='h-4 w-4 inline mr-1' src='./img/google.png' />
                                    <span>
                                        Google
                                    </span>

                                </a>
                            </li>
                            <li className='hover:bg-[#6610f2] w-27 pl-[20px] py-1 font-semibold hover:text-white'>
                                <a href='#'>
                                    <img className='h-4 w-4 inline mr-1' src='./img/playstore.png' />
                                    <span>
                                        PlayStore
                                    </span>

                                </a>
                            </li>
                            <li className='w-27 pl-[20px] py-1 font-semibold hover:text-white hover:bg-[#6610f2]'>
                                <a href='#'>
                                    <img className='h-4 w-4 inline mr-1' src='./img/youtube.png' />
                                    <span>
                                        YouTube
                                    </span>

                                </a>
                            </li>
                            <li className='w-27 pl-[20px] py-1 font-semibold  hover:text-white hover:bg-[#6610f2]'>
                                <a href='#'>
                                    <img className='h-4 w-4 inline mr-1' src='./img/amazon.png' />
                                    <span>
                                        Amazon
                                    </span>

                                </a>
                            </li>
                            <li className='w-27 pl-[20px] py-1 font-semibold  hover:text-white hover:bg-[#6610f2]'>
                                <a href='#'>
                                    <img className='h-4 w-4 inline mr-1' src='./img/twitter.png' />
                                    <span>
                                        Twitter
                                    </span>

                                </a>
                            </li>
                            <li className='w-27 pl-[20px] py-1 font-semibold hover:text-white hover:bg-[#6610f2]'>
                                <a href='#'>
                                    <img className='h-4 w-4 inline mr-1' src='./img/instagram.png' />
                                    <span>
                                        Instagram
                                    </span>

                                </a>
                            </li>
                            <li className='w-27 pl-[20px] py-1 font-semibold hover:text-white hover:bg-[#6610f2]'>
                                <a href='#'>
                                    <img className='h-4 w-4 inline mr-1' src='./img/eBay.png' />
                                    <span>
                                        eBay
                                    </span>

                                </a>
                            </li>
                        </ul>
                    </li>

                    <li onClick={toggleMenu2}>
                        Check Search Volume <AiFillCaretDown className='inline' />
                        <ul className=' absolute w-40 h-60 border-2 pt-2 top-[8.5rem] rounded-md shadow bg-white' style={{ display: show1 ? "block" : "none" }}>
                            <li className='bg-[#6610f2] text-white  w-27 pl-[20px] py-1 font-semibold'>
                                <a href='#'>
                                    <img className='h-4 w-4 inline mr-1' src='./img/google.png' />
                                    <span>
                                        Google
                                    </span>

                                </a>
                            </li>
                            <li className='hover:bg-[#6610f2] w-27 pl-[20px] py-1 font-semibold hover:text-white'>
                                <a href='#'>
                                    <img className='h-4 w-4 inline mr-1' src='./img/playstore.png' />
                                    <span>
                                        PlayStore
                                    </span>

                                </a>
                            </li>
                            <li className='w-27 pl-[20px] py-1 font-semibold hover:text-white hover:bg-[#6610f2]'>
                                <a href='#'>
                                    <img className='h-4 w-4 inline mr-1' src='./img/youtube.png' />
                                    <span>
                                        YouTube
                                    </span>

                                </a>
                            </li>
                            <li className='w-27 pl-[20px] py-1 font-semibold  hover:text-white hover:bg-[#6610f2]'>
                                <a href='#'>
                                    <img className='h-4 w-4 inline mr-1' src='./img/amazon.png' />
                                    <span>
                                        Amazon
                                    </span>

                                </a>
                            </li>
                            <li className='w-27 pl-[20px] py-1 font-semibold  hover:text-white hover:bg-[#6610f2]'>
                                <a href='#'>
                                    <img className='h-4 w-4 inline mr-1' src='./img/twitter.png' />
                                    <span>
                                        Twitter
                                    </span>

                                </a>
                            </li>
                            <li className='w-27 pl-[20px] py-1 font-semibold hover:text-white hover:bg-[#6610f2]'>
                                <a href='#'>
                                    <img className='h-4 w-4 inline mr-1' src='./img/instagram.png' />
                                    <span>
                                        Instagram
                                    </span>

                                </a>
                            </li>
                            <li className='w-27 pl-[20px] py-1 font-semibold hover:text-white hover:bg-[#6610f2]'>
                                <a href='#'>
                                    <img className='h-4 w-4 inline mr-1' src='./img/eBay.png' />
                                    <span>
                                        eBay
                                    </span>

                                </a>
                            </li>
                        </ul>
                    </li>
                    <li onClick={toggleMenu3}>
                        Keyword tool <AiFillCaretDown className='inline' />
                        <ul class="absolute w-[15rem] h-48  border-2 py-2 ml-4 mt-3 flex flex-col gap-1 rounded-md shadow bg-white" style={{ display: show2 ? "flex" : "none" }}>
                            <li className='w-full pl-4 hover:text-white hover:bg-[#6610f2]'>
                                <a href="#">Keyword Tool Pro</a>
                            </li>
                            <li className='w-full pl-4 hover:text-white hover:bg-[#6610f2]'>
                                <a  href="#">Keyword Tool Pro YouTube</a>
                            </li>
                            <li className='w-full pl-4 hover:text-white hover:bg-[#6610f2]'>
                                <a  href="#">Keyword Tool Pro Bing</a>
                            </li>
                            <li className='w-full pl-4 hover:text-white hover:bg-[#6610f2]'>
                                <a  href="#">Keyword Tool Pro Amazon</a>
                            </li>
                            <li className='w-full pl-4 hover:text-white hover:bg-[#6610f2]'>
                                <a  href="#">Keyword Tool Pro eBay</a>
                            </li>
                            <li className='w-full pl-4 hover:text-white hover:bg-[#6610f2]'>
                                <a  href="#">Keyword Tool Pro Instagram</a>
                            </li>
                        </ul>
                    </li>
                    <li onClick={toggleMenu4}>
                        API Access <AiFillCaretDown className='inline' />
                        <ul class="absolute w-[12rem] h-20  border-2 py-2 ml-4 mt-3 flex flex-col gap-1 rounded-md shadow bg-white" style={{ display: show3 ? "block" : "none" }}>
                            <li className='w-full pl-4 hover:text-white hover:bg-[#6610f2]'>
                                <a href="#">Keyword Tool API</a>
                            </li>
                            <li className='w-full pl-4 hover:text-white hover:bg-[#6610f2]'>
                                <a href="#">API Documentation</a>
                            </li>
                            </ul>
                    </li>
                </ul>
            </div>
            <div className='mt-4'>
            <ul className='flex flex-col gap-4 '>
                    <li><a href='#'> Contact</a></li>
                    <li><a href='#'> Keyword</a></li>
                    <li><a href='#'> Login</a></li>
                </ul>
            </div>
            
        </div>
        </>
    )
}

export default Navbar