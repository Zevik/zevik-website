import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 4rem 5%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  text-align: right;
`;
const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1rem;
`;
const Textarea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1rem;
  min-height: 150px;
`;
const Select = styled.select`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1rem;
`;
const SubmitButton = styled.button`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 0.8rem 1.6rem;
  border-radius: 5px;
  font-weight: 700;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover { opacity: 0.9; }
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // כאן אפשר להטמיע שליחה ל-Formspree או שירות דומה
    alert('תודה על פנייתך! אחזור אליך בהקדם.');
  };
  return (
    <PageContainer>
      <h1>דברו איתי</h1>
      <p>אני זמין לכל שאלה, התייעצות או הצעה לשיתוף פעולה. השאירו פרטים ואחזור אליכם בהקדם.</p>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="שם מלא" value={formData.name} onChange={handleChange} required />
        <Input type="email" name="email" placeholder="כתובת מייל" value={formData.email} onChange={handleChange} required />
        <Input type="tel" name="phone" placeholder="טלפון" value={formData.phone} onChange={handleChange} />
        <Select name="subject" value={formData.subject} onChange={handleChange} required>
          <option value="">בחר/י נושא פנייה</option>
          <option value="ייעוץ קהילות">ייעוץ קהילות</option>
          <option value="אוטומציה">פיתוח אוטומציה</option>
          <option value="הרצאה">הזמנת הרצאה</option>
          <option value="שיעור פרטי">שיעור פרטי</option>
          <option value="אחר">אחר</option>
        </Select>
        <Textarea name="message" placeholder="הודעה" value={formData.message} onChange={handleChange} required />
        <SubmitButton type="submit">שליחה</SubmitButton>
      </Form>
    </PageContainer>
  );
};

export default ContactPage; 