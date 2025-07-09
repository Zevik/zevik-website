import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div``;
const Title = styled.h1``;
const Section = styled.section``;
const SubTitle = styled.h2``;
const Paragraph = styled.p``;
const HighlightQuote = styled.blockquote`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
  margin: 2rem 0;
  border-right: 4px solid ${({ theme }) => theme.colors.primary};
  padding-right: 1.5rem;
  font-style: italic;
  background: #f7f7fa;
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