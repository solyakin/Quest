import '../styles/TeamSection.css'

import member1 from '../../public/images/ceo.png';
import member2 from '../../public/images/ceo-2.png';
import member3 from '../../public/images/ceo-3.png';

const TeamSection = () => {
  return (
    <section className="team-section">
        <div className="team-members">
            <div 
            data-aos="fade-up"
            data-aos-delay={100}
            className="member">
                <img src={member1} alt="Team Member" loading="lazy" />
                <span>조태성 이사장</span>
            </div>
            <div 
            data-aos="fade-up"
            data-aos-delay={200}
            className="member">
                <img src={member2} alt="Team Member" loading="lazy" />
                <span>정은 이사</span>
            </div>
            <div
            data-aos="fade-up"
            data-aos-delay={300}
            className="member">
                <img src={member3} alt="Team Member" loading="lazy" />
                <span>김성수 이사</span>
            </div>
        </div>
    </section>
  )
}

export default TeamSection