import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  direction: rtl;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textLight};
    text-align: center;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const inputStyles = `
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: white;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

const Input = styled.input`
  ${inputStyles}
`;

const Select = styled.select`
  ${inputStyles}
  cursor: pointer;
  
  option {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Textarea = styled.textarea`
  ${inputStyles}
  min-height: 150px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
    cursor: not-allowed;
  }
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
          <option value="הרצאה">הרצאה</option>
          <option value="שיתוף פעולה">שיתוף פעולה</option>
          <option value="אחר">אחר</option>
        </Select>
        <Textarea name="message" placeholder="הודעה" value={formData.message} onChange={handleChange} required />
        <SubmitButton type="submit">שליחה</SubmitButton>
      </Form>
    </PageContainer>
  );
};

export default ContactPage; 