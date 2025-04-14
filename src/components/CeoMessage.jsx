import '../styles/CeoMessage.css'
import ceo from '../../public/images/Chairman Image Container.svg';
import signature from '../../public/images/signature.png';

const CeoMessage = () => {
  return (
    <section className="ceo-message">
        <div data-aos="fade-right" className="message-wrapper">
            <h3>이사장 인사말.</h3>
            <div className="message-text">
                <p>안녕하세요, 사색의향기 이사장 오덕균 입니다.</p>
                <p>사색의향기는 ‘행복한 문화 나눔’을 통해 더 나은 사회를 만들어가고자
                노력해왔습니다. 앞으로도 문학과 인문학의 가치를 공유하며, 열린 커뮤니티로서 함께 성장하겠습니다.</p>
                <p>많은 관심과 응원 부탁드립니다. 감사합니다.</p>
            </div>
            <div className="signature-wrapper">
                <p>사단법인 사색의향기  이사장 오덕균</p>
                <img src={signature} alt="signature" className="signature" loading="lazy"/>
            </div>
            <p className='note'>인터뷰 더 보기</p>
        </div>
        <div data-aos="fade-left" className="ceo-image">
            <img src={ceo} alt="CEO" />
        </div>
    </section>
  )
}

export default CeoMessage;