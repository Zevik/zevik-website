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
const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;
const List = styled.ul`
  list-style: disc inside;
  margin-bottom: 1.5rem;
`;
const Step = styled.li`
  margin-bottom: 0.7rem;
`;
const WorkshopList = styled.ul`
  list-style: none;
  padding: 0;
`;
const WorkshopItem = styled.li`
  margin-bottom: 1.5rem;
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: 8px;
  padding: 1.2rem;
`;
const ServiceQuote = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  font-style: italic;
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