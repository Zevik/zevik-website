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

export default function ServicesPage() {
  return <div>Services Page</div>;
} 