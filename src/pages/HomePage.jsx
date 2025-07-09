import React from 'react';
import styled from 'styled-components';
import { FaUsers, FaNetworkWired, FaClock } from 'react-icons/fa';
import Testimonial from '../components/common/Testimonial';

const PageWrapper = styled.div``;
const HeroSection = styled.section``;
const HeroText = styled.div``;
const H1 = styled.h1``;
const HeroQuote = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  font-style: italic;
`;
const Subtitle = styled.p``;
const CTAButton = styled.a``;
const HeroImage = styled.div``;
const AsSeenInSection = styled.section``;
const ProjectSection = styled.section``;
const ProjectTitle = styled.h2``;
const ProjectSubtitle = styled.h3``;
const ProjectStats = styled.div``;
const Stat = styled.div``;
const TestimonialsSection = styled.section``;
const TestimonialsTitle = styled.h2``;
const TestimonialsList = styled.div``;

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