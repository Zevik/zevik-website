import React from 'react';
import styled from 'styled-components';
import Testimonial from '../components/common/Testimonial';
import { FaUsers, FaRobot, FaChalkboardTeacher, FaLightbulb } from 'react-icons/fa';

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

const ServiceCard = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1.5rem;
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
        <ServiceCard>
          <FaUsers />
          <h3>ייעוץ וליווי קהילות</h3>
          <p>בניית אסטרטגיה, הכשרת מנהלים, פיתוח תוכן, ניהול משברים ובניית תהליכי עבודה לקהילות דיגיטליות.</p>
        </ServiceCard>
        <ServiceCard>
          <FaRobot />
          <h3>פיתוח אוטומציות</h3>
          <p>פיתוח כלים וטכנולוגיות לניהול יעיל של קהילות, כולל בוטים, מערכות ניטור ואנליטיקס מתקדמות.</p>
        </ServiceCard>
        <ServiceCard>
          <FaChalkboardTeacher />
          <h3>הרצאות וסדנאות</h3>
          <p>הרצאות מרתקות על ניהול קהילות, מנהיגות דיגיטלית, וסדנאות מעשיות לצוותים ומנהלים.</p>
        </ServiceCard>
        <ServiceCard>
          <FaLightbulb />
          <h3>ייעוץ אסטרטגי</h3>
          <p>ליווי ארגונים בתהליכי דיגיטציה, בניית אסטרטגיית נוכחות דיגיטלית ופיתוח מודלים קהילתיים.</p>
        </ServiceCard>
      </ServicesList>
      <TestimonialsSection>
        <h2>לקוחות ממליצים</h2>
        <div>
          <Testimonial
            quote="זאביק הצליח לקחת את הקהילה שלנו לרמה הבאה. הכלים והתובנות שהוא הביא שינו את הדרך בה אנחנו מתקשרים עם הקהל שלנו."
            name="רונית כהן"
            title="מנהלת קהילת 'ירושלמים מחוברים'"
          />
          <Testimonial
            quote="ההרצאה של זאביק פתחה לנו את העיניים לגבי הפוטנציאל העצום שיש בניהול נכון של קהילה דיגיטלית."
            name="יוסי לוי"
            title="מנכ״ל חברת טכנולוגיה"
          />
          <Testimonial
            quote="האוטומציות שזאביק פיתח עבורנו חסכו לנו שעות של עבודה ידנית ואפשרו לנו להתמקד בדברים החשובים באמת."
            name="מיכל אברהם"
            title="מנהלת פיתוח עסקי"
          />
          <Testimonial
            quote="הליווי המקצועי של זאביק עזר לנו להפוך את הקהילה שלנו ממקום של תלונות למרחב של שיתוף פעולה ויצירה משותפת."
            name="דוד ישראלי"
            title="מייסד קהילת 'עסקים בירושלים'"
          />
        </div>
      </TestimonialsSection>
    </PageContainer>
  );
};

export default ServicesPage; 