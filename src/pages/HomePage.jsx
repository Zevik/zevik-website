import styled from 'styled-components';
import { FaUsers, FaNetworkWired, FaClock } from 'react-icons/fa';
import Testimonial from '../components/common/Testimonial';

const PageWrapper = styled.div``;

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  padding: 4rem 5%;
  background-color: ${({ theme }) => theme.colors.lightGray};
  gap: 2rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
const HeroText = styled.div`
  flex: 1;
`;
const HeroImage = styled.div`
  flex: 1;
  max-width: 400px;
  img { border-radius: 10px; }
`;
const H1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;
const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;
const CTAButton = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: 0.8rem 1.6rem;
  border-radius: 5px;
  font-weight: 700;
  font-size: 1.1rem;
  transition: transform 0.2s;
  &:hover { transform: translateY(-3px); }
`;
const HeroQuote = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const AsSeenInSection = styled.section`
  padding: 2rem 5%;
  text-align: center;
  h3 { margin-bottom: 1.5rem; color: #888; font-weight: 500; }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    filter: grayscale(100%);
    opacity: 0.7;
  }
  img { height: 30px; }
`;

const ProjectSection = styled.section`
  background: ${({ theme }) => theme.colors.white};
  padding: 3rem 5%;
  text-align: center;
`;
const ProjectTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
const ProjectSubtitle = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;
const ProjectStats = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 2rem;
`;
const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
  svg { font-size: 2rem; margin-bottom: 0.5rem; }
  span { font-weight: bold; font-size: 1.3rem; }
`;

const TestimonialsSection = styled.section`
  background: ${({ theme }) => theme.colors.lightGray};
  padding: 3rem 5%;
  text-align: center;
`;
const TestimonialsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;
const TestimonialsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

export default function HomePage() {
  return <div>Home Page</div>;
} 