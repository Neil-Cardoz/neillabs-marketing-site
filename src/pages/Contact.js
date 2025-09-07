import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiX } from 'react-icons/fi';

const ContactHero = styled.section`
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

const ContactSection = styled.section`
  padding: 6rem 0;
`;

const ContactContainer = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled(motion.div)`
  h2 {
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 2rem;
  }
  
  p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.gray};
    line-height: 1.7;
    margin-bottom: 3rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryDark});
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  flex-shrink: 0;
`;

const ContactDetails = styled.div`
  h4 {
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 0.5rem;
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
  
  p {
    color: ${({ theme }) => theme.colors.gray};
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

const ContactForm = styled(motion.form)`
  background: white;
  padding: 2.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
`;

const FormTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 2rem;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid ${({ theme, hasError }) => hasError ? theme.colors.error : theme.colors.grayLight};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: ${({ theme }) => theme.transition};
  background-color: ${({ theme }) => theme.colors.background};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid ${({ theme, hasError }) => hasError ? theme.colors.error : theme.colors.grayLight};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  transition: ${({ theme }) => theme.transition};
  background-color: ${({ theme }) => theme.colors.background};
  resize: vertical;
  min-height: 120px;
  font-family: ${({ theme }) => theme.fonts.body};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryDark});
  color: white;
  padding: 0.875rem 2rem;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: ${({ theme }) => theme.colors.success}20;
  border: 1px solid ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.success};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const MapSection = styled.section`
  background-color: ${({ theme }) => theme.colors.light};
  padding: 4rem 0;
`;

const MapContainer = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding};
  text-align: center;
`;

const MapTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
`;

const MapSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: 2rem;
`;

const MapPlaceholder = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryDark});
  height: 400px;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
`;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
    email: yup.string().email('Please enter a valid email').required('Email is required'),
    company: yup.string().required('Company name is required'),
    message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate API call - replace with actual submission logic
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend or EmailJS
      console.log('Form data:', data);
      
      setIsSubmitted(true);
      reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    {
      icon: <FiMail />,
      title: "Email Us",
      details: "hello@neillabs.ai"
    },
    {
      icon: <FiPhone />,
      title: "Call Us",
      details: "+1 (555) 123-4567"
    },
    {
      icon: <FiMapPin />,
      title: "Visit Us",
      details: "123 Business Avenue, Suite 100\nCity, State 12345"
    }
  ];

  return (
    <>
      <ContactHero>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get In Touch
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to transform your business? Let's discuss how we can help you 
            achieve your digital marketing goals and turn data into action.
          </HeroSubtitle>
        </HeroContent>
      </ContactHero>

      <ContactSection>
        <ContactContainer>
          <ContactInfo
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Let's Start a Conversation</h2>
            <p>
              We're here to help your business thrive in the digital world. Whether you're looking 
              to improve your online presence, increase sales, or build meaningful connections with 
              your audience, we'd love to hear from you.
            </p>
            
            {contactItems.map((item, index) => (
              <ContactItem key={index}>
                <ContactIcon>
                  {item.icon}
                </ContactIcon>
                <ContactDetails>
                  <h4>{item.title}</h4>
                  <p style={{ whiteSpace: 'pre-line' }}>{item.details}</p>
                </ContactDetails>
              </ContactItem>
            ))}
          </ContactInfo>

          <ContactForm
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormTitle>Send Us a Message</FormTitle>
            
            {isSubmitted && (
              <SuccessMessage
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FiCheck size={20} />
                <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
              </SuccessMessage>
            )}

            <FormGroup>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                type="text"
                id="name"
                placeholder="Enter your full name"
                hasError={errors.name}
                {...register('name')}
              />
              {errors.name && (
                <ErrorMessage>
                  <FiX size={16} />
                  {errors.name.message}
                </ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter your email address"
                hasError={errors.email}
                {...register('email')}
              />
              {errors.email && (
                <ErrorMessage>
                  <FiX size={16} />
                  {errors.email.message}
                </ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="company">Company Name *</Label>
              <Input
                type="text"
                id="company"
                placeholder="Enter your company name"
                hasError={errors.company}
                {...register('company')}
              />
              {errors.company && (
                <ErrorMessage>
                  <FiX size={16} />
                  {errors.company.message}
                </ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your project and how we can help..."
                hasError={errors.message}
                {...register('message')}
              />
              {errors.message && (
                <ErrorMessage>
                  <FiX size={16} />
                  {errors.message.message}
                </ErrorMessage>
              )}
            </FormGroup>

            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message <FiSend />
                </>
              )}
            </SubmitButton>
          </ContactForm>
        </ContactContainer>
      </ContactSection>

      <MapSection>
        <MapContainer>
          <MapTitle>Find Us</MapTitle>
          <MapSubtitle>
            Located in the heart of the business district, we're always ready to meet in person.
          </MapSubtitle>
          <MapPlaceholder>
            📍 Interactive Map Coming Soon
          </MapPlaceholder>
        </MapContainer>
      </MapSection>
    </>
  );
};

export default Contact;
