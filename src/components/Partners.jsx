import Slider from 'react-slick'
import React from 'react';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../styles/Partners.css'
import partnersData  from '../data/partners.json';

const Partners = () => {

    const sliderRef = React.useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            }
        }
        ]
    }

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    }

    const handleNext = () => {
        sliderRef.current.slickNext();
    }

  return (
    <section className="partners">
      <div className="partners-container">
        <div className="partners-header">
            <div data-aos="fade-right" className="header-left">
                <h2>함께하는 <br></br>이들</h2>
                <div className="navigation">
                    <button onClick={handlePrev} className="nav-button prev">←</button>
                    <button onClick={handleNext} className="nav-button next">→</button>
                </div>
            </div>
            <div className="slider-wrapper">
                <Slider ref={sliderRef} {...settings}>
                {partnersData?.partners?.map((partner, index) => (
                    <div key={index} className="partner-slide">
                    <div className="partner-content">
                        <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="partner-logo"
                        loading="lazy"
                        />
                        <h3>{partner.name}</h3>
                        <p>{partner.description}</p>
                    </div>
                    </div>
                ))}
                </Slider>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Partners