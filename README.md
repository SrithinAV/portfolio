# Portfolio Project



## Overview

This is my portfolio project showcasing my skills and projects as a Full Stack Developer. It features a modern and responsive design, allowing users to navigate through my work, skills,
and contact information seamlessly. I also added a chat bot which is powered by gemini 1.5 flash api.

## Technologies Used

### Frontend

- **React.js**: A JavaScript library for building user interfaces.
- **react-icons**: For including popular icons.
- **axios**: For making HTTP requests.
- **dotenv**: For managing environment variables.

### Backend

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework.
- **gemini 1.5 flash API**: Utilized for backend API functionalities.
- **web3form**: Utilized for email recieving. 

## Getting Started

### Prerequisites

- Node.js installed
- npm or yarn installed

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/srithinav/portfolio.git
   cd portfolio
2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
3. Install backend dependencies:
   ```bash
   cd ../backend
   npm install

## Configuration
**.env**
PORT=4000
API_KEY=your_api_key
ACCESS_KEY=your_access_key

## Running the Application

    ```bash
       cd backend
       npm start

    ```bash
    cd frontend
    npm start
##Folder Structure

  ```bash
      portfolio/
    ├── backend/
    │   ├── node_modules/
    │   │──data/
    │   |── controllers/
    │   │── routes/
    │   │── middleware/
    │   │── server.js
    │   ├── .env
    │   ├── package.json
    │   └── README.md
    └── frontend/
    ├── node_modules/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── App.js
    │   └── index.js
    ├── package.json
    └── README.md

