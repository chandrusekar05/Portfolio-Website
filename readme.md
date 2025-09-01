# Portfolio Website

## Overview

This is a modern, dark-themed personal portfolio website for Chandru S, built using vanilla HTML, CSS, and JavaScript. The site features a sleek design with pink accent colors (#ff4d88), smooth animations, and responsive layouts. It showcases personal information, services, resume details, and contact information in an interactive single-page application format.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The portfolio follows a traditional client-side architecture using vanilla web technologies:

- **HTML Structure**: Semantic HTML5 with section-based layout for different content areas (hero, services, resume, work, contact)
- **CSS Styling**: Modern CSS3 with custom properties, flexbox/grid layouts, and CSS animations for smooth transitions
- **JavaScript Functionality**: Vanilla JavaScript for interactive features including mobile navigation, smooth scrolling, and tabbed resume sections

### Design System
- **Color Scheme**: Dark theme (#121212 background) with pink accents (#ff4d88) and light text (#d1d1d1)
- **Typography**: Poppins font family from Google Fonts with varied weights (300-900)
- **Layout**: Responsive design with mobile-first approach and hamburger menu for mobile navigation
- **Animation**: CSS transitions and JavaScript-driven smooth scrolling for enhanced user experience

### Component Structure
- **Header**: Fixed navigation bar with logo, menu items, and hire button
- **Hero Section**: Main introduction with call-to-action and social links
- **Services**: Card-based layout showcasing offered services
- **Resume**: Tabbed interface for displaying different resume sections
- **Interactive Elements**: Mobile hamburger menu, smooth scroll navigation, and tab switching functionality

## External Dependencies

### CDN Resources
- **Google Fonts**: Poppins font family for typography
- **Font Awesome**: Version 6.4.0 for icons throughout the site

### Browser APIs
- **Scroll API**: For smooth scrolling functionality
- **DOM API**: For interactive element manipulation and event handling


# Contact Form Implementation

## Overview
The contact form has been successfully implemented using EmailJS for seamless email functionality without requiring a backend server.

## Files Modified/Created

### 1. `main.js` (NEW FILE)
- Contains all contact form functionality
- Initializes EmailJS with your API key
- Handles form submission and validation
- Provides real-time validation feedback
- Shows loading states and success/error messages

### 2. `index.html`
- Updated contact form structure to match the JavaScript requirements
- Added EmailJS CDN script
- Added reference to `main.js`
- Form fields: Name, Email, Subject, Message

### 3. `styles.css`
- Added error message styling
- Added disabled button states
- Added spinner animation for loading states
- Removed unused form-row styles

### 4. `script.js`
- Removed old contact form handling code
- Contact form is now handled in `main.js`

## Features

### ✅ Form Validation
- Real-time field validation on blur
- Email format validation
- Required field checking
- Visual feedback with border colors

### ✅ User Experience
- Loading spinner during submission
- Disabled button state while sending
- Success/error messages
- Form auto-clear on successful submission
- Auto-hide messages after 5 seconds

### ✅ EmailJS Integration
- Uses your service ID: `service_kig9ftn`
- Uses your template ID: `template_jn59rr5`
- Uses your public key: `8JmeJpuSOxRNVC48m`

## How It Works

1. **Form Submission**: User fills out the form and clicks "Send Message"
2. **Validation**: JavaScript validates all fields and email format
3. **EmailJS**: If validation passes, EmailJS sends the email using your template
4. **Feedback**: User sees loading state, then success/error message
5. **Reset**: Form clears and resets to initial state

## Testing

To test the contact form:
1. Open the website in a browser
2. Navigate to the Contact section
3. Fill out the form with valid information
4. Submit and verify EmailJS integration works
5. Check browser console for any errors

## Troubleshooting

- **EmailJS not working**: Verify your service ID, template ID, and public key are correct
- **Form not submitting**: Check browser console for JavaScript errors
- **Styling issues**: Ensure all CSS files are properly linked

## Security Notes

- The EmailJS public key is visible in the frontend (this is normal and safe)
- EmailJS handles the actual email sending securely on their servers
- Form validation is client-side only (consider adding server-side validation for production)

## Future Enhancements

- Add reCAPTCHA for spam protection
- Implement rate limiting
- Add file upload capability
- Enhanced server-side validation
