import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div``;
const Form = styled.form``;
const Input = styled.input``;
const Select = styled.select``;
const Textarea = styled.textarea``;
const SubmitButton = styled.button``;

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