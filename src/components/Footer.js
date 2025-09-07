import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';
import logo from '../assets/logo.svg';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.dark});
  color: ${({ theme }) => theme.colors.light};
  padding: 4rem 0 2rem;
  margin-top: 5rem;
`;

const FooterContent = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  h4 {
    color: ${({ theme }) => theme.colors.light};
    margin-bottom: 1.5rem;
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
  
  p {
    color: ${({ theme }) => theme.colors.grayLight};
    margin-bottom: 1rem;
    line-height: 1.6;
  }
`;

const LogoSection = styled(FooterSection)`
  img {
    height: 50px;
    margin-bottom: 1rem;
    filter: brightness(0) saturate(100%) invert(100%);
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    margin-bottom: 0.75rem;
  }
  
  a {
    color: ${({ theme }) => theme.colors.grayLight};
    transition: ${({ theme }) => theme.transition};
    
    &:hover {
      color: ${({ theme }) => theme.colors.primaryLight};
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.grayLight};
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.light};
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
    color: white;
  }
`;

const FooterBottom = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 2rem ${({ theme }) => theme.container.padding} 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.grayLight};
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const FooterBottomLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  a {
    color: ${({ theme }) => theme.colors.grayLight};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    transition: ${({ theme }) => theme.transition};
    
    &:hover {
      color: ${({ theme }) => theme.colors.primaryLight};
    }
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <LogoSection>
          <img src={logo} alt="Neillabs.ai" />
          <p>
            Empowering businesses to turn data into action. We help local and online businesses 
            thrive in the digital world through innovative marketing solutions and cutting-edge technology.
          </p>
          <SocialLinks>
            <SocialLink href="#" aria-label="Facebook">
              <FiFacebook size={18} />
            </SocialLink>
            <SocialLink href="#" aria-label="Twitter">
              <FiTwitter size={18} />
            </SocialLink>
            <SocialLink href="#" aria-label="LinkedIn">
              <FiLinkedin size={18} />
            </SocialLink>
            <SocialLink href="#" aria-label="Instagram">
              <FiInstagram size={18} />
            </SocialLink>
          </SocialLinks>
        </LogoSection>

        <FooterSection>
          <h4>Services</h4>
          <FooterLinks>
            <li><Link to="/services">Digital Marketing</Link></li>
            <li><Link to="/services">SEO Services</Link></li>
            <li><Link to="/services">Social Media Management</Link></li>
            <li><Link to="/services">Website Development</Link></li>
            <li><Link to="/services">Cloud Services</Link></li>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h4>Company</h4>
          <FooterLinks>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h4>Get In Touch</h4>
          <ContactInfo>
            <FiMail size={18} />
            <span>hello@neillabs.ai</span>
          </ContactInfo>
          <ContactInfo>
            <FiPhone size={18} />
            <span>+1 (555) 123-4567</span>
          </ContactInfo>
          <ContactInfo>
            <FiMapPin size={18} />
            <span>123 Business Avenue, Suite 100<br />City, State 12345</span>
          </ContactInfo>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <Copyright>
          © {currentYear} Neillabs.ai. All rights reserved.
        </Copyright>
        <FooterBottomLinks>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/cookies">Cookie Policy</Link>
        </FooterBottomLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
