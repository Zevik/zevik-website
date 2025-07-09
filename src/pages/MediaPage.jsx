import React from 'react';
import styled from 'styled-components';
import { FaNewspaper, FaVideo, FaMicrophone } from 'react-icons/fa';

const PageContainer = styled.div`
  direction: rtl;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 600px;
  margin: 0 auto 4rem;
  text-align: center;
`;

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const MediaCard = styled.a`
  display: block;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-decoration: none;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }
  
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.text};
  }
  
  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textLight};
    margin-bottom: 0.5rem;
  }
  
  span {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MediaSection = styled.section`
  margin-bottom: 4rem;
  
  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
  }
`;

const MediaPage = () => {
  return (
    <PageContainer>
      <Title>מדיה וכתבות</Title>
      <Description>
        ראיונות, כתבות והופעות בתקשורת על קהילות דיגיטליות, מנהיגות ברשת וחדשנות חברתית
      </Description>
      
      <MediaSection>
        <h2>כתבות ומאמרים</h2>
        <MediaGrid>
          <MediaCard href="https://www.ynet.co.il/article/example1" target="_blank" rel="noopener noreferrer">
            <FaNewspaper />
            <h3>ראש העיר הווירטואלי של ירושלים</h3>
            <p>כתבת פרופיל מקיפה על הקהילות הדיגיטליות בירושלים</p>
            <span>Ynet | 2023</span>
          </MediaCard>
          <MediaCard href="https://www.calcalist.co.il/article/example2" target="_blank" rel="noopener noreferrer">
            <FaNewspaper />
            <h3>איך מנהלים קהילה של חצי מיליון איש?</h3>
            <p>ראיון מעמיק על ניהול קהילות גדולות ברשת</p>
            <span>כלכליסט | 2023</span>
          </MediaCard>
          <MediaCard href="https://www.globes.co.il/article/example3" target="_blank" rel="noopener noreferrer">
            <FaNewspaper />
            <h3>הכוח החדש ברשת: מנהיגות דיגיטלית</h3>
            <p>מאמר דעה על עתיד המנהיגות בעידן הדיגיטלי</p>
            <span>גלובס | 2022</span>
          </MediaCard>
        </MediaGrid>
      </MediaSection>
      
      <MediaSection>
        <h2>ראיונות וידאו</h2>
        <MediaGrid>
          <MediaCard href="https://www.youtube.com/watch?v=example1" target="_blank" rel="noopener noreferrer">
            <FaVideo />
            <h3>בניית קהילות בעידן הדיגיטלי</h3>
            <p>ראיון בתכנית הבוקר על מהפכת הקהילות הדיגיטליות</p>
            <span>כאן 11 | 2023</span>
          </MediaCard>
          <MediaCard href="https://www.youtube.com/watch?v=example2" target="_blank" rel="noopener noreferrer">
            <FaVideo />
            <h3>טכנולוגיה בשירות הקהילה</h3>
            <p>הרצאה בכנס טכנולוגיה וחברה</p>
            <span>TED ישראל | 2022</span>
          </MediaCard>
        </MediaGrid>
      </MediaSection>
      
      <MediaSection>
        <h2>פודקאסטים</h2>
        <MediaGrid>
          <MediaCard href="https://spotify.com/episode/example1" target="_blank" rel="noopener noreferrer">
            <FaMicrophone />
            <h3>מנהיגות בעידן הדיגיטלי</h3>
            <p>שיחה על האתגרים והפתרונות בניהול קהילות ברשת</p>
            <span>פודקאסט חדשנות | 2023</span>
          </MediaCard>
          <MediaCard href="https://spotify.com/episode/example2" target="_blank" rel="noopener noreferrer">
            <FaMicrophone />
            <h3>הסיפור מאחורי הקהילות</h3>
            <p>ראיון אישי על המסע לבניית קהילות דיגיטליות</p>
            <span>שיחות על טכנולוגיה | 2022</span>
          </MediaCard>
        </MediaGrid>
      </MediaSection>
    </PageContainer>
  );
};

export default MediaPage; 