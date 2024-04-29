# Macaron Bakery

## What It Does

This application serves as a dynamic, user-focused platform designed to [briefly describe the primary function, e.g., "streamline online transactions for retail businesses"]. It enables users to [describe primary interactions, e.g., "browse a catalog of products, add items to their shopping cart, and check out securely"]. The system also features real-time updates, robust user account management, and responsive layouts for optimal usability on both desktop and mobile devices.

## How I Built It

### Technologies Used
- **Frontend**: The user interface was developed using Next.js, leveraging React for its efficient rendering capabilities. Tailwind CSS was employed to handle the application's styling, thanks to its utility-first approach which significantly accelerates the development process.
- **Backend**: The server-side operations are powered by Next.js API routes, providing a streamlined environment for handling both frontend and backend in a single framework.
- **Database**: MongoDB was chosen for its flexibility with document schemas, making it ideal for the dynamic and varied data needs of the application.
- **Authentication**: Authentication is handled through JWT tokens, ensuring secure data transmission and session management.

### Development Tools
- **Version Control**: Git and GitHub for source code management and version control.
- **Code Editors**: Developed primarily in Visual Studio Code with various plugins to enhance productivity.

## Challenges I Ran Into

During the development of this application, several challenges were encountered:

- **State Management**: Managing global state without traditional Redux posed a challenge, solved by utilizing the built-in Next.js API and React Context for efficient state handling across components.
- **Responsive Design**: Ensuring the application was equally functional and visually appealing on various devices required meticulous design planning and testing.
- **Security**: Implementing secure authentication and protecting user data involved careful configuration of JWT and thorough security testing.
- **Performance Optimization**: Balancing between rich features and application performance, especially with server-side rendering in Next.js, required several iterations to get right.

Each of these challenges provided valuable learning opportunities and significantly contributed to the overall robustness of the application.

## Installation

To get started with this project, clone the repository and install the dependencies.

```bash
git clone https://yourprojectrepository.com
cd your-project-directory
npm install
```

Ensure you have MongoDB running locally or connect to a remote MongoDB instance by updating the connection string in your configuration.

## Usage

To run the project locally:

```bash
npm run dev
```

Navigate to **http://localhost:3000** to view the application.


## Features

- **User Authentication and Authorization**: Securely manage user sessions and access control using JSON Web Tokens (JWT).
- **Real-time Data Handling**: Dynamically handle and update data in real time throughout the application.
- **Responsive Design**: Crafted with Tailwind CSS to ensure the application is fully responsive and functional across all devices.
- **Secure API endpoints**: Secure and efficient API endpoints to manage interactions between the frontend and the MongoDB database.

## Technologies

- **Next.js**: A React framework for building single-page JavaScript applications that supports server-side rendering.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **MongoDB**: A NoSQL database that offers high performance, high availability, and easy scalability.
- **JWT Tokens**: Utilized for secure transmission of information between parties as a JSON object in a compact and self-contained way.

