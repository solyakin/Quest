import '../styles/Footer.css'
import logo from '../../public/images/footer-logo.svg'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-left">
                    <img src={logo} alt="사색의향기" className="footer-logo" loading='lazy' />
                    <div className="company-info">
                        <p className='first-text'>
                            <span className='text-white'>개인정보 처리방침</span>
                            <span className='text-white'>이용약관</span>
                            <span className='text-gray'>고객센터 평일 08:00~19:00 (주말 및 공휴일 휴무)</span>
                        </p>
                        <p className='second-text'>
                            <span className='span-white'>사단법인 사색의향기</span>
                            <span className='span-gray'>이사장</span>
                            <span className='span-white'>오덕균</span>
                            <span className='span-gray'>고유번호</span>
                            <span className='span-white'>355-82-00129</span>
                        </p>
                        <p className='third-text'>
                            <span className='text-gray'>주소</span>
                            <span className='text-white'>서울시 강남구 테헤란로 19길 28 이현빌딩3층(역삼동)</span>
                            <span className='text-gray'>전화</span>
                            <span className='text-white'>02-539-5101</span>
                            <span className='text-gray'>팩스</span>
                            <span className='text-white'>070-8668-5091</span>
                            <span className='text-gray'>이메일</span>
                            <span className='text-white'>cuppy@cuppy.com</span>
                        </p>
                    </div>
                    <p className="copyright">Copyright © 2025 사색의향기. All Rights Reserved</p>
                </div>
                <div className="footer-right">
                    <div className="newsletter">
                        <h3>뉴스레터 구독하기</h3>
                        <p>이메일 구독을 통해 사색의향기의 최신 소식과 교육 및 이벤트 소식을 빠르게 받아보실 수 있습니다.</p>
                        <div className="subscribe-form">
                            <input type="email" placeholder="이메일 구독신청" />
                            <button type="submit">→</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer