import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';

const NavContainer = styled.header`
  background-color: ${theme.colors.white};
  padding: 1rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.lightGray};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled(NavLink)`
  font-family: ${theme.fonts.headings};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.primary};
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1rem;
  font-weight: 500;
  color: ${theme.colors.darkGray};
  transition: color 0.2s ease-in-out;

  &.active {
    color: ${theme.colors.secondary};
  }

  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const CTAButton = styled(StyledNavLink)`
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.white};
  padding: 0.5rem 1rem;
  border-radius: 5px;

  &:hover {
    color: ${theme.colors.white};
    opacity: 0.9;
  }
`;

const Header = () => {
  return (
    <NavContainer>
      <Logo to="/">זאביק אבינר</Logo>
      <NavLinks>
        <StyledNavLink to="/">עמוד הבית</StyledNavLink>
        <StyledNavLink to="/about">הסיפור שלי</StyledNavLink>
        <StyledNavLink to="/services">שירותים</StyledNavLink>
        <StyledNavLink to="/media">בתקשורת</StyledNavLink>
        <StyledNavLink to="/blog">בלוג</StyledNavLink>
        <StyledNavLink to="/resources">כלים ומדריכים</StyledNavLink>
        <CTAButton to="/contact">צרו קשר</CTAButton>
      </NavLinks>
    </NavContainer>
  );
};

export default Header; 