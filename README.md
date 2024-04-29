# Macaron Bakery

## What It Does

This application was developed as part of my TEJ3 assignment and serves as an e-commerce platform specifically tailored for a macaron bakery. The main purpose of this website is to enable customers to explore a variety of macaron flavors and add their favorite selections to a shopping cart.

The project not only fulfills the requirement to create a functional and user-friendly online store but also provided me with an invaluable opportunity to delve into new technologies. I chose to use MongoDB for the database management system, taking this project as a perfect opportunity to learn and understand the capabilities of working with a NoSQL database in a real-world application setting. This learning experience was particularly enriching, allowing me to gain hands-on experience with database operations essential for modern web development.


## How I Built It

### Technologies Used
- **Frontend**: The user interface was developed using Next.js, leveraging React for its efficient rendering capabilities. Tailwind CSS was employed to handle the application's styling, thanks to its utility-first approach which significantly accelerates the development process.
- **Database**: MongoDB was chosen for its flexibility with document schemas, making it ideal for the dynamic and varied data needs of the application.
- **Authentication**: Authentication is handled through JWT tokens, ensuring secure data transmission and session management.

![MongoDB Database](https://cdn.discordapp.com/attachments/1070372249959407646/1234323027861311498/image.png?ex=66305066&is=662efee6&hm=bac319489d6b6bd9d2cc71a22a561fc123680b3bf33a987801c11b9068e4508d&)

### Development Tools
- **Version Control**: Git and GitHub for source code management and version control.
- **Code Editors**: Developed primarily in Visual Studio Code.

## Challenges I Ran Into

During the development of this application, several challenges were encountered:

- **Responsive Design**: Ensuring the application was equally functional and visually appealing on various devices required meticulous design planning and testing.
- **Security**: Implementing secure authentication and protecting user data involved careful configuration of JWT and thorough security testing.
- **Performance Optimization**: Balancing between rich features and application performance, especially with server-side rendering in Next.js, required several iterations to get right.

Each of these challenges provided valuable learning opportunities and significantly contributed to the overall robustness of the application.

## Installation

To get started with this project, clone the repository and install the dependencies.

```bash
git clone https://github.com/LinHong149/tej3-website
cd tej3-website
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

