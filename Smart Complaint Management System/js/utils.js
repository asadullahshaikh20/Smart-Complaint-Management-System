// DOM Manipulation Utilities
export const DOM = {
    // Query selector helper
    select: (selector) => document.querySelector(selector),

    // Query selector all helper
    selectAll: (selector) => document.querySelectorAll(selector),

    // Create element with attributes
    createElement: (tag, attributes = {}, content = '') => {
        const element = document.createElement(tag);

        Object.entries(attributes).forEach(([key, value]) => {
            if (key === 'className') {
                element.className = value;
            } else if (key === 'dataset') {
                Object.entries(value).forEach(([dataKey, dataValue]) => {
                    element.dataset[dataKey] = dataValue;
                });
            } else {
                element.setAttribute(key, value);
            }
        });

        if (content) {
            element.innerHTML = content;
        }

        return element;
    },

    // Add event listener to multiple elements
    addEventToAll: (selector, event, handler) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => element.addEventListener(event, handler));
    }
};

// Date Formatting Utilities
export const DateUtils = {
    // Format date to readable string
    formatDate: (date) => {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return new Date(date).toLocaleDateString('en-US', options);
    },

    // Get relative time (e.g., "2 hours ago")
    getRelativeTime: (date) => {
        const now = new Date();
        const past = new Date(date);
        const diffInSeconds = Math.floor((now - past) / 1000);

        if (diffInSeconds < 60) return 'Just now';
        if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
        if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
        return `${Math.floor(diffInSeconds / 86400)} days ago`;
    },

    // Get current timestamp
    getCurrentTimestamp: () => new Date().toISOString()
};

// Notification System
export const Notify = {
    // Show success notification
    success: (message, duration = 3000) => {
        const alert = DOM.createElement('div', {
            className: 'alert alert-custom alert-success position-fixed',
            style: 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;'
        }, `
            <strong>Success!</strong> ${message}
        `);

        document.body.appendChild(alert);

        setTimeout(() => {
            alert.style.opacity = '0';
            alert.style.transition = 'opacity 0.5s';
            setTimeout(() => alert.remove(), 500);
        }, duration);
    },

    // Show error notification
    error: (message, duration = 4000) => {
        const alert = DOM.createElement('div', {
            className: 'alert alert-custom alert-error position-fixed',
            style: 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;'
        }, `
            <strong>Error!</strong> ${message}
        `);

        document.body.appendChild(alert);

        setTimeout(() => {
            alert.style.opacity = '0';
            alert.style.transition = 'opacity 0.5s';
            setTimeout(() => alert.remove(), 500);
        }, duration);
    },

    // Show info notification
    info: (message, duration = 3000) => {
        const alert = DOM.createElement('div', {
            className: 'alert alert-info position-fixed',
            style: 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;'
        }, `
            <strong>Info!</strong> ${message}
        `);

        document.body.appendChild(alert);

        setTimeout(() => {
            alert.style.opacity = '0';
            alert.style.transition = 'opacity 0.5s';
            setTimeout(() => alert.remove(), 500);
        }, duration);
    }
};

// Animation Utilities
export const Animate = {
    // Fade in animation
    fadeIn: (element, duration = 500) => {
        element.style.opacity = '0';
        element.style.transition = `opacity ${duration}ms`;

        setTimeout(() => {
            element.style.opacity = '1';
        }, 10);
    },

    // Slide down animation
    slideDown: (element, duration = 300) => {
        element.style.maxHeight = '0';
        element.style.overflow = 'hidden';
        element.style.transition = `max-height ${duration}ms ease-out`;

        setTimeout(() => {
            element.style.maxHeight = element.scrollHeight + 'px';
        }, 10);
    },

    // Pulse animation
    pulse: (element) => {
        element.classList.add('animate-pulse');
        setTimeout(() => {
            element.classList.remove('animate-pulse');
        }, 2000);
    }
};

// String Utilities
export const StringUtils = {
    // Capitalize first letter
    capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(),

    // Truncate string
    truncate: (str, length = 50) => {
        return str.length > length ? str.substring(0, length) + '...' : str;
    },

    // Generate random ID
    generateId: (prefix = 'id') => {
        return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
};

// Array Utilities with ES6 features
export const ArrayUtils = {
    // Filter array by property
    filterBy: (array, property, value) => {
        return array.filter(item => item[property] === value);
    },

    // Sort array by property
    sortBy: (array, property, order = 'asc') => {
        return [...array].sort((a, b) => {
            if (order === 'asc') {
                return a[property] > b[property] ? 1 : -1;
            } else {
                return a[property] < b[property] ? 1 : -1;
            }
        });
    },

    // Group array by property
    groupBy: (array, property) => {
        return array.reduce((groups, item) => {
            const key = item[property];
            if (!groups[key]) {
                groups[key] = [];
            }
            groups[key].push(item);
            return groups;
        }, {});
    }
};

// Export all utilities as default object
export default {
    DOM,
    DateUtils,
    Notify,
    Animate,
    StringUtils,
    ArrayUtils
};
