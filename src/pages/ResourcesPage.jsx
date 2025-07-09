import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 3rem 5%;
`;
const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;
const Section = styled.section`
  margin-bottom: 3rem;
`;
const List = styled.ul`
  list-style: disc inside;
  margin-bottom: 1.5rem;
`;
const ResourceLink = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: underline;
  margin-bottom: 0.5rem;
  display: inline-block;
`;
const VideoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;
const VideoWrapper = styled.div`
  flex: 1 1 320px;
  max-width: 400px;
`;
const ResourceQuote = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1.5rem;
  font-style: italic;
`;
const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
`;
const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;
const TipsSection = styled.div`
  margin-bottom: 3rem;
`;
const GuidesSection = styled.div`
  margin-bottom: 3rem;
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