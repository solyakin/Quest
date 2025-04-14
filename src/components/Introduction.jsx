import '../styles/Introduction.css'
import book from '../../public/images/Culture Image Container.png';

const Introduction = () => {
  return (
    <section className="introduction">
      <div data-aos="fade-up">
        <div className="intro-text">
          <h2 className="intro-title">새로운 문화 나눔을 만들어갑니다.</h2>
          <div className='intro-wrapper'>  
            <div className="intro-title intro-img">우리는 
              <img src={book} alt="빵" className="bread-icon" loading="lazy" />
            </div>
            <p className='intro-title'>사색의향기입니다.</p>
          </div>
          <p data-aos="fade-up" data-aos-delay="100" className="intro-description">
          사색의향기는 문학인들의 커뮤니티로서 “행복한 문화 나눔"을 통한 사회 공헌과 선진적이고
          건전한 사회 문화를 만들어나가기 위해 노력하는 비영리 단체입니다.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Introduction