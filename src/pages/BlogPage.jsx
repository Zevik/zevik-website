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

export default function BlogPage() {
  return <div>Blog Page</div>;
} 