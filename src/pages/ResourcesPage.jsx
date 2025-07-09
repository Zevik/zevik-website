import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div``;
const HeaderSection = styled.div``;
const ResourceQuote = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1.5rem;
  font-style: italic;
`;
const Subtitle = styled.p``;
const TipsSection = styled.div``;
const GuidesSection = styled.div``;

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