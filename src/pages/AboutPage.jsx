import React from 'react';
import styled from 'styled-components';
import { FaUsers, FaHeart, FaBrain } from 'react-icons/fa';

const PageContainer = styled.div`
  direction: rtl;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.2;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const TopQuote = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 2rem;
  font-style: italic;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const IntroText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
`;

const TimelineSection = styled.section`
  padding: 4rem 0;
  margin-bottom: 4rem;
  
  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
  }
`;

const TimelineItem = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  
  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const PhilosophySection = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
`;

const PhilosophyTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

const PhilosophyList = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
`;

const PhilosophyItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  align-items: center;
  padding: 1.5rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  
  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1rem;
    
    svg {
      margin: 0 auto;
    }
  }
`;

const AboutPage = () => {
  return (
    <PageContainer>
      <AboutHeader>
        <h1>נעים להכיר, אני זאביק אבינר</h1>
        <TopQuote>"האתגר הגדול הוא איך הופכים אותה ל'קהילה' ולא לזירת שנאה."</TopQuote>
      </AboutHeader>
      <IntroText>
        רבים מכירים אותי כ'ראש העיר הווירטואלי של ירושלים', אבל הסיפור שלי מתחיל הרבה לפני הפייסבוק...
      </IntroText>
      <TimelineSection>
        <h2>המסע שלי</h2>
        <TimelineItem>
          <h3>החיבור: הקמת הקהילות (2012-היום)</h3>
          <p>"הקבוצה לא שימשה רק לצרכים פונקציונליים כמו השאלת חפצים או המלצות על בעלי מקצוע. היא הפכה למרכז קהילתי דיגיטלי, המייצר זהות שכונתית, תחושת שייכות, ורשת חברתית אמיתית ברחובות נחלאות."</p>
        </TimelineItem>
      </TimelineSection>
      <PhilosophySection>
        <PhilosophyTitle>עקרונות שמנחים אותי</PhilosophyTitle>
        <PhilosophyList>
          <PhilosophyItem><FaUsers />"אני לא מאפשר לכתוב 'החרדים', 'הערבים', 'הדתיים', 'הלהט"בים', 'השמאלנים', 'המתנחלים' – ה'אתם' וה'אנחנו' הם שורש הגזענות."</PhilosophyItem>
          <PhilosophyItem><FaHeart />טכנולוגיה עם לב: אוטומציה וקוד הם כלים מדהימים, אבל הם תמיד צריכים לשרת את המטרה האנושית – להקל, לעזור וליצור קשר.</PhilosophyItem>
          <PhilosophyItem><FaBrain />"הקבוצה יצרה את הקהילה... פתאום נוצר מרכז, מקום מפגש – הוא דיגיטלי, אמנם, אבל הוא בפירוש מרכז חיי השכונה."</PhilosophyItem>
        </PhilosophyList>
      </PhilosophySection>
    </PageContainer>
  );
};

export default AboutPage; 