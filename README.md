# konnekta-assignment_2_react

This repository contains the Konnekta Assignment 2, implemented with React. The main feature of this project is a multi-select dropdown component that allows users to select one or multiple items from a list.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Application Structure

Here is the application structure we followed:

      src
      │
      └───assets
      │ └───images (Directory to store all image files)
      │ └───fonts (Directory to store all font files)
      │
      └───components (Parent directory for app components)
      │ └───select
      │ └───index.tsx
      │ └───NoData.tsx
      │ └───Option.tsx
      │ └───SelectedItems.tsx
      │ └───SelectInput.tsx
      │ └───SelectOptions.tsx
      │
      └───lib
      │ └───hooks
      │ └───useHandleSelect.ts
      │ └───useInputChange.ts
      │ └───useOutsideClick.ts
      │
      └───scss (Directory to wrap all style dependencies of the application)
      │ └───select
      │ └───select.scss
      │ └───selectedItems.scss
      │ └───selectInput.scss
      │ └───selectOptions.scss
      │ └───utilities.scss
      │ └───base.scss
      │ └───layout.scss
      │ └───main.scss
      │ └───variables.scss
      │
      └───types
      │ └───index.ts
      │
      └───constants (Parent directory for constant data)
      │
      └───App.tsx

## Application Architecture

The application follows the modern React paradigm, leveraging functional components and hooks for state and lifecycle management.

### React Components

The application is divided into separate components each of which has a distinct responsibility. This design enhances the maintainability and readability of the code.

- `Select`: This is the parent component integrating the functionality of the multi-select dropdown.
- `SelectInput`: Manages the input box functionality, allowing users to filter options and control the opening/closing of the dropdown.
- `SelectOptions`: Responsible for rendering the dropdown options and managing their selection state.
- `SelectedItems`: Utilized for displaying the items that the user has selected from the dropdown.

### Custom Hooks

Custom hooks have been used to encapsulate complex logic and side effects:

- `useHandleSelect`: A custom hook that handles the selection and deselection of items.
- `useInputChange`: A custom hook that tracks changes to the input field for filtering options.
- `useOutsideClick`: A custom hook that tracks a click event outside of the dropdown component to close the dropdown.

### Styles

The application uses SCSS for styling components. Stylesheets are broken down into separate files for each component, promoting ease of management and modularity. SCSS variables and mixins are used to provide a consistent style throughout the application.

### Constants

Constants are used throughout the application to reduce magic strings and numbers. By doing so, we provide meaningful names to these values and make the codebase easier to maintain and understand.

### Use of React.memo and useCallback

In an effort to optimize the application's performance, we leveraged `React.memo` and `useCallback`. `React.memo` is used to wrap our functional components to prevent unnecessary re-renders, and `useCallback` is used to memoize functions to avoid unnecessary re-instantiations.

## Design Principles

The following fundamental design principles have been adhered to ensure the code is clean, maintainable, and reusable:

- **Single Responsibility Principle**: Each component and function in the application is designed with a single functionality in mind. This guarantees simplicity and clarity in our code.
- **Open/Closed Principle**: Components are designed to be easily extendable for additional functionalities. However, modifications in the existing functionality do not necessitate changes in the component's code.
- **Function Composition**: We have assembled small, purpose-specific functions to build complex functionalities.
- **Consistency**: Consistent coding style and naming conventions have been maintained across the codebase, ensuring the code is easily readable and understandable.

## Installation and Running the Project

To get the project up and running on your local machine, follow these steps:

1. **Clone the repository from GitHub:**

   ```
   git clone https://github.com/Gouidas/konnekta-assignment_2_react.git
   ```

2. **Navigate into the project directory:**

   ```
   cd konnekta-assignment_2_react
   ```

3. **Install the necessary npm packages:**

   ```
   npm install
   ```

4. **Start the development server:**

   ```
   npm start
   ```

This should launch the application in your default browser. Open [http://localhost:3000] to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Please note that at this moment, no tests have been written for the project, so the `npm test` command will not provide any useful output.

## Author

Gouidas Athanasios
