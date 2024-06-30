# Deep-Tree-Implementation-with-Next.js-and-NestJS

This project is a full-stack application built using Next.js for the frontend and NestJS for the backend. The application allows users to build, manage, and persist a tree structure with a depth of up to 10,000 nodes. The key features include the ability to create a tree structure with a specified depth, display the tree structure in a hierarchical format, and persist the tree structure in a MySQL database.

To get started with this project, ensure you have Node.js, npm, and MySQL installed. Clone the repository and navigate to the backend directory. Install the necessary dependencies, configure your MySQL database in the `src/app.module.ts` file, and run the backend server. Next, navigate to the frontend directory, install the dependencies, and run the frontend server. The backend will run on `http://localhost:3000` and the frontend on `http://localhost:3001` by default.

The project structure includes two main directories: `tree-app-backend` for the NestJS application and `tree-app-frontend` for the Next.js application. The backend provides API endpoints to create and retrieve the tree structure. Navigate to `http://localhost:3001` in your web browser to interact with the application, create a tree by clicking the "Create Tree" button, and view the tree structure. Contributions are welcome, and the project is licensed under the MIT License.

