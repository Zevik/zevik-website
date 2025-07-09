import styled from 'styled-components';
import { FaLinkedin, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 2rem 5%;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;

  a {
    color: white;
    font-size: 1.5rem;
    transition: color 0.2s;
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <SocialLinks>
        <a href="https://il.linkedin.com/in/zevik-aviner-76b56a1b8" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.facebook.com/zevik.aviner" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://www.youtube.com/@zevik.aviner" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://www.instagram.com/zevik.aviner/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </SocialLinks>
      <Copyright>© {currentYear} זאביק אבינר. כל הזכויות שמורות.</Copyright>
    </FooterContainer>
  );
};

export default Footer; 