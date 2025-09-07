import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import servicesData from '../data/services.json';

const ServicesHero = styled.section`
  background: linear-gradient(135deg, 
    rgba(37, 99, 235, 0.1) 0%, 
    rgba(59, 130, 246, 0.05) 50%, 
    rgba(147, 197, 253, 0.1) 100%);
  padding: 6rem 0 4rem;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding};
`;

const HeroTitle = styled(motion.h1)`
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryDark});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.gray};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ServicesSection = styled.section`
  padding: 6rem 0;
`;

const ServicesContainer = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding};
`;

const ServiceCard = styled(motion.div)`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 3rem;
  margin-bottom: 3rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  align-items: center;
  
  &:nth-child(even) {
    grid-template-columns: 2fr 1fr;
    
    .service-content {
      order: -1;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    text-align: center;
    
    &:nth-child(even) {
      grid-template-columns: 1fr;
      
      .service-content {
        order: 0;
      }
    }
  }
`;

const ServiceIcon = styled.div`
  font-size: 6rem;
  text-align: center;
  margin-bottom: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 4rem;
  }
`;

const ServiceContent = styled.div`
  &.service-content {
    /* This class is used for CSS grid ordering */
  }
`;

const ServiceTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.gray};
  
  svg {
    color: ${({ theme }) => theme.colors.accent};
    flex-shrink: 0;
  }
`;

const ServicePrice = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryDark});
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-weight: 600;
  transition: ${({ theme }) => theme.transition};
  box-shadow: ${({ theme }) => theme.shadows.md};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    color: white;
    
    svg {
      transform: translateX(4px);
    }
  }
  
  svg {
    transition: ${({ theme }) => theme.transition};
  }
`;

const CTASection = styled.section`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.dark});
  color: white;
  padding: 6rem 0;
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding};
  
  h2 {
    color: white;
    margin-bottom: 1.5rem;
  }
  
  p {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.grayLight};
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CTAButtonLarge = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  transition: ${({ theme }) => theme.transition};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows['2xl']};
    color: ${({ theme }) => theme.colors.primary};
    
    svg {
      transform: translateX(4px);
    }
  }
  
  svg {
    transition: ${({ theme }) => theme.transition};
  }
`;

const Services = () => {
  return (
    <>
      <ServicesHero>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Services
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Comprehensive digital solutions designed to help your business thrive in the modern marketplace. 
            Let us handle your digital marketing while you focus on what you do best.
          </HeroSubtitle>
        </HeroContent>
      </ServicesHero>

      <ServicesSection>
        <ServicesContainer>
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              
              <ServiceContent className="service-content">
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                
                <FeaturesList>
                  {service.features.map((feature, featureIndex) => (
                    <FeatureItem key={featureIndex}>
                      <FiCheck size={18} />
                      <span>{feature}</span>
                    </FeatureItem>
                  ))}
                </FeaturesList>
                
                <ServicePrice>{service.price}</ServicePrice>
                
                <CTAButton to="/contact">
                  Get Started <FiArrowRight />
                </CTAButton>
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServicesContainer>
      </ServicesSection>

      <CTASection>
        <CTAContent>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join hundreds of businesses that have already experienced the power of data-driven digital marketing. 
            Let's discuss how we can help you achieve your goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <CTAButtonLarge to="/contact">
              Start Your Journey <FiArrowRight />
            </CTAButtonLarge>
          </motion.div>
        </CTAContent>
      </CTASection>
    </>
  );
};

export default Services;
