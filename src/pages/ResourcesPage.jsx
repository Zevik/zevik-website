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
const List = styled.ul`
  list-style: disc inside;
  margin-bottom: 1.5rem;
`;
const ResourceLink = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: underline;
  margin-bottom: 0.5rem;
  display: inline-block;
`;
const VideoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;
const VideoWrapper = styled.div`
  flex: 1 1 320px;
  max-width: 400px;
`;
const ResourceQuote = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1.5rem;
  font-style: italic;
`;
const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
`;
const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;
const TipsSection = styled.div`
  margin-bottom: 3rem;
`;
const GuidesSection = styled.div`
  margin-bottom: 3rem;
`;

export default function ResourcesPage() {
  return <div>Resources Page</div>;
} 