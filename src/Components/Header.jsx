import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
const moreMenu = [
  { name: "Projects", link:'/ntdev/projectspage' },
  { name: "Skills" , link:'/ntdev/skills' },
  { name: "Certifications" , link:'/ntdev/certifications' },
  { name: "Testimonials" , link:'/ntdev/testimonials' },
  { name: "Blog", link:'/ntdev/blogs' },
];
const menu=[
  {name:"Home", link:"/ntdev/"},
  {name:"About" , link:"/ntdev/portfolio"},
  { name: "Projects", link:'/ntdev/projectspage' },
  { name: "Skills" , link:'/ntdev/skills' },
  { name: "Certifications" , link:'/ntdev/certifications' },
  { name: "Testimonials" , link:'/ntdev/testimonials' },
  { name: "Blog", link:'/ntdev/blogs' },
]
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const[menuOpen,setMenuOpen]=useState(false);
  const handleMenuOpen = () => {
    setIsOpen(!isOpen)
  };
  const handleClickMenu=()=>{
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <div
        className={`bg-[#111a3b] w-full  shadow-md shadow-black rounded-bl-xl rounded-br-xl py-4 px-12 sticky z-10`}
      >
        <div
          className={`max-w-7xl text-white flex justify-between items-center mx-auto`}
        >
          <p className={`text-3xl font-bold`}>NTDEV</p>
          
          <div
            className={`lg:flex gap-12 items-center justify-center text-lg hidden`}
          >
            <ul className={`flex gap-6 `}>
              <li className="hover:text-slate-500 font-semibold group relative">
                <Link to={"/ntdev/"}>Home</Link>

                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300  group-hover:w-full "></span>
              </li>
              <li className="hover:text-slate-500 font-semibold group relative">
                <Link to={"/ntdev/portfolio"}>About</Link>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300  group-hover:w-full "></span>
              </li>
              <div className="relative">
                <li
                  className="hover:text-slate-500 font-semibold group relative cursor-pointer"
                  onClick={handleMenuOpen}
                >
                  More
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300  group-hover:w-full "></span>
                </li>
                {isOpen && (
                  <ul className="absolute bg-slate-200 w-30  left-0 rounded-xl">
                    {moreMenu.map((list, i) => (
                      <li
                        key={i}
                        className="text-black font-semibold px-2 cursor-pointer hover:bg-[#111a3b] hover:text-white duration-300 transition-all"
                      >
                        <Link to={list.link}>{list.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <li className="hover:text-slate-500 font-semibold group relative">
              <Link to={"/ntdev/blogs"}>Blog</Link>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300  group-hover:w-full "></span>
              </li>
            </ul>
            <button
              className={`bg-white text-slate-800 py-2 px-6 rounded-lg hover:bg-transparent hover:outline-3 -outline-offset-2 hover:text-white font-semibold uppercase text-md transition-all duration-300`}
            >
              <Link to={'/ntdev/contact'}>Contact</Link>
            </button>
          </div>
          <div className="lg:hidden block text-4xl ">
            <div className="relative">
            <button onClick={handleClickMenu}><FaBars /></button>
            {menuOpen && <div className="bg-slate-200 text-sm text-black  absolute -left-10 rounded-lg shadow-md shadow-black font-semibold capitalize">
              {menu.map((item,index)=>(
                <li key={index} className="list-none p-1 rounded-lg hover:bg-[#111a3b] hover:text-white duration-300 transition-all"><Link to={item.link} >{item.name}</Link></li>
              ))}
              </div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
