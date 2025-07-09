import React from 'react';
import styled from 'styled-components';

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

const TipsSection = styled.div`
  margin-bottom: 4rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  
  h2 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
  }
  
  ul {
    list-style: none;
    padding: 0;
    display: grid;
    gap: 1.5rem;
    
    li {
      font-size: 1.1rem;
      line-height: 1.6;
      color: ${({ theme }) => theme.colors.text};
      padding: 1.5rem;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      
      &:before {
        content: '"';
        color: ${({ theme }) => theme.colors.primary};
        font-size: 1.5rem;
        margin-left: 0.5rem;
      }
      
      &:after {
        content: '"';
        color: ${({ theme }) => theme.colors.primary};
        font-size: 1.5rem;
        margin-right: 0.5rem;
      }
    }
  }
`;

const GuidesSection = styled.div`
  h2 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
  }
`;

const ResourcesPage = () => {
  return (
    <PageContainer>
      <HeaderSection>
        <h1>כלים, מדריכים ומשאבים</h1>
        <ResourceQuote>"הטכנולוגיה היא כלי – אבל קהילה אמיתית נבנית על אמון, שיח וערבות הדדית."</ResourceQuote>
        <Subtitle>כאן תמצאו מדריכים, טיפים, קישורים, הרצאות וסרטונים.</Subtitle>
      </HeaderSection>
      <TipsSection>
        <h2>טיפים לאוטומציה וניהול קהילה</h2>
        <ul>
          <li>"הדרך לבנות קהילה בריאה היא לאפשר שיח, אך להציב גבולות ברורים."</li>
          <li>"אוטומציה טובה היא כזו שמפנה זמן לאנשים – לא מחליפה אותם."</li>
          <li>"הקשבה אמיתית היא הכלי החזק ביותר של מנהל קהילה."</li>
        </ul>
      </TipsSection>
      <GuidesSection>
        <h2>מדריכים נבחרים</h2>
        {/* כאן יופיעו מדריכים */}
      </GuidesSection>
    </PageContainer>
  );
};

export default ResourcesPage; 