import React from 'react';
import styled from 'styled-components';
import { FaLightbulb, FaBook, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

const PageContainer = styled.div`
  direction: rtl;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const HeaderSection = styled.div`
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

const ResourceQuote = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1.5rem;
  font-style: italic;
  max-width: 800px;
  margin: 0 auto 1.5rem;
  line-height: 1.6;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 700px;
  margin: 0 auto;
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
`;

const ResourceCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  
  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textLight};
    margin-bottom: 1.5rem;
  }
`;

const ResourceLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
  
  svg {
    font-size: 1rem;
    margin: 0;
  }
`;

const TipsList = styled.div`
  display: grid;
  gap: 2rem;
  margin: 4rem 0;
`;

const TipCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  padding: 2rem;
  
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

const ResourcesPage = () => {
  return (
    <PageContainer>
      <HeaderSection>
        <h1>משאבים ומדריכים</h1>
        <ResourceQuote>
          "הידע והניסיון שצברתי בעשור האחרון בניהול קהילות - כאן בשבילכם"
        </ResourceQuote>
        <Subtitle>
          מדריכים, טיפים וכלים מעשיים לבניה וניהול של קהילות דיגיטליות
        </Subtitle>
      </HeaderSection>

      <ResourcesGrid>
        <ResourceCard>
          <FaBook />
          <h3>המדריך המלא לניהול קהילות</h3>
          <p>מדריך מקיף הכולל את כל מה שצריך לדעת על הקמה וניהול של קהילה דיגיטלית.</p>
          <ResourceLink href="/guides/community-management.pdf" target="_blank">
            להורדת המדריך <FaDownload />
          </ResourceLink>
        </ResourceCard>
        
        <ResourceCard>
          <FaLightbulb />
          <h3>ערכת כלים לניהול משברים</h3>
          <p>אוסף כלים וטיפים להתמודדות עם משברים ומצבי קיצון בקהילה.</p>
          <ResourceLink href="/guides/crisis-management.pdf" target="_blank">
            להורדת הערכה <FaDownload />
          </ResourceLink>
        </ResourceCard>
        
        <ResourceCard>
          <FaBook />
          <h3>תבניות ונהלים</h3>
          <p>אוסף תבניות מוכנות לשימוש: נהלי קהילה, טפסים, ותבניות לפוסטים.</p>
          <ResourceLink href="/templates/community-templates.zip" target="_blank">
            להורדת התבניות <FaDownload />
          </ResourceLink>
        </ResourceCard>
      </ResourcesGrid>

      <TipsList>
        <TipCard>
          <h3><FaLightbulb /> איך לבנות נהלי קהילה אפקטיביים</h3>
          <p>נהלים טובים הם הבסיס לקהילה בריאה. הם צריכים להיות ברורים, הוגנים ומותאמים לאופי הקהילה שלכם. חשוב להגדיר מראש את הגבולות ולאכוף אותם בעקביות.</p>
        </TipCard>
        
        <TipCard>
          <h3><FaLightbulb /> ניהול דיונים טעונים</h3>
          <p>בכל קהילה יש דיונים טעונים. המפתח הוא לא למנוע אותם, אלא לנהל אותם נכון: להציב כללי שיח ברורים, להיות נוכחים בדיון, ולהתערב במידת הצורך.</p>
        </TipCard>
        
        <TipCard>
          <h3><FaLightbulb /> יצירת תוכן מעורר מעורבות</h3>
          <p>תוכן טוב הוא כזה שמעורר שיח ומעודד מעורבות. שאלו שאלות פתוחות, צרו סקרים, ועודדו את חברי הקהילה לשתף מהניסיון שלהם.</p>
        </TipCard>
        
        <TipCard>
          <h3><FaLightbulb /> בניית צוות מנהלים</h3>
          <p>צוות מנהלים טוב הוא קריטי להצלחת הקהילה. חשוב לבחור אנשים שמחוברים לערכי הקהילה, להכשיר אותם כראוי ולתת להם את הכלים הנכונים.</p>
        </TipCard>
      </TipsList>
    </PageContainer>
  );
};

export default ResourcesPage; 