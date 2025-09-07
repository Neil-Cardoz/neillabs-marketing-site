import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import servicesData from '../data/services.json';

const HeroSection = styled.section`
  background: linear-gradient(135deg, 
    rgba(37, 99, 235, 0.1) 0%, 
    rgba(59, 130, 246, 0.05) 50%, 
    rgba(147, 197, 253, 0.1) 100%);
  padding: 8rem 0 6rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 25% 25%, rgba(37, 99, 235, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding};
  text-align: center;
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled(motion.h1)`
  font-size: ${({ theme }) => theme.fontSizes['6xl']};
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryDark});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const CTAButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryDark});
  color: white;
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows['2xl']};
    color: white;
  }
  
  svg {
    transition: ${({ theme }) => theme.transition};
  }
  
  &:hover svg {
    transform: translateX(4px);
  }
`;

const StatsSection = styled.section`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.colors.light};
`;

const StatsContainer = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  text-align: center;
`;

const StatItem = styled(motion.div)`
  h3 {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 0.5rem;
    font-weight: 800;
  }
  
  p {
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 500;
    margin: 0;
  }
`;

const ServicesPreview = styled.section`
  padding: 6rem 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ServicesGrid = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled(motion.div)`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ServiceLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
    
    svg {
      transform: translateX(4px);
    }
  }
  
  svg {
    transition: ${({ theme }) => theme.transition};
  }
`;

const ValueProposition = styled.section`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.dark});
  color: white;
  padding: 6rem 0;
`;

const ValueContent = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
`;

const ValueText = styled.div`
  h2 {
    color: white;
    margin-bottom: 1.5rem;
  }
  
  p {
    color: ${({ theme }) => theme.colors.grayLight};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin-bottom: 2rem;
    line-height: 1.7;
  }
`;

const ValuePoints = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ValuePoint = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.grayLight};
  
  svg {
    color: ${({ theme }) => theme.colors.accent};
    flex-shrink: 0;
  }
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Turn Data Into Action
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We help businesses focus on what they do best while we handle their digital marketing 
            at marginal cost. Transform your online presence and drive real results.
          </HeroSubtitle>
          <CTAButton
            to="/contact"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today <FiArrowRight />
          </CTAButton>
        </HeroContent>
      </HeroSection>

      <StatsSection>
        <StatsContainer>
          <StatItem
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3>500+</h3>
            <p>Businesses Helped</p>
          </StatItem>
          <StatItem
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>98%</h3>
            <p>Client Satisfaction</p>
          </StatItem>
          <StatItem
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>300%</h3>
            <p>Average ROI Increase</p>
          </StatItem>
          <StatItem
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3>24/7</h3>
            <p>Support Available</p>
          </StatItem>
        </StatsContainer>
      </StatsSection>

      <ServicesPreview>
        <SectionTitle>Our Services</SectionTitle>
        <SectionSubtitle>
          Comprehensive digital solutions designed to help your business thrive in the modern marketplace.
        </SectionSubtitle>
        
        <ServicesGrid>
          {servicesData.slice(0, 3).map((service, index) => (
            <ServiceCard
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.shortDescription}</ServiceDescription>
              <ServiceLink to="/services">
                Learn More <FiArrowRight />
              </ServiceLink>
            </ServiceCard>
          ))}
        </ServicesGrid>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <CTAButton to="/services">
            View All Services <FiArrowRight />
          </CTAButton>
        </div>
      </ServicesPreview>

      <ValueProposition>
        <ValueContent>
          <ValueText>
            <h2>Why Choose Neillabs.ai?</h2>
            <p>
              Our passion is helping businesses succeed by creating meaningful connections 
              in the digital world. We believe in building a community where everyone can 
              help each other thrive.
            </p>
          </ValueText>
          
          <ValuePoints>
            <ValuePoint>
              <FiCheck size={24} />
              <span>Affordable pricing that fits any budget</span>
            </ValuePoint>
            <ValuePoint>
              <FiCheck size={24} />
              <span>Focus on your business while we handle marketing</span>
            </ValuePoint>
            <ValuePoint>
              <FiCheck size={24} />
              <span>Data-driven strategies for measurable results</span>
            </ValuePoint>
            <ValuePoint>
              <FiCheck size={24} />
              <span>Local expertise with global reach</span>
            </ValuePoint>
            <ValuePoint>
              <FiCheck size={24} />
              <span>Building communities and connections</span>
            </ValuePoint>
            <ValuePoint>
              <FiCheck size={24} />
              <span>Dedicated support every step of the way</span>
            </ValuePoint>
          </ValuePoints>
        </ValueContent>
      </ValueProposition>
    </>
  );
};

export default Home;
