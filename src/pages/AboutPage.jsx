import styled from 'styled-components';
import { FaBridge, FaHeart, FaBrain } from 'react-icons/fa';

const PageContainer = styled.div`
  padding: 3rem 5%;
`;
const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  h1 { font-size: 2.5rem; margin-bottom: 1rem; }
`;
const IntroText = styled.p`
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto 3rem auto;
  line-height: 1.7;
`;
const TimelineSection = styled.section`
  margin-bottom: 4rem;
  h2 { text-align: center; margin-bottom: 2rem; }
`;
const TimelineItem = styled.div`
  border-right: 3px solid #FF8C42;
  padding-right: 20px;
  margin: 20px auto;
  max-width: 600px;
`;
const PhilosophySection = styled.section`
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: 10px;
  padding: 2.5rem 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 2rem;
`;
const PhilosophyTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;
const PhilosophyList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  list-style: none;
  padding: 0;
`;
const PhilosophyItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  font-size: 1.1rem;
  svg { font-size: 2rem; color: ${({ theme }) => theme.colors.secondary}; }
`;
const TopQuote = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 2rem;
  font-style: italic;
  text-align: center;
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
        {/* כאן ניתן להוסיף עוד תחנות בציר הזמן */}
      </TimelineSection>
      <PhilosophySection>
        <PhilosophyTitle>עקרונות שמנחים אותי</PhilosophyTitle>
        <PhilosophyList>
          <PhilosophyItem><FaBridge />"אני לא מאפשר לכתוב 'החרדים', 'הערבים', 'הדתיים', 'הלהט"בים', 'השמאלנים', 'המתנחלים' – ה'אתם' וה'אנחנו' הם שורש הגזענות."</PhilosophyItem>
          <PhilosophyItem><FaHeart />טכנולוגיה עם לב: אוטומציה וקוד הם כלים מדהימים, אבל הם תמיד צריכים לשרת את המטרה האנושית – להקל, לעזור וליצור קשר.</PhilosophyItem>
          <PhilosophyItem><FaBrain />"הקבוצה יצרה את הקהילה... פתאום נוצר מרכז, מקום מפגש – הוא דיגיטלי, אמנם, אבל הוא בפירוש מרכז חיי השכונה."</PhilosophyItem>
        </PhilosophyList>
      </PhilosophySection>
    </PageContainer>
  );
};

export default AboutPage; 