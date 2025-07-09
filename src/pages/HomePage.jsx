import React from 'react';
import styled from 'styled-components';
import { FaUsers, FaNetworkWired, FaClock } from 'react-icons/fa';
import Testimonial from '../components/common/Testimonial';

const PageWrapper = styled.div`
  direction: rtl;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const HeroText = styled.div`
  max-width: 600px;
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroQuote = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  font-style: italic;
  line-height: 1.6;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const HeroImage = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
`;

const AsSeenInSection = styled.section`
  text-align: center;
  padding: 3rem 0;
  background-color: ${({ theme }) => theme.colors.background};
  margin-bottom: 4rem;
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.textLight};
  }
  
  div {
    display: flex;
    justify-content: center;
    gap: 3rem;
    align-items: center;
    flex-wrap: wrap;
    
    img {
      height: 40px;
      opacity: 0.7;
      transition: opacity 0.3s ease;
      
      &:hover {
        opacity: 1;
      }
    }
  }
`;

const ProjectSection = styled.section`
  padding: 4rem 0;
  text-align: center;
  margin-bottom: 4rem;
`;

const ProjectTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ProjectSubtitle = styled.h3`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
`;

const ProjectStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  
  svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  span {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    display: block;
  }
`;

const TestimonialsSection = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const TestimonialsTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.text};
`;

const TestimonialsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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