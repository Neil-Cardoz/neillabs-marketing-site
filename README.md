# Neillabs.ai Marketing Website

A modern, responsive React website for Neillabs.ai - a digital marketing agency focused on helping businesses turn data into action.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Fast Performance**: Built with React and optimized for speed
- **SEO Friendly**: Structured for search engine optimization
- **Interactive Forms**: Contact form with validation
- **Blog System**: Ready for content management integration
- **Accessible**: Built with accessibility best practices

## 📋 Pages

- **Home**: Hero section, services preview, testimonials, and company values
- **Services**: Detailed service descriptions with features and pricing
- **About**: Company story, mission, values, and team information
- **Testimonials**: Customer success stories and reviews
- **Blog**: Insights and resources for digital marketing
- **Contact**: Contact form with company information

## 🛠 Technologies Used

- **React 18**: Modern React with hooks
- **React Router DOM**: Client-side routing
- **Styled Components**: CSS-in-JS styling solution
- **Framer Motion**: Smooth animations and transitions
- **React Hook Form**: Form handling and validation
- **Yup**: Schema validation
- **React Icons**: Icon library (Feather Icons)

## 🏁 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/neillabs-marketing-site.git
cd neillabs-marketing-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📁 Project Structure

```
src/
├── assets/          # Images, logos, and static assets
├── components/      # Reusable UI components
│   ├── Footer.js
│   ├── Layout.js
│   └── Navbar.js
├── data/           # Static data files
│   ├── blog.json
│   ├── services.json
│   └── testimonials.json
├── pages/          # Page components
│   ├── About.js
│   ├── Blog.js
│   ├── Contact.js
│   ├── Home.js
│   ├── Services.js
│   └── Testimonials.js
├── styles/         # Global styles and theme
│   └── GlobalStyles.js
├── App.js          # Main app component
└── index.js        # Entry point
```

## 🎨 Design System

### Colors
- **Primary**: #2563EB (Blue)
- **Primary Dark**: #1D4ED8
- **Secondary**: #0F172A (Dark Navy)
- **Accent**: #10B981 (Teal)
- **Gray**: #64748B
- **Background**: #FFFFFF

### Typography
- **Headings**: Montserrat
- **Body**: Open Sans

### Breakpoints
- **Mobile**: 768px and below
- **Tablet**: 769px - 1024px
- **Desktop**: 1025px and above

## 🚀 Available Scripts

### `npm start`
Runs the app in development mode. The page will reload if you make edits.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm run eject`
**Note: this is a one-way operation. Once you eject, you can't go back!**

## 📧 Contact Form Integration

The contact form is ready for integration with email services. You can integrate with:

1. **EmailJS**: Add your service ID and template ID
2. **Backend API**: Update the form submission handler
3. **Netlify Forms**: Add `netlify` attribute to the form

### EmailJS Setup Example:
```javascript
import emailjs from 'emailjs-com';

emailjs.send(
  'your_service_id',
  'your_template_id',
  formData,
  'your_user_id'
);
```

## 🌐 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Set up continuous deployment from your Git repository

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect it's a React app
3. Deploy with zero configuration

### Traditional Hosting
1. Build the project: `npm run build`
2. Upload the contents of the `build` folder to your web server

## 🔧 Customization

### Adding New Services
Update the `src/data/services.json` file with your service information.

### Adding Testimonials
Update the `src/data/testimonials.json` file.

### Blog Posts
Update the `src/data/blog.json` file.

## 👨‍💻 Author

**Neil Christy** - Neillabs.ai
- Email: hello@neillabs.ai
- Website: [neillabs.ai](https://neillabs.ai)

---

Built with ❤️ by [Neillabs.ai](https://neillabs.ai)
This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
