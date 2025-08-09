# Cyber Command Playbook

This project is a web application designed to be a one-stop resource for cybersecurity commands, concepts, and experiments. It's built with React, TypeScript, and Vite, and styled with Tailwind CSS and shadcn/ui.

## Features

*   **Landing Page**: A welcoming introduction to the Cyber Command Playbook.
*   **Cybersecurity Basics**: A comprehensive overview of fundamental concepts like IP and MAC addresses, TCP, and the OSI model.
*   **Navigation**: A responsive navigation bar that provides easy access to different sections of the application.
*   **Theme Toggle**: A button to switch between light and dark modes.

## Tech Stack

*   **Framework**: [React](https://reactjs.org/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
*   **Routing**: [React Router](https://reactrouter.com/)
*   **State Management**: [React Query](https://tanstack.com/query/v5)

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or higher)
*   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/nanda-krishnan-v/cyber-command-playbook.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd cyber-command-playbook
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

This will start the application on `http://localhost:5173`.

### Building for Production

To build the application for production, run the following command:

```bash
npm run build
```

This will create a `dist` directory with the optimized production build.

## Project Structure

```
.
├── public/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   ├── Navbar.tsx
│   │   └── ThemeToggle.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── package.json
└── ...
