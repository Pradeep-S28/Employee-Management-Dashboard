# Employee Management Dashboard

A responsive Employee Management Dashboard built using React.js. This project was developed as part of a frontend assignment to demonstrate component design, API integration, form handling, validation, search, filter, pagination, and responsive UI implementation.

## Project Overview

The Employee Management Dashboard allows users to view employee statistics, display employee records in a table, search and filter employees, and perform add/edit operations using a form.

Employee data is fetched from the JSONPlaceholder API and converted into employee records by adding custom fields such as department, designation, joining date, and status.

## Tech Stack

- React.js
- JavaScript ES6+
- HTML5
- CSS3
- Bootstrap
- Bootstrap Icons
- Axios
- Postman

## Features Implemented

- Dashboard overview cards
  - Total Employees
  - Active Employees
  - Employees on Leave
  - New Joiners
- API integration using Axios
- Fetch employee data from JSONPlaceholder API
- Loading indicator during API call
- Error handling with user-friendly message
- Responsive employee table
- Search by employee name
- Filter by department
- Pagination with 5 records per page
- Add employee functionality
- Edit employee functionality
- Form validation
  - Required field validation
  - Email format validation
  - Phone number validation
- Responsive design for desktop, tablet, and mobile devices

## API Used

```txt
https://jsonplaceholder.typicode.com/users
```

The API provides user data such as name, email, phone number, and company details. Additional employee fields like department, designation, joining date, and status are added inside the React application for dashboard display.

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Pradeep-S28/Employee-Management-Dashboard.git
```

### 2. Navigate to the project folder

```bash
cd Employee-Management-Dashboard
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the project in browser

```txt
http://localhost:5173
```

## Folder Structure

```txt
Employee-Management-Dashboard
├── public
├── src
│   ├── assets
│   ├── components
│   │   ├── Card.jsx
│   │   ├── EmployeeForm.jsx
│   │   ├── EmployeeTable.jsx
│   │   └── Navbar.jsx
│   │
│   ├── services
│   │   └── api.js
│   │
│   ├── styles
│   │   ├── breakpoints.css
│   │   └── navbar.css
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Components

### Navbar

Displays the application title and Add Employee button.

### Card

Reusable dashboard card component used to display employee metrics.

### EmployeeTable

Displays employee records in a responsive table with search, filter, pagination, and edit option.

### EmployeeForm

Handles add and edit employee functionality with validation.

## Postman Collection

The API endpoint was tested using Postman.

Request used:

```txt
GET https://jsonplaceholder.typicode.com/users
```

A Postman collection can be exported and included with the project submission.

## Screenshots

Add screenshots for the following before final submission:

```txt
Dashboard View
Employee Table
Form Validation
Mobile Responsive View
```

## GitHub Repository

```txt
https://github.com/Pradeep-S28/Employee-Management-Dashboard
```

## Live Demo

Add your GitHub Pages live link here after deployment.

```txt
https://pradeep-s28.github.io/Employee-Management-Dashboard/
```

## Author

Pradeep Sundarrajan
