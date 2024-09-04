# Gadget Store

Gadget Store is a fake e-commerce site built for demonstration purposes. It showcases basic e-commerce functionalities such as product listing, user authentication, shopping cart, checkout and more!

## Overview

This repository contains the code for Gadget Store, a fake e-commerce web application. It interacts with two other components of the project:

- [Gadget Store API](https://github.com/chideraemmanuel/gadget-store-api): Responsible for handling product data retrieval and user session management.
- [Gadget Store Admin Dashboard](https://github.com/chideraemmanuel/gadget-store-admin): Allows administrators to manage products, orders, and user data.

This document is intended to provide an overview of the project, the technologies used, and brief explanations of the major features of the application.

## Techologies Used

- **Next.js**: Next.js is a React framework that enables server-side rendering and static site generation, providing a hybrid model that optimizes for performance, SEO, and flexibility among other things!
- **Typescript**: TypeScript is a statically typed superset of JavaScript that helps catch errors early through type-checking, leading to more robust and maintainable code.
- **TailwindCSS**: A utility-first CSS framework that allows for rapid UI development with a highly customizable design system.
- **React Query**: A powerful data-fetching library that simplifies server state management in React applications. It handles data fetching, caching, synchronization, and updates seamlessly, providing an optimized and declarative approach to working with server state and API interactions.
- **React Hook Forms**: A performant, flexible library for building forms in React using hooks. It minimizes re-renders, simplifies form validation, and provides an easy-to-use API for managing form state.

## Features

The web application includes all the basic features of a typical e-commerce web application, such as;

- **Product listing**: Users can seamlessly browse products, and view their details. The added search, filtering options, and pagination makes the process much easier and intuitive.
- **Shopping cart management**: The application also enables users to perform typical shopping cart functions, like adding and/or deleting items from cart, incrementing item quantity, and all that good stuff!
- **Checkout and orders management**: Though no payment gateway was integrated, the application provides an option to checkout the items in a user's cart, and also properly manages the orders that have been made!
- **User authentication**: Users also have the option to create an account, or login if they previously signed up! The account creation process includes email validation, and users can also reset their password.
  Note that for features like cart management, orders management and the likes, an account is required.

### Other noteworthy features/behavior

- **Server state management**: All major states in the application (e.g cart items and quantity), as well as mutations (e.g adding an iitem to cart) are managed on the server. This is to ensure safety, and the integrity of the data flow in the application.
- **URL state management**: For client state (products filter, pagination...), the application makes use of the URL. This approach has several benefits and makes for a good user experience!
- **Optimistic UI updates**: Since most of the web application's states are managed on the server, it wouldn't be ideal to have users wait around for server mutations to complete before receiving feedback, hence the implementation of optimistic UI updates. This ensures that the UI is updates as soon as a mutation is performed, while the network request is done in the background.

## Installation and Usage

1. Clone the repository

```bash
git clone https://github.com/chideraemmanuel/gadget-store-ecommerce.git
```

2. Install dependencies

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configuration

### Environment variables

- **NEXT_PUBLIC_API_BASE_URL**: The base URL for the backend API
- **NEXT_PUBLIC_API_PROTOCOL**: The HTTP protocol for the backend API
- **NEXT_PUBLIC_API_HOST_NAME**: The host name of the backend API
- **NEXT_PUBLIC_API_PORT**: The port on which the backend API runs
- **NEXT_PUBLIC_PROJECT_BASE_URL**: The URL for this project
- **NEXT_PUBLIC_GOOGLE_CLIENT_ID**: Google Client ID, used for OAUTH authentication. Should be gotten from the [Google console](https://console.google.com)
