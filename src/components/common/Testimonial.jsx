import styled from 'styled-components';

const TestimonialBox = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  padding: 2rem;
  max-width: 500px;
  margin: 0 auto;
`;
const Quote = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-style: italic;
`;
const Name = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 700;
`;

const Testimonial = ({ quote, name }) => (
  <TestimonialBox>
    <Quote>"{quote}"</Quote>
    <Name>{name}</Name>
  </TestimonialBox>
);

export default Testimonial; 