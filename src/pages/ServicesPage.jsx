import React from 'react';
import styled from 'styled-components';
import Testimonial from '../components/common/Testimonial';

const PageContainer = styled.div``;
const HeaderSection = styled.div``;
const ServiceQuote = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  font-style: italic;
`;
const Subtitle = styled.p``;
const ProcessSection = styled.section``;
const ServicesList = styled.div``;
const TestimonialsSection = styled.section``;

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