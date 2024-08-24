
# Bank System

A comprehensive banking system developed using Node.js, Express, and MongoDB for the backend, with a frontend built using HTML, CSS, and JavaScript. This application allows users to perform various banking operations securely and efficiently.

## Features

- User Registration and Authentication
- Account Management (Create, Update, Delete)
- Transaction Management (Deposit, Withdrawal, Transfer)
- Account Balance Inquiry
- Transaction History
- Responsive Design

## Technologies Used

- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Frontend:** HTML, CSS, JavaScript

## Installation

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Clone the Repository

```bash
git clone https://github.com/yourusername/bank-system.git
cd bank-system
```

### Install Dependencies

```bash
npm install
```

### Set Up Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Run the Application

To start the server:

```bash
npm start
```

The application will be available at `http://localhost:3000`.

### Frontend

The frontend files are located in the `public` directory. You can modify the HTML, CSS, and JavaScript files as needed.

## Usage

1. **Register a New User:** Navigate to `/register` to create a new account.
2. **Log In:** Navigate to `/login` to authenticate and access your account.
3. **Manage Accounts:** Access account management features through the dashboard.
4. **Perform Transactions:** Use the available options to deposit, withdraw, or transfer funds.

## Contributing

If you would like to contribute to this project, please fork the repository and create a pull request with your changes.
