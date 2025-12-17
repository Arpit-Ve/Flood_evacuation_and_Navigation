// Login Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Update icon
        const eyeIcon = this.querySelector('.eye-icon');
        if (type === 'text') {
            eyeIcon.innerHTML = `
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
            `;
        } else {
            eyeIcon.innerHTML = `
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
            `;
        }
    });

    // Email validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Real-time email validation
    emailInput.addEventListener('blur', function() {
        const wrapper = this.closest('.input-wrapper');
        if (this.value && !validateEmail(this.value)) {
            wrapper.classList.add('error');
            wrapper.classList.remove('success');
            emailError.textContent = 'Please enter a valid email address';
        } else if (this.value && validateEmail(this.value)) {
            wrapper.classList.remove('error');
            wrapper.classList.add('success');
            emailError.textContent = '';
        } else {
            wrapper.classList.remove('error', 'success');
            emailError.textContent = '';
        }
    });

    // Real-time password validation
    passwordInput.addEventListener('blur', function() {
        const wrapper = this.closest('.input-wrapper');
        if (this.value && this.value.length < 6) {
            wrapper.classList.add('error');
            wrapper.classList.remove('success');
            passwordError.textContent = 'Password must be at least 6 characters';
        } else if (this.value && this.value.length >= 6) {
            wrapper.classList.remove('error');
            wrapper.classList.add('success');
            passwordError.textContent = '';
        } else {
            wrapper.classList.remove('error', 'success');
            passwordError.textContent = '';
        }
    });

    // Form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;

        // Validate email
        if (!emailInput.value) {
            emailError.textContent = 'Email is required';
            emailInput.closest('.input-wrapper').classList.add('error');
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
            emailInput.closest('.input-wrapper').classList.add('error');
            isValid = false;
        }

        // Validate password
        if (!passwordInput.value) {
            passwordError.textContent = 'Password is required';
            passwordInput.closest('.input-wrapper').classList.add('error');
            isValid = false;
        } else if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters';
            passwordInput.closest('.input-wrapper').classList.add('error');
            isValid = false;
        }

        if (isValid) {
            // Show loading state
            const submitBtn = loginForm.querySelector('.login-btn');
            submitBtn.classList.add('loading');

            // Simulate login (replace with actual authentication)
            setTimeout(function() {
                submitBtn.classList.remove('loading');
                
                // For demo purposes - show success message
                // In a real app, you would redirect to dashboard or show error
                alert('Login successful! Redirecting to dashboard...');
                
                // Redirect to main page
                window.location.href = 'index.html';
            }, 1500);
        }
    });

    // Social login handlers (placeholder)
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const provider = this.classList.contains('google') ? 'Google' : 'Phone';
            alert(`${provider} login coming soon!`);
        });
    });

    // Clear errors on input focus
    document.querySelectorAll('.input-wrapper input').forEach(input => {
        input.addEventListener('focus', function() {
            this.closest('.input-wrapper').classList.remove('error');
            const errorEl = this.closest('.form-group').querySelector('.error-message');
            if (errorEl) errorEl.textContent = '';
        });
    });
});
