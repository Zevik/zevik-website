import React from 'react';
import styled from 'styled-components';
import { FaUsers, FaHeart, FaBrain } from 'react-icons/fa';

const PageContainer = styled.div``;
const AboutHeader = styled.div``;
const TopQuote = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 2rem;
  font-style: italic;
  text-align: center;
`;
const IntroText = styled.p``;
const TimelineSection = styled.section``;
const TimelineItem = styled.div``;
const PhilosophySection = styled.section``;
const PhilosophyTitle = styled.h2``;
const PhilosophyList = styled.ul``;
const PhilosophyItem = styled.li``;

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