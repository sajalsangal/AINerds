import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  //check scrolled and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const handleMenuItem = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false)
  }

  const menuItems = [
    { id: "home", label: "Home", href: "https://www.linkedin.com/feed/" },
    { id: "uploadResume", label: "Upload Resume", href: "https://www.linkedin.com/feed/" },
    { id: "dashboard", label: "Dashboard", href: "https://www.linkedin.com/feed/" },
    { id: "aiNews", label: "AI News", href: "https://www.linkedin.com/feed/" }
  ]
  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] ${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}>
      <div className='text-white py-5 flex justify-between items-center'>
        {/*Logo*/}
        <div className='text-lg font-semibold cursor-pointer'>
          <span className='text-[#8245ec]'>&lt;</span>
          <span className='text-black'>AI</span>
          <span className='text-[#8245ec]'>/</span>
          <span className='text-black'>Nerds</span>
          <span className='text-[#8245ec]'>&gt;</span>
        </div>

        {/*Desktop Menu */}
        <ul className='md:flex space-x-8 text-black'>
          {menuItems.map((item) => (
            <li key={item.id} className={`hidden md:flex cursor-pointer hover:text-[#AA7FF0] hover:font-semibold ${activeSection === item.id ? "text-[#AA7FF0] font-semibold" : ""
              }`}>
              <a href={item.href}>
                <button onClick={() => handleMenuItem(item.id)}>
                  {item.label}
                </button>
              </a>
            </li>
          ))}

          <div className='space-x-4 flex'>
            <a
              href="https://www.linkedin.com/feed/"
              target='_blank'
              rel='noopener noreferrer'
              className='text-black hover:text-[#AA7FF0]'
            >
              <FaWhatsapp size={28} />
            </a>

            {
              isOpen ? (
                <FiX className='md:hidden text-3xl cursor-pointer '
                  onClick={() => setIsOpen(false)}
                />
              ) : (
                <FiMenu className='md:hidden text-3xl cursor-pointer'
                  onClick={() => setIsOpen(true)}
                />
              )
            }
          </div>
        </ul>
      </div>

      {/**Mobile menu items */}

      {isOpen && (
        <div className='absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg'>
          <ul className='flex flex-col items-center space-y-4 py-4 text-gray-300'>
            {menuItems.map((item) => (
              <li key={item.id} className={`cursor-pointer hover:text-white hover:font-semibold ${activeSection === item.id ? "text-[#8254ec] font-semibold" : ""
                }`}>
                <a href={item.href}>
                  <button onClick={() => handleMenuItem(item.id)}>
                    {item.label}
                  </button>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar