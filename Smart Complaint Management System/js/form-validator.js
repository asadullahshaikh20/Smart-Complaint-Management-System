class FormValidator {
    // Email validation using regex
    static validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Required field validation
    static validateRequired(value) {
        return value !== null && value !== undefined && value.trim() !== '';
    }

    // Minimum length validation
    static validateMinLength(value, minLength) {
        return value.length >= minLength;
    }

    // Maximum length validation
    static validateMaxLength(value, maxLength) {
        return value.length <= maxLength;
    }

    // Validate entire form
    static validateForm(formData, rules) {
        const errors = {};

        for (const [field, value] of Object.entries(formData)) {
            const fieldRules = rules[field];

            if (!fieldRules) continue;

            // Check required
            if (fieldRules.required && !this.validateRequired(value)) {
                errors[field] = `${fieldRules.label || field} is required`;
                continue;
            }

            // Check email
            if (fieldRules.email && value && !this.validateEmail(value)) {
                errors[field] = 'Please enter a valid email address';
                continue;
            }

            // Check min length
            if (fieldRules.minLength && value && !this.validateMinLength(value, fieldRules.minLength)) {
                errors[field] = `${fieldRules.label || field} must be at least ${fieldRules.minLength} characters`;
                continue;
            }

            // Check max length
            if (fieldRules.maxLength && value && !this.validateMaxLength(value, fieldRules.maxLength)) {
                errors[field] = `${fieldRules.label || field} must not exceed ${fieldRules.maxLength} characters`;
                continue;
            }
        }

        return {
            isValid: Object.keys(errors).length === 0,
            errors
        };
    }

    // Show error message on form field
    static showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const feedback = field?.nextElementSibling;

        if (field) {
            field.classList.add('is-invalid');
            field.classList.remove('is-valid');
        }

        if (feedback && feedback.classList.contains('invalid-feedback')) {
            feedback.textContent = message;
        }
    }

    // Show success state on form field
    static showSuccess(fieldId) {
        const field = document.getElementById(fieldId);
        const feedback = field?.nextElementSibling;

        if (field) {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
        }

        if (feedback && feedback.classList.contains('invalid-feedback')) {
            feedback.textContent = '';
        }
    }

    // Clear all validation states
    static clearValidation(formId) {
        const form = document.getElementById(formId);
        const fields = form?.querySelectorAll('.form-control, .form-select');

        fields?.forEach(field => {
            field.classList.remove('is-invalid', 'is-valid');
        });

        const feedbacks = form?.querySelectorAll('.invalid-feedback');
        feedbacks?.forEach(feedback => {
            feedback.textContent = '';
        });
    }

    // Real-time validation
    static attachRealTimeValidation(fieldId, validationRules) {
        const field = document.getElementById(fieldId);

        if (!field) return;

        field.addEventListener('blur', () => {
            const value = field.value;
            const { label, required, email, minLength, maxLength } = validationRules;

            if (required && !this.validateRequired(value)) {
                this.showError(fieldId, `${label} is required`);
                return;
            }

            if (email && value && !this.validateEmail(value)) {
                this.showError(fieldId, 'Please enter a valid email address');
                return;
            }

            if (minLength && value && !this.validateMinLength(value, minLength)) {
                this.showError(fieldId, `${label} must be at least ${minLength} characters`);
                return;
            }

            if (maxLength && value && !this.validateMaxLength(value, maxLength)) {
                this.showError(fieldId, `${label} must not exceed ${maxLength} characters`);
                return;
            }

            if (value) {
                this.showSuccess(fieldId);
            }
        });
    }
}

export default FormValidator;
