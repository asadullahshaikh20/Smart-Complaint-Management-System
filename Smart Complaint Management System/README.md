# Smart Complaint Management System

A modern, front-end web application for managing and tracking complaints efficiently.

![SCMS Banner](assets/images/hero-bg.png)

## 📋 Project Information

**Project Type:** Academic Front-End Web Development  
**Technologies:** HTML5, CSS3, Bootstrap 5, JavaScript ES6+  
**Year:** 2026

**Developed By:**
- **Haresh Kumar** - CMS ID: 023-23-0435
- **Asadullah Shaikh** - CMS ID: 023-23-0080

---

## 🌟 Features

- ✅ **Complaint Registration** - Easy-to-use form with real-time validation
- ✅ **Complaint Management** - View, filter, and manage all complaints
- ✅ **Advanced Filtering** - Search by keyword, filter by status, category, and priority
- ✅ **Status Tracking** - Toggle complaints between Pending and Resolved
- ✅ **Statistics Dashboard** - Real-time complaint statistics
- ✅ **Responsive Design** - Works on all devices
- ✅ **Local Storage** - Data persists across browser sessions
- ✅ **Modern UI** - Professional design with gradients and animations

---

## 🚀 How to Run

### ⚠️ Important Note

This project uses **ES6 modules** which require an HTTP server to run properly. Modern browsers block ES6 modules when opening via `file://` protocol due to CORS security policies.

### Method 1: Using VS Code Live Server (Recommended)

1. Install the "Live Server" extension in VS Code
2. Open the project folder in VS Code
3. Right-click on `index.html`
4. Select "Open with Live Server"
5. Your browser will open at `http://127.0.0.1:5500/`

### Method 2: Using Python HTTP Server

```bash
# Navigate to project directory
cd "c:\Users\DELL\Desktop\Smart Complaint Management System"

# Start Python HTTP server
python -m http.server 8000
```

Then open your browser and navigate to: `http://localhost:8000/index.html`

### Method 3: Using Node.js HTTP Server

```bash
# Install http-server globally (one time only)
npm install -g http-server

# Navigate to project directory and start server
cd "c:\Users\DELL\Desktop\Smart Complaint Management System"
http-server
```

Then open the URL shown in your terminal (usually `http://localhost:8080`)

---

## 📁 Project Structure

```
Smart Complaint Management System/
│
├── index.html                 # Home page
├── register.html             # Complaint registration
├── view-complaints.html      # View all complaints
├── about.html                # About the system
├── contact.html              # Contact form
├── README.md                 # This file
├── PROJECT_DOCUMENTATION.md  # Complete documentation
│
├── css/
│   └── styles.css           # Custom styling
│
├── js/
│   ├── storage.js           # Local Storage module
│   ├── form-validator.js    # Form validation
│   ├── utils.js             # Utility functions
│   └── complaint-manager.js # Complaint management
│
└── assets/
    └── images/              # Images and photos
```

---

## 🛠️ Technologies Used

### Core Technologies
- **HTML5** - Semantic elements, forms, tables
- **CSS3** - Flexbox, Grid, animations, gradients
- **Bootstrap 5** - Responsive layout and components
- **JavaScript ES6+** - Modern JavaScript features

### ES6 Features Implemented
- ✅ Classes and Object-Oriented Programming
- ✅ ES6 Modules (import/export)
- ✅ Arrow Functions
- ✅ Template Literals
- ✅ Destructuring Assignment
- ✅ Spread and Rest Operators
- ✅ Promises and Async/Await
- ✅ Enhanced Object Literals
- ✅ Default Parameters

---

## 📖 User Guide

### Registering a Complaint

1. Click **"Register Complaint"** in the navigation bar
2. Fill out the form with:
   - Your name
   - Email address
   - Complaint category (Technical, Billing, Service, General)
   - Priority level (Low, Medium, High)
   - Detailed description
3. Click **"Submit Complaint"**
4. You'll receive a unique Complaint ID

### Viewing Complaints

1. Click **"View Complaints"** in the navigation
2. Use filters to find specific complaints:
   - Search by ID, name, or email
   - Filter by status (Pending/Resolved)
   - Filter by category
   - Filter by priority
3. Toggle complaint status by clicking the status button
4. Delete complaints if needed

---

## 🎨 Design Highlights

- **Modern gradient theme** with purple and blue colors
- **Smooth animations** for better user experience
- **Custom icons** from Bootstrap Icons
- **Professional typography** using Google Fonts (Poppins)
- **Responsive design** that adapts to any screen size
- **Clean, intuitive interface** with visual feedback

---

## 📄 Documentation

For complete technical documentation, please see:
- **[PROJECT_DOCUMENTATION.md](PROJECT_DOCUMENTATION.md)** - Full project documentation

---

## ✅ Academic Requirements Met

- ✅ 2-5 fully functional web pages (5 created)
- ✅ HTML5 semantic elements and forms
- ✅ CSS3 with flexbox, grid, and animations
- ✅ Bootstrap 5 for responsive layout
- ✅ JavaScript ES6+ features implemented
- ✅ DOM manipulation throughout
- ✅ Form validation with JavaScript
- ✅ Local Storage for data persistence
- ✅ No React, Node.js, or backend technologies
- ✅ Pure front-end implementation
- ✅ Professional UI/UX design
- ✅ Team information on all pages
- ✅ Complete documentation

---

## 🤝 Team

### Haresh Kumar
- **CMS ID:** 023-23-0435
- **Role:** Lead Developer
- **Expertise:** Front-end development, JavaScript, UI/UX design

### Asadullah Shaikh
- **CMS ID:** 023-23-0080
- **Role:** Co-Developer
- **Expertise:** Feature implementation, testing, documentation

---

## 📝 License

This is an academic project created for educational purposes.

---

## 🙏 Acknowledgments

- Bootstrap team for the excellent CSS framework
- Google Fonts for Poppins typography
- Bootstrap Icons for the icon library

---

## 📞 Contact

For questions or feedback about this project, please use the Contact page in the application or refer to the project documentation.

---

**© 2026 Smart Complaint Management System - Academic Project**

*Built with ❤️ by Haresh Kumar and Asadullah Shaikh*
