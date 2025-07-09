import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  direction: rtl;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Section = styled.section`
  margin-bottom: 4rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const HighlightQuote = styled.blockquote`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 2rem 0;
  border-right: 4px solid ${({ theme }) => theme.colors.primary};
  padding: 1.5rem;
  padding-right: 2rem;
  font-style: italic;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    padding-right: 1.5rem;
    margin: 1.5rem 0;
  }
`;

const BlogPage = () => (
  <PageContainer>
    <Title>אדריכלות קהילות דיגיטליות בירושלים - מסע אל לב ליבה של עיר העמים</Title>
    <Section>
      <SubTitle>מבוא – ראש העיר הווירטואלי של ירושלים</SubTitle>
      <Paragraph>
        בעולם שבו הגבולות בין המרחב הפיזי והדיגיטלי מיטשטשים, צומחות מנהיגויות חדשות במקומות בלתי צפויים. זאביק אבינר, האיש שירושלים בין 50, אינו ראש עיר נבחר, אך עבור יותר מחצי מיליון איש, הוא נושא בתואר לא רשמי: "ראש העיר הווירטואלי של ירושלים".
      </Paragraph>
      <Paragraph>
        המספרים מעידים על עוצמת התופעה: יותר מחצי מיליון איש ואישה חברים בקבוצות הפייסבוק שזאביק אבינר מנהל, עשרות קהילות משנה, מאות אלפי פוסטים בשנה, והכל בהתנדבות מלאה, מתוך תחושת שליחות: להפוך את המרחב הדיגיטלי ללב הפועם של העיר.
      </Paragraph>
    </Section>
    <Section>
      <SubTitle>השראה ותובנות</SubTitle>
      <HighlightQuote>"הקבוצה יצרה את הקהילה... פתאום נוצר מרכז, מקום מפגש – הוא דיגיטלי, אמנם, אבל הוא בפירוש מרכז חיי השכונה."</HighlightQuote>
      <HighlightQuote>"האתגר הגדול הוא איך הופכים אותה ל'קהילה' ולא לזירת שנאה."</HighlightQuote>
    </Section>
    <Section>
      <SubTitle>ההשראה האישית והמקסועית – זאביק כמנהיג דיגיטלי</SubTitle>
      <Paragraph>
        המסע של זאביק החל בשכונת נחלאות, שם הבין שהקבוצה לא שימשה רק לצרכים פונקציונליים כמו השאלת חפצים או המלצות על בעלי מקצוע. היא הפכה למרכז קהילתי דיגיטלי, המייצר זהות שכונתית, תחושת שייכות, ורשת חברתית אמיתית ברחובות נחלאות.
      </Paragraph>
      <Paragraph>
        עקרונות שמנחים אותו: לא לאפשר הכללות, לא לאפשר שיח מפלג, ולשים את האדם במרכז – גם כשהטכנולוגיה מתקדמת.
      </Paragraph>
    </Section>
  </PageContainer>
);

export default BlogPage; 