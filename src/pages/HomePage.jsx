import styled from 'styled-components';
import { FaUsers, FaNetworkWired, FaClock } from 'react-icons/fa';
import Testimonial from '../components/common/Testimonial';

const PageWrapper = styled.div``;

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  padding: 4rem 5%;
  background-color: ${({ theme }) => theme.colors.lightGray};
  gap: 2rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
const HeroText = styled.div`
  flex: 1;
`;
const HeroImage = styled.div`
  flex: 1;
  max-width: 400px;
  img { border-radius: 10px; }
`;
const H1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;
const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;
const CTAButton = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 0.8rem 1.6rem;
  border-radius: 5px;
  font-weight: 700;
  font-size: 1.1rem;
  transition: transform 0.2s;
  &:hover { transform: translateY(-3px); }
`;
const HeroQuote = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const AsSeenInSection = styled.section`
  padding: 2rem 5%;
  text-align: center;
  h3 { margin-bottom: 1.5rem; color: #888; font-weight: 500; }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    filter: grayscale(100%);
    opacity: 0.7;
  }
  img { height: 30px; }
`;

const ProjectSection = styled.section`
  background: ${({ theme }) => theme.colors.white};
  padding: 3rem 5%;
  text-align: center;
`;
const ProjectTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
const ProjectSubtitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;
const ProjectStats = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 2rem;
`;
const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
  svg { font-size: 2rem; margin-bottom: 0.5rem; }
  span { font-weight: bold; font-size: 1.3rem; }
`;

const TestimonialsSection = styled.section`
  background: ${({ theme }) => theme.colors.lightGray};
  padding: 3rem 5%;
  text-align: center;
`;
const TestimonialsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;
const TestimonialsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

const HomePage = () => {
  return (
    <PageWrapper>
      <HeroSection>
        <HeroText>
          <H1>זאביק אבינר | הופכים קהילות דיגיטליות למנוע צמיחה אנושי ועסקי</H1>
          <HeroQuote>"בעולם שבו הגבולות בין המרחב הפיזי והדיגיטלי מיטשטשים, צומחות מנהיגויות חדשות במקומות בלתי צפויים."</HeroQuote>
          <Subtitle>
            מומחה לאוטומציה, אדריכל קהילות וחדשנות דיגיטלית. אני מייעץ, מרצה ומפתח פתרונות טכנולוגיים שמחברים בין אנשים.
          </Subtitle>
          <CTAButton href="/contact">לייעוץ ופיתוח פתרונות &gt;</CTAButton>
        </HeroText>
        <HeroImage>
          <img src="/src/assets/images/zevik-hero.jpg" alt="זאביק אבינר" />
        </HeroImage>
      </HeroSection>
      <AsSeenInSection>
        <h3>התארחתי וסוקרתי ב:</h3>
        <div>
          <img src="/src/assets/images/logo-mako.png" alt="Mako"/>
          <img src="/src/assets/images/logo-walla.png" alt="Walla"/>
          <img src="/src/assets/images/logo-makor-rishon.png" alt="מקור ראשון"/>
        </div>
      </AsSeenInSection>
      <ProjectSection>
        <ProjectTitle>פרויקט הדגל: קהילת "ירושלמים וירושלמיות"</ProjectTitle>
        <ProjectSubtitle>איך הפכנו קבוצת פייסבוק ללב הפועם של עיר שלמה</ProjectSubtitle>
        <p>"הקבוצות אינן רק זירות וירטואליות לשיח – הן משפיעות באופן ישיר על החיים בעיר, על התודעה הציבורית, ועל היחסים בין תושביה."</p>
        <ProjectStats>
          <Stat><FaUsers /><span>+500,000</span>חברים בכלל הרשת</Stat>
          <Stat><FaNetworkWired /><span>+120</span>קהילות מנוהלות</Stat>
          <Stat><FaClock /><span>24/7</span>ניטור וניהול אוטומטי</Stat>
        </ProjectStats>
      </ProjectSection>
      <TestimonialsSection>
        <TestimonialsTitle>לקוחות ממליצים</TestimonialsTitle>
        <TestimonialsList>
          <Testimonial
            quote="האתגר הגדול הוא איך הופכים אותה ל'קהילה' ולא לזירת שנאה. בזכות זאביק למדנו לנהל שיח אמיתי, מכבד ומגוון."
            name="שם, תפקיד, שם הארגון"
          />
          <Testimonial
            quote="ההרצאה של זאביק על ניהול שיח ברשת פתחה לנו את העיניים. הוא נתן לנו כלים פרקטיים שהתחלנו ליישם מיד וראינו תוצאות."
            name="שם, מנהל/ת קהילת X"
          />
        </TestimonialsList>
      </TestimonialsSection>
      <div style={{textAlign: 'center', padding: '4rem', backgroundColor: '#f9f9f9'}}>
        <h2>אזור לשירותים, פילוסופיה ובלוג</h2>
        <p>כאן יתווספו שאר חלקי עמוד הבית לפי האפיון.</p>
      </div>
    </PageWrapper>
  );
};

export default HomePage; 