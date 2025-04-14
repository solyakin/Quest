import '../styles/DonationSection.css'
import Handshake from '../../public/images/heart-Handshake.svg';

const DonationSection = () => {
  return (
    <section className="donation-section">
      <h2 className="donation-title">기부를 통해 따뜻한 마음을 보내고 싶다면,</h2>
      <div className="donation-info">
        <p className="donation-subtitle">후원계좌 안내</p>
        <p className="donation-account">국민 924501-01-351204 / 사단법인 사색의향기</p>
        <div className="donation-buttons">
          <button className="donation-btn regular">
            <img src={Handshake} alt="" loading="lazy" />
            정기 후원
          </button>
          <button className="donation-btn once">일시 후원</button>
        </div>
      </div>
    </section>
  )
}

export default DonationSection