# Product Page with Slider - React Vite Project

This project is a dynamic product page built with React and Vite. It showcases products in a grid layout with a responsive slider, integrating data from the Fake Store API.

## Features

- **API Integration**: Fetches product data from a mock server simulating the Fake Store API.
- **Responsive Product Slider**: Implements a product slider using React Slick, which adjusts to different screen sizes (desktop, tablet, mobile).
- **Interactive UI**: Includes essential buttons like "Add to Cart" and "View Details" for each product.
- **Fallback Image**: Uses a placeholder image when the product image is unavailable from the API.

## Getting Started

Follow these steps to clone, install dependencies, and run the project locally.

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or later)
- **npm** or **yarn** package manager
- **Git**

### Installation

1. **Clone the repository**

   Open your terminal and run the following command to clone the repository:

   ```bash
   git clone <repository-url>
   ```

   Replace `<repository-url>` with the URL of the Git repository.

2. **Navigate to the project directory**

   ```bash
   cd <project-folder>
   ```

   Replace `<project-folder>` with the name of the folder you cloned.

3. **Install dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

### Running the Project

To start the development server, use:

Using npm:

```bash
npm run dev
```

Or using yarn:

```bash
yarn dev
```

This will start the application on `http://localhost:5173`, where you can view and interact with the product slider.

### API Issue

- **Image Loading**: The product images from the Fake Store API were not loading properly, so a placeholder image (`https://www.rallis.com/Upload/Images/thumbnail/Product-inside.png`) is used when the image is missing or fails to load.
