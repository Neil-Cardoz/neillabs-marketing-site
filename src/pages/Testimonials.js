import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiStar } from 'react-icons/fi';
import testimonialsData from '../data/testimonials.json';

const TestimonialsHero = styled.section`
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

const TestimonialsSection = styled.section`
  padding: 6rem 0;
`;

const TestimonialsContainer = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding};
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const TestimonialCard = styled(motion.div)`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: 2.5rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  position: relative;
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
  
  &::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: 20px;
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.heading};
    opacity: 0.3;
  }
`;

const TestimonialText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.7;
  margin-bottom: 2rem;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  object-fit: cover;
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const AuthorName = styled.h4`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0.25rem;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const AuthorTitle = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const CompanyName = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin: 0;
`;

const StarRating = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.5rem;
`;

const Star = styled(FiStar)`
  fill: ${({ filled, theme }) => filled ? theme.colors.warning : 'none'};
  color: ${({ theme }) => theme.colors.warning};
`;

const StatsSection = styled.section`
  background-color: ${({ theme }) => theme.colors.light};
  padding: 4rem 0;
  margin: 4rem 0;
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
    font-size: ${({ theme }) => theme.fontSizes.lg};
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

const Testimonials = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} filled={index < rating} size={16} />
    ));
  };

  const stats = [
    { number: "98%", label: "Client Satisfaction Rate" },
    { number: "300%", label: "Average ROI Increase" },
    { number: "500+", label: "Businesses Transformed" },
    { number: "50+", label: "Industries Served" }
  ];

  return (
    <>
      <TestimonialsHero>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Client Success Stories
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover how businesses like yours have transformed their digital presence 
            and achieved remarkable growth with Neillabs.ai.
          </HeroSubtitle>
        </HeroContent>
      </TestimonialsHero>

      <TestimonialsSection>
        <TestimonialsContainer>
          <TestimonialsGrid>
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <TestimonialText>
                  {testimonial.testimonial}
                </TestimonialText>
                
                <TestimonialAuthor>
                  <AuthorImage 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=2563eb&color=fff&size=60`;
                    }}
                  />
                  <AuthorInfo>
                    <AuthorName>{testimonial.name}</AuthorName>
                    <AuthorTitle>{testimonial.position}</AuthorTitle>
                    <CompanyName>{testimonial.company}</CompanyName>
                    <StarRating>
                      {renderStars(testimonial.rating)}
                    </StarRating>
                  </AuthorInfo>
                </TestimonialAuthor>
              </TestimonialCard>
            ))}
          </TestimonialsGrid>
        </TestimonialsContainer>
      </TestimonialsSection>

      <StatsSection>
        <StatsContainer>
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </StatItem>
          ))}
        </StatsContainer>
      </StatsSection>

      <CTASection>
        <CTAContent>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Join These Success Stories?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's discuss how we can help you achieve similar results and transform 
            your business with our proven digital marketing strategies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <CTAButton to="/contact">
              Start Your Success Story <FiArrowRight />
            </CTAButton>
          </motion.div>
        </CTAContent>
      </CTASection>
    </>
  );
};

export default Testimonials;
