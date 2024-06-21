# Crypto Dashboard

This project is a dynamic and interactive dashboard for displaying cryptocurrency data. It is built using React and leverages several components and libraries to provide a comprehensive and visually appealing user experience.

## Features

- **Header Section**: Includes a title and a brief description of the dashboard's purpose.
- **Data Visualization**: Implements multiple visualizations including line charts and bar charts.
- **Interactive Elements**: Provides dropdowns for selecting different cryptocurrencies.
- **Responsive Design**: Ensures the dashboard works well on both desktop and mobile devices.
- **Styling and UX**: Uses CSS for styling to create a visually appealing and user-friendly interface.

## Technologies Used

- React
- Axios for data fetching
- Recharts for data visualization
- CSS for styling

## Components

- **Header**: Displays the title of the dashboard.
- **CryptoLineChart**: Displays price trends of selected cryptocurrencies using a line chart.
- **CryptoBarChart**: Displays the market capitalization of top cryptocurrencies using a bar chart.
- **DataTable**: Displays detailed information about the cryptocurrencies in a table format.
- **Dropdown**: Allows users to select a cryptocurrency from a dropdown menu.

## Setup Instructions

Follow these steps to set up and run the project locally:

### Prerequisites

- Node.js (>=14.x)
- npm (>=6.x) or yarn (>=1.x)

### Installation

1. Clone the repository:


   git clone https://github.com/manny0328/dynamic-dashboard.git
   cd dynamic-dashboard

   Install dependencies:

npm install
# or
yarn install
Running the Project
Start the development server:

npm start
# or
yarn start
Open your browser and navigate to http://localhost:3000 to view the dashboard.

Building for Production
Create a production build:


npm run build
# or
yarn build
The production-ready files will be in the build directory.

Deploying the Project
To deploy the project, you can use platforms like GitHub Pages, Netlify, Vercel, etc. Here is a brief guide on how to deploy to GitHub Pages:

Install the GitHub Pages package:


npm install gh-pages --save-dev
# or
yarn add gh-pages --dev
Add the following properties to your package.json:

json
"homepage": "http://manny0328.github.io/dynamic_dashboard",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
Deploy the application:


npm run deploy
# or
yarn deploy


Deoloyed link: https://dynamic-dashboard-knza.onrender.com
