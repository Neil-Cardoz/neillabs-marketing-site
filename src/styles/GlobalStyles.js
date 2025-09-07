import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#2563EB', // Main blue from logo
    primaryLight: '#3B82F6',
    primaryDark: '#1D4ED8',
    secondary: '#0F172A', // Dark blue/navy
    accent: '#10B981', // Teal for accents
    light: '#F8FAFC',
    dark: '#1E293B',
    gray: '#64748B',
    grayLight: '#CBD5E1',
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
    background: '#FFFFFF',
  },
  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Open Sans', sans-serif",
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
  breakpoints: {
    xs: '360px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
  transition: 'all 0.3s ease-in-out',
  container: {
    padding: '2rem',
    maxWidth: '1200px',
  },
};

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.dark};
    background-color: ${({ theme }) => theme.colors.background};
    line-height: 1.6;
    overflow-x: hidden;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
  
  h1 {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes['4xl']};
    }
  }
  
  h2 {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes['3xl']};
    }
  }
  
  h3 {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes['2xl']};
    }
  }
  
  h4 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
  
  h5 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
  
  h6 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
  
  p {
    margin-bottom: 1.5rem;
  }
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: ${({ theme }) => theme.transition};
    
    &:hover {
      color: ${({ theme }) => theme.colors.primaryDark};
    }
  }
  
  button {
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.body};
    transition: ${({ theme }) => theme.transition};
  }
  
  img {
    max-width: 100%;
  }
  
  section {
    padding: 5rem 0;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: 3rem 0;
    }
  }
  
  .container {
    width: 100%;
    max-width: ${({ theme }) => theme.container.maxWidth};
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.container.padding};
  }
  
  .text-center {
    text-align: center;
  }
  
  .text-primary {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  .text-secondary {
    color: ${({ theme }) => theme.colors.secondary};
  }
  
  .text-accent {
    color: ${({ theme }) => theme.colors.accent};
  }
  
  .text-light {
    color: ${({ theme }) => theme.colors.light};
  }
  
  .bg-primary {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  
  .bg-secondary {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  
  .bg-light {
    background-color: ${({ theme }) => theme.colors.light};
  }
  
  .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
  .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
  .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
  .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
  .py-5 { padding-top: 1.25rem; padding-bottom: 1.25rem; }
  
  .px-1 { padding-left: 0.25rem; padding-right: 0.25rem; }
  .px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
  .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
  .px-4 { padding-left: 1rem; padding-right: 1rem; }
  .px-5 { padding-left: 1.25rem; padding-right: 1.25rem; }
  
  .my-1 { margin-top: 0.25rem; margin-bottom: 0.25rem; }
  .my-2 { margin-top: 0.5rem; margin-bottom: 0.5rem; }
  .my-3 { margin-top: 0.75rem; margin-bottom: 0.75rem; }
  .my-4 { margin-top: 1rem; margin-bottom: 1rem; }
  .my-5 { margin-top: 1.25rem; margin-bottom: 1.25rem; }
  
  .mx-1 { margin-left: 0.25rem; margin-right: 0.25rem; }
  .mx-2 { margin-left: 0.5rem; margin-right: 0.5rem; }
  .mx-3 { margin-left: 0.75rem; margin-right: 0.75rem; }
  .mx-4 { margin-left: 1rem; margin-right: 1rem; }
  .mx-5 { margin-left: 1.25rem; margin-right: 1.25rem; }
  
  .mb-1 { margin-bottom: 0.25rem; }
  .mb-2 { margin-bottom: 0.5rem; }
  .mb-3 { margin-bottom: 0.75rem; }
  .mb-4 { margin-bottom: 1rem; }
  .mb-5 { margin-bottom: 1.25rem; }
  
  .mt-1 { margin-top: 0.25rem; }
  .mt-2 { margin-top: 0.5rem; }
  .mt-3 { margin-top: 0.75rem; }
  .mt-4 { margin-top: 1rem; }
  .mt-5 { margin-top: 1.25rem; }
`;

export default GlobalStyles;
