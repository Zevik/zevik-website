import React from 'react';
import styled from 'styled-components';
import Testimonial from '../components/common/Testimonial';

const PageContainer = styled.div`
  direction: rtl;
  max-width: 1200px;
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

const ServiceQuote = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.primary};
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

const ProcessSection = styled.section`
  padding: 4rem 0;
  margin-bottom: 4rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  text-align: center;
  
  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.text};
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
    max-width: 800px;
    margin: 0 auto;
  }
`;

const ServicesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  padding: 2rem 0;
`;

const TestimonialsSection = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  
  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.colors.text};
  }
  
  > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

const ServicesPage = () => {
  return (
    <PageContainer>
      <HeaderSection>
        <h1>שירותים ופתרונות</h1>
        <ServiceQuote>"המשימה שלי – להפוך כל קהילה דיגיטלית למנוע צמיחה אנושי, עסקי וחברתי."</ServiceQuote>
        <Subtitle>ייעוץ, ליווי, פיתוח אוטומציות, הרצאות וסדנאות – הכל בהתאמה אישית.</Subtitle>
      </HeaderSection>
      <ProcessSection>
        <h2>איך זה עובד?</h2>
        <p>הכל מתחיל בהקשבה אמיתית – להבין את הצרכים, את השפה, את הדינמיקה. משם בונים תהליך מדויק, עם כלים טכנולוגיים שמשרתים את האנשים, לא להפך.</p>
      </ProcessSection>
      <ServicesList>
        {/* פירוט השירותים */}
      </ServicesList>
      <TestimonialsSection>
        <h2>לקוחות ממליצים</h2>
        <Testimonial
          quote="הדרך לבנות קהילה בריאה היא לאפשר שיח, אך להציב גבולות ברורים."
          name="זאביק אבינר"
        />
        <Testimonial
          quote="הכלים שזאביק פיתח שינו לנו את הדרך בה אנחנו מנהלים את הקהילה."
          name="מנהלת קהילת Y"
        />
      </TestimonialsSection>
    </PageContainer>
  );
};

export default ServicesPage; 