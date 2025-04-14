import { useState } from 'react'
import '../styles/Hero.css'
import heroImage from '../../public/images/hero-1.png'
import line from '../../public/images/Line 1.svg';

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: heroImage,
      title: '함께하는 마음이 만드는 소중한 변화',
      subtitle: '특별한 나눔',
      description: '즐거움과 나눔이 있는 감동의 순간'
    },
    {
      image: heroImage,
      title: '함께하는 마음이 만드는 소중한 변화',
      subtitle: '특별한 나눔',
      description: '즐거움과 나눔이 있는 감동의 순간'
    }
  ]

    const nextSlide = () => {
        setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    }

  return (
    <div className="container">
        <div className="hero-container">
            {slides.map((slide, index) => (
                <div 
                key={index} 
                className={`hero-slide ${index === activeSlide ? 'active' : ''}`}
                style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="hero-content">
                        <p className="hero-subtitle">{slide.subtitle}</p>
                        <img src={line} alt="" className='line' loading="lazy" />
                        <h1 className="hero-title">{slide.title}</h1>
                        <p className='hero-descripiton'>{slide.description}</p>
                    </div>
                </div>
            ))}
            <div className="slide-navigation">
                <div className="slide-numbers">
                    <span className={`current ${activeSlide === 0 ? "isActive-0" : ""}`}>1</span>
                    <span className={`total ${activeSlide === 1 ? "isActive-1" : ""}`}>{slides.length}</span>
                </div>
                <div className="arrow-buttons">
                    <button onClick={prevSlide} className="nav-btn prev">←</button>
                    <button onClick={nextSlide} className="nav-btn next">→</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero