import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo.svg';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${({ isScrolled, theme }) => 
    isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${({ isScrolled }) => isScrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${({ isScrolled, theme }) => 
    isScrolled ? `1px solid ${theme.colors.grayLight}` : 'none'};
  transition: ${({ theme }) => theme.transition};
  padding: 1rem 0;
`;

const NavContainer = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  img {
    height: 40px;
    width: auto;
    transition: ${({ theme }) => theme.transition};
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 2rem;
  margin: 0;
  padding: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme, isActive }) => isActive ? theme.colors.primary : theme.colors.dark};
  font-weight: ${({ isActive }) => isActive ? '600' : '500'};
  font-size: ${({ theme }) => theme.fontSizes.md};
  padding: 0.5rem 0;
  position: relative;
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &::after {
    content: '';
    position: absolute;
    width: ${({ isActive }) => isActive ? '100%' : '0'};
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const CTAButton = styled(Link)`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryDark});
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  transition: ${({ theme }) => theme.transition};
  box-shadow: ${({ theme }) => theme.shadows.md};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    color: white;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.dark};
  font-size: 1.5rem;
  padding: 0.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayLight};
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileNavLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MobileNavLink = styled(Link)`
  color: ${({ theme, isActive }) => isActive ? theme.colors.primary : theme.colors.dark};
  font-weight: ${({ isActive }) => isActive ? '600' : '500'};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  padding: 0.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayLight};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MobileCTAButton = styled(Link)`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryDark});
  color: white;
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  text-align: center;
  margin-top: 1rem;
  display: block;
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    color: white;
    transform: translateY(-2px);
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Blog', path: '/blog' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <Nav isScrolled={isScrolled}>
        <NavContainer>
          <Logo to="/">
            <img src={logo} alt="Neillabs.ai" />
          </Logo>
          
          <NavLinks>
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  isActive={location.pathname === item.path}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </NavLinks>
          
          <CTAButton to="/contact">
            Get Started
          </CTAButton>
          
          <MobileMenuButton onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </MobileMenuButton>
        </NavContainer>
      </Nav>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <MobileNavLinks>
              {navItems.map((item) => (
                <li key={item.name}>
                  <MobileNavLink
                    to={item.path}
                    isActive={location.pathname === item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </MobileNavLink>
                </li>
              ))}
            </MobileNavLinks>
            
            <MobileCTAButton 
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </MobileCTAButton>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
