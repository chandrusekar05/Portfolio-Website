// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    emailjs.init('8JmeJpuSOxRNVC48m');

    // Contact Form Elements
    const contactForm = document.getElementById('contact-form'),
        contactFirstName = document.getElementById('contact-firstname'),
        contactLastName = document.getElementById('contact-lastname'),
        contactEmail = document.getElementById('contact-email'),
        contactService = document.getElementById('contact-service'),
        contactPhone = document.getElementById('contact-phone'),
        contactMessage = document.getElementById('contact-message'),
        errorMessage = document.getElementById('error-message');

    // Send Email Function
    const sendEmail = (e) => {
        e.preventDefault();

        // Clear previous error messages
        errorMessage.textContent = '';
        errorMessage.style.color = '';

        // Check if all fields have values
        if(
            contactFirstName.value.trim() === '' || 
            contactLastName.value.trim() === '' || 
            contactEmail.value.trim() === '' || 
            contactService.value === '' || 
            contactPhone.value.trim() === '' || 
            contactMessage.value.trim() === ''
        ){
            errorMessage.textContent = 'Please fill in all the input fields';
            errorMessage.style.color = '#ff4d88';
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(contactEmail.value.trim())) {
            errorMessage.textContent = 'Please enter a valid email address';
            errorMessage.style.color = '#ff4d88';
            return;
        }

        // Phone validation
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(contactPhone.value.trim().replace(/\s/g, ''))) {
            errorMessage.textContent = 'Please enter a valid phone number';
            errorMessage.style.color = '#ff4d88';
            return;
        }

        // Show loading state
        const submitBtn = contactForm.querySelector('.send-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        // Send email using EmailJS
        emailjs.sendForm(
            'service_kig9ftn',
            'template_jn59rr5',
            '#contact-form',
            '8JmeJpuSOxRNVC48m'
        )
        .then(() => {
            // Success
            errorMessage.classList.add('color-first');
            errorMessage.textContent = 'Message sent successfully!';
            errorMessage.style.color = '#4caf50';

            // Clear form fields
            contactFirstName.value = '';
            contactLastName.value = '';
            contactEmail.value = '';
            contactService.value = '';
            contactPhone.value = '';
            contactMessage.value = '';

            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;

            // Clear success message after 5 seconds
            setTimeout(() => {
                errorMessage.textContent = '';
                errorMessage.style.color = '';
                errorMessage.classList.remove('color-first');
            }, 5000);
        }, 
        (error) => {
            // Error handling
            errorMessage.textContent = 'Failed to send message. Please try again.';
            errorMessage.style.color = '#ff4d88';
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            console.error('EmailJS Error:', error);
        });
    };

    // Add event listener to contact form
    contactForm.addEventListener('submit', sendEmail);

    // Work Navigation Functionality
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    const projectCards = document.querySelectorAll('.project-card');
    let currentProjectIndex = 0;

    function showProject(index) {
        // Hide all project cards
        projectCards.forEach(card => {
            card.classList.remove('active');
        });
        
        // Show the selected project card
        if (projectCards[index]) {
            projectCards[index].classList.add('active');
        }
        
        // Update button text based on current project
        if (index === projectCards.length - 1) {
            viewMoreBtn.innerHTML = 'View Previous Work <i class="fas fa-arrow-left"></i>';
        } else {
            viewMoreBtn.innerHTML = 'View More Work <i class="fas fa-arrow-right"></i>';
        }
    }

    // Initialize first project
    showProject(0);

    // Add click event to view more button
    viewMoreBtn.addEventListener('click', () => {
        if (currentProjectIndex === projectCards.length - 1) {
            // Go back to first project
            currentProjectIndex = 0;
        } else {
            // Go to next project
            currentProjectIndex++;
        }
        showProject(currentProjectIndex);
    });

    // Add real-time validation feedback
    const inputs = [contactFirstName, contactLastName, contactEmail, contactService, contactPhone, contactMessage];
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            // Clear error message when user starts typing
            if (this.value.trim() !== '') {
                this.style.borderColor = 'rgba(255, 77, 136, 0.2)';
            }
        });
    });

    // Field validation function
    function validateField(field) {
        const value = field.value.trim();
        
        if (field === contactService) {
            // Handle dropdown validation
            if (value === '') {
                field.style.borderColor = '#ff4d88';
            } else {
                field.style.borderColor = 'rgba(255, 77, 136, 0.2)';
            }
        } else if (value === '') {
            field.style.borderColor = '#ff4d88';
        } else if (field === contactEmail) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                field.style.borderColor = '#ff4d88';
            } else {
                field.style.borderColor = 'rgba(255, 77, 136, 0.2)';
            }
        } else if (field === contactPhone) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(value.replace(/\s/g, ''))) {
                field.style.borderColor = '#ff4d88';
            } else {
                field.style.borderColor = 'rgba(255, 77, 136, 0.2)';
            }
        } else {
            field.style.borderColor = 'rgba(255, 77, 136, 0.2)';
        }
    }
});
