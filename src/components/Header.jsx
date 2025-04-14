import { useState } from 'react'
import '../styles/Header.css'
import logo from '../../public/images/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (

    <header className="container">
        <div className="header">
            <div className="logo">
                <img src={logo} alt="사색의향기" />
            </div>
            <button 
                className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <a href="#" className="nav-link orange">소개</a>
                <a href="#" className="nav-link">소소담담 APP</a>
                <a href="#" className="nav-link">활동</a>
                <div className="language-select">
                <select>
                    <option value="KOR">KOR</option>
                    <option value="ENG">ENG</option>
                </select>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header