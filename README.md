# Employee Management Dashboard

A responsive Employee Management Dashboard built using React.js. This project includes dashboard cards, employee table, API integration, search, filter, pagination, add/edit employee form, and form validation.

## Project Overview

This application fetches employee data from the JSONPlaceholder API and displays it in an employee dashboard.

Since the API provides user data, extra employee fields like department, designation, joining date, and status are added inside the React application.

## Tech Stack

- React.js
- JavaScript
- HTML5
- CSS3
- Bootstrap
- Bootstrap Icons
- Axios
- Postman

## Features Implemented

- Dashboard cards
  - Total Employees
  - Active Employees
  - Employees on Leave
  - New Joiners
- Fetch employee data from API
- Loading indicator
- Error handling
- Responsive employee table
- Search by employee name
- Filter by department
- Pagination with 5 records per page
- Add employee
- Edit employee
- Form validation
  - Required fields
  - Valid email format
  - Phone number validation
- Responsive design for desktop, tablet, and mobile

## API Used

```txt
https://jsonplaceholder.typicode.com/users
```

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Pradeep-S28/Employee-Management-Dashboard.git
```

### 2. Go to project folder

```bash
cd Employee-Management-Dashboard
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the project

```bash
npm run dev
```

### 5. Open in browser

```txt
http://localhost:5173
```

## Folder Structure

```txt
Employee-Management-Dashboard
├── postman
│   └── Employee Management Dashboard API.postman_collection.json
│
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
├── notes.txt
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Postman Collection

The API was tested using Postman.

Request included:

```txt
GET https://jsonplaceholder.typicode.com/users
```

The exported Postman collection file is available inside the `postman` folder.

## Screenshots

Add screenshots for:

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

```txt
Add your GitHub Pages live link here
```

## Author

Pradeep Sundarrajan
