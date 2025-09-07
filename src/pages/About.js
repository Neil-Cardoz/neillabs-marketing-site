import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiHeart, FiUsers, FiTarget, FiTrendingUp } from 'react-icons/fi';

const AboutHero = styled.section`
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

const StorySection = styled.section`
  padding: 6rem 0;
`;

const StoryContainer = styled.div`
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

const StoryContent = styled(motion.div)`
  h2 {
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 2rem;
  }
  
  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.gray};
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
`;

const StoryImage = styled(motion.div)`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryDark});
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 300px;
    font-size: 3rem;
  }
`;

const ValuesSection = styled.section`
  background-color: ${({ theme }) => theme.colors.light};
  padding: 6rem 0;
`;

const ValuesContainer = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding};
  text-align: center;
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

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ValueCard = styled(motion.div)`
  background: white;
  padding: 2.5rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  text-align: center;
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

const ValueIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryDark});
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
  font-size: 2rem;
`;

const ValueTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
`;

const ValueDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
`;

const MissionSection = styled.section`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.dark});
  color: white;
  padding: 6rem 0;
`;

const MissionContainer = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding};
  text-align: center;
`;

const MissionContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  
  h2 {
    color: white;
    margin-bottom: 2rem;
  }
  
  p {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.grayLight};
    line-height: 1.7;
    margin-bottom: 2rem;
  }
`;

const CTAButton = styled(motion(Link))`
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

const About = () => {
  const values = [
    {
      icon: <FiHeart />,
      title: "Passion for Helping Others",
      description: "Our core mission is to help businesses succeed and create meaningful connections in their communities. We believe in the power of collaboration and mutual support."
    },
    {
      icon: <FiUsers />,
      title: "Building Communities",
      description: "We strive to create a world where everyone knows each other and can help each other in their time of need. Strong communities lead to thriving businesses."
    },
    {
      icon: <FiTarget />,
      title: "Focus on Your Business",
      description: "We handle the complexity of digital marketing so you can concentrate on what you do best. Our goal is to remove barriers and simplify your growth journey."
    },
    {
      icon: <FiTrendingUp />,
      title: "Affordable Excellence",
      description: "Quality digital marketing shouldn't break the bank. We provide enterprise-level services at marginal costs, making growth accessible to all businesses."
    }
  ];

  return (
    <>
      <AboutHero>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Neillabs.ai
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We're passionate about helping businesses turn data into action and creating 
            a world where everyone can help each other thrive.
          </HeroSubtitle>
        </HeroContent>
      </AboutHero>

      <StorySection>
        <StoryContainer>
          <StoryContent
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Our Story</h2>
            <p>
              Neillabs.ai was born from a simple belief: every business deserves the opportunity to succeed 
              in the digital world, regardless of their size or budget. We saw too many talented entrepreneurs 
              struggling with the complexities of digital marketing while trying to focus on their craft.
            </p>
            <p>
              Founded by Neil Christy, our company combines technical expertise with a genuine passion for 
              helping others. We believe in creating meaningful connections and building communities where 
              businesses support each other's growth.
            </p>
            <p>
              Our mission extends beyond just providing services – we're building a network of thriving 
              businesses that can rely on each other in times of need, creating a stronger, more connected 
              business ecosystem.
            </p>
          </StoryContent>
          
          <StoryImage
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            🚀
          </StoryImage>
        </StoryContainer>
      </StorySection>

      <ValuesSection>
        <ValuesContainer>
          <SectionTitle>Our Values</SectionTitle>
          <SectionSubtitle>
            These core principles guide everything we do and shape how we work with our clients.
          </SectionSubtitle>
          
          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <ValueIcon>
                  {value.icon}
                </ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>
        </ValuesContainer>
      </ValuesSection>

      <MissionSection>
        <MissionContainer>
          <MissionContent
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Our Mission</h2>
            <p>
              To democratize digital marketing by providing affordable, high-quality services that allow 
              businesses to focus on their core strengths while we handle their online presence. We're 
              committed to building a world where success is accessible to all, and where businesses 
              form lasting partnerships that benefit entire communities.
            </p>
            <p>
              Every project we take on is an opportunity to help someone achieve their dreams while 
              contributing to a stronger, more connected business ecosystem.
            </p>
            
            <CTAButton
              to="/contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Join Our Community <FiArrowRight />
            </CTAButton>
          </MissionContent>
        </MissionContainer>
      </MissionSection>
    </>
  );
};

export default About;
