import '../styles/AppPromotion.css'
import appPreview from '../../public/images/app screen.svg'
import icon from '../../public/images/appicon.png'

const AppPromotion = () => {
  return (
    <div className="app-promotion">
        <div className="app-promotion-wrapper">
            <div className="app-content">
                <div className="app-info">
                    <img src={icon} alt="" loading="lazy" />
                    <h2>더 나은 세상을<br />만들어 가기 위한 노력.</h2>
                    <p>바른 인성과 성품을 고양하며 함께 나누는 활동을 통해 세대와 나라를 초월한 커뮤니티를 만들어나가려고 노력하고 있습니다.</p>
                    <p>삶의 어려운 고충이 있으신 분들에게 작은 도움을 드립니다. 법률적이거나 개인적으로 해결하기 어려운 문제들이 있으시다면 소담 서포터즈에게 도움을 요청해주세요. </p>
                    <p className="release-date">2025. 6. 출시 예정 커뮤니티 APP '소소담담'</p>
                    <button className="download-btn">앱 다운로드 <span>↓</span></button>
                </div>
                <div className="app-preview">
                    <img src={appPreview} alt="App Preview" loading="lazy" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppPromotion