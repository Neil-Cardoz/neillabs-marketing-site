import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCalendar, FiUser, FiClock } from 'react-icons/fi';
import blogData from '../data/blog.json';

const BlogHero = styled.section`
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

const BlogSection = styled.section`
  padding: 6rem 0;
`;

const BlogContainer = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding};
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const BlogCard = styled(motion.article)`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

const BlogImage = styled.div`
  height: 200px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}80, ${({ theme }) => theme.colors.primaryDark}80);
  }
`;

const BlogContent = styled.div`
  padding: 2rem;
`;

const BlogCategory = styled.span`
  background: ${({ theme }) => theme.colors.primary}20;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  margin-bottom: 1rem;
  display: inline-block;
`;

const BlogTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  line-height: 1.3;
`;

const BlogExcerpt = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ReadMoreLink = styled(Link)`
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

const CTASection = styled.section`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.dark});
  color: white;
  padding: 6rem 0;
  text-align: center;
  margin-top: 4rem;
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

const Blog = () => {
  return (
    <>
      <BlogHero>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Insights & Resources
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Stay ahead of the curve with our latest insights on digital marketing, 
            business growth, and industry trends.
          </HeroSubtitle>
        </HeroContent>
      </BlogHero>

      <BlogSection>
        <BlogContainer>
          <BlogGrid>
            {blogData.map((post, index) => (
              <BlogCard
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <BlogImage 
                  image={post.image}
                  style={{ 
                    backgroundImage: `url(${post.image})`,
                  }}
                >
                  {!post.image && '📝'}
                </BlogImage>
                
                <BlogContent>
                  <BlogCategory>{post.category}</BlogCategory>
                  <BlogTitle>{post.title}</BlogTitle>
                  <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                  
                  <BlogMeta>
                    <MetaItem>
                      <FiUser size={14} />
                      <span>{post.author}</span>
                    </MetaItem>
                    <MetaItem>
                      <FiCalendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </MetaItem>
                    <MetaItem>
                      <FiClock size={14} />
                      <span>{post.readTime}</span>
                    </MetaItem>
                  </BlogMeta>
                  
                  <ReadMoreLink to={`/blog/${post.slug}`}>
                    Read More <FiArrowRight />
                  </ReadMoreLink>
                </BlogContent>
              </BlogCard>
            ))}
          </BlogGrid>
        </BlogContainer>
      </BlogSection>

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
            Don't just read about success – experience it. Let's discuss how we can help 
            your business thrive with our proven digital marketing strategies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <CTAButton to="/contact">
              Get Started Today <FiArrowRight />
            </CTAButton>
          </motion.div>
        </CTAContent>
      </CTASection>
    </>
  );
};

export default Blog;
