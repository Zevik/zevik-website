import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 3rem 5%;
  max-width: 900px;
  margin: 0 auto;
`;
const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;
const Section = styled.section`
  margin-bottom: 2.5rem;
`;
const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;
const Paragraph = styled.p`
  margin-bottom: 1.1rem;
  line-height: 1.7;
`;
const Quote = styled.blockquote`
  border-right: 4px solid ${({ theme }) => theme.colors.secondary};
  padding-right: 1rem;
  margin: 1.5rem 0;
  font-style: italic;
  color: ${({ theme }) => theme.colors.darkGray};
  background: ${({ theme }) => theme.colors.lightGray};
`;
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
    <Title>אדריכל קהילות דיגיטליות בירושלים - מסע אל לב ליבה של עיר העמים</Title>
    <Section>
      <SubTitle>מבוא – ראש העיר הווירטואלי של ירושלים</SubTitle>
      <Paragraph>בעולם שבו הגבולות בין המרחב הפיזי והדיגיטלי מיטשטשים, צומחות מנהיגויות חדשות במקומות בלתי צפויים. זאביק אבינר, איש ירושלמי בן 50, אינו ראש עיר נבחר, אך עבור יותר מחצי מיליון איש, הוא נושא בתואר לא רשמי אך רב משמעות: "ראש העיר הווירטואלי של ירושלים"...</Paragraph>
      <Paragraph>המספרים מעידים על עוצמת התופעה: יותר מחצי מיליון איש ואישה חברים בקבוצות הפייסבוק שזאביק אבינר מנהל...</Paragraph>
      <Paragraph>מאמר זה ינסה להתחקות אחר סיפורו של זאביק אבינר, לפענח את סוד הצלחתו בניהול קהילות דיגיטליות, ולבחון את ההשפעה הייחודית של מודל הניהול שלו על ירושלים – עיר רבת פנים, מורכבת וטעונה...</Paragraph>
    </Section>
    <Section>
      <SubTitle>הדרך אל ניהול הקהילות – מחלום אישי לחזון עירוני</SubTitle>
      <Paragraph>סיפורו של זאביק אבינר כ"ראש העיר הווירטואלי" מתחיל בחוויה אישית של ניכור עירוני...</Paragraph>
      <Paragraph>התגובה לניכור הייתה פשוטה ויצירתית: פתיחת קבוצת פייסבוק שכונתית...</Paragraph>
      <Paragraph>ההצלחה של קבוצת נחלאות הולידה את הרעיון להרחיב את המודל לשכונות נוספות בירושלים, ולבסוף לכל העיר...</Paragraph>
    </Section>
    <Section>
      <SubTitle>עקרונות ניהול הקהילה</SubTitle>
      <Paragraph>ההצלחה של קהילות הפייסבוק של זאביק אבינר אינה מקרית. היא נשענת על מודל ניהול ייחודי, המשלב בין עקרונות קהילתיים, כללים ברורים, וגישה אנושית ורגישה...</Paragraph>
      <Quote>"אני לא מאפשר לכתוב 'החרדים', 'הערבים', 'הדתיים', 'הלהט"בים', 'השמאלנים', 'המתנחלים' – ה'אתם' וה'אנחנו' הם שורש הגזענות. בעיניי זו שפה אלימה..."</Quote>
      <Paragraph>בנוסף לאיסור על שפה סטריאוטיפית, אבינר מקפיד על שמירה קפדנית על שיח מכבד, ואינו מאפשר אלימות מילולית, זלזול, לעג, קללות וכל ביטוי פוגעני אחר...</Paragraph>
    </Section>
    <Section>
      <SubTitle>ניהול דיונים פוליטיים וחברתיים בקהילה רב-תרבותית</SubTitle>
      <Paragraph>ירושלים, כעיר רבת פנים ומגזרים, מייצרת אתגרים ייחודיים בניהול קהילות דיגיטליות...</Paragraph>
      <Quote>"האתגר הגדול הוא איך הופכים אותה ל'קהילה' ולא לזירת שנאה... ואני כמנהל הקבוצה כל הזמן מתמרן ומנסה לנהל שיח שפוי."</Quote>
    </Section>
    <Section>
      <SubTitle>קהילות דיגיטליות ככוח משפיע במציאות הפיזית</SubTitle>
      <Paragraph>ההשפעה של קהילות הפייסבוק של אבינר אינה מוגבלת למרחב הווירטואלי. הקבוצות הפכו לכוח משפיע במציאות הפיזית של העיר, ומשמשות ככלי לשינוי חברתי ועירוני...</Paragraph>
      <Quote>"יש סינרגיה חזקה מאוד בין פייסבוק לרחוב, לעיר..."</Quote>
    </Section>
    <Section>
      <SubTitle>השראה ותובנות</SubTitle>
      <HighlightQuote>"הקבוצה יצרה את הקהילה... פתאום נוצר מרכז, מקום מפגש – הוא דיגיטלי, אמנם, אבל הוא בפירוש מרכז חיי השכונה."</HighlightQuote>
      <HighlightQuote>"האתגר הגדול הוא איך הופכים אותה ל'קהילה' ולא לזירת שנאה."</HighlightQuote>
    </Section>
    <Section>
      <SubTitle>ההשפעה האישית והמקצועית – זאביק כמנהיג דיגיטלי</SubTitle>
      <Paragraph>המסע של זאביק אבינר מניהול קבוצת פייסבוק שכונתית קטנה להנהגת רשת קהילות דיגיטליות עצומה, השפיע עליו באופן אישי ומקצועי עמוק...</Paragraph>
    </Section>
    <Section>
      <SubTitle>האתגרים והביקורות – בין דיקטטורה נאורה לחופש ביטוי</SubTitle>
      <Paragraph>ההצלחה של זאביק אבינר בניהול קהילות פייסבוק אינה חפה מאתגרים וביקורות...</Paragraph>
      <Quote>"הפידבק נורא חשוב לי... יש לי מספיק משובים לדעת שאני בדרך הנכונה."</Quote>
    </Section>
    <Section>
      <SubTitle>שיימינג ככלי חברתי ביקורתי – חרב פיפיות ברשת</SubTitle>
      <Paragraph>אחד הנושאים המורכבים והטעונים ביותר בניהול קהילות דיגיטליות הוא השיימינג...</Paragraph>
      <Quote>"זה אחד הנושאים הכי נפיצים... האם לאשר פוסטים של שיימינג?..."</Quote>
    </Section>
    <Section>
      <SubTitle>שפת הרשת – אתגרים והגישה הייחודית של אבינר</SubTitle>
      <Paragraph>אחד האתגרים המרכזיים בניהול קהילות דיגיטליות הוא "שפת הרשת" – מאפייני התקשורת הטקסטואלית המקוונת...</Paragraph>
      <Quote>"שפת הרשת = טקסט. ללא קול, ללא שפת גוף, ללא הבעות פנים, ללא אינטונציה..."</Quote>
    </Section>
    <Section>
      <SubTitle>סיכום – מה אפשר ללמוד מהסיפור הזה?</SubTitle>
      <Paragraph>סיפורו של זאביק אבינר הוא סיפור מעורר השראה על כוחה של יוזמה אישית, על השפעתן של קהילות דיגיטליות, ועל האפשרות ליצור שינוי חברתי דרך הרשתות החברתיות...</Paragraph>
      <Paragraph>האם המודל של זאביק אבינר רלוונטי רק לירושלים, או שניתן ליישם אותו בערים אחרות, ואף במדינות אחרות?... </Paragraph>
      <Paragraph>עתיד ניהול הקהילות בפייסבוק תלוי בגורמים רבים – בהתפתחות הטכנולוגית של הפלטפורמה, בשינויים חברתיים ופוליטיים, ובבחירות של מנהלי הקהילות עצמם...</Paragraph>
    </Section>
  </PageContainer>
);

export default BlogPage; 