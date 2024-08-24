# Diagram Tool Application

This application is a web-based tool for creating, visualizing, and managing diagram components. The tool is built using React and `react-flow-renderer`, providing an intuitive interface for users to create components, connect them, and manage their properties.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
   - [Starting the Application](#starting-the-application)
   - [Creating Components](#creating-components)
   - [Connecting Components](#connecting-components)
   - [Deleting Components](#deleting-components)
   - [Viewing Components](#viewing-components)
   - [Database Setup](#database-setup)
4. [Available Scripts](#available-scripts)
5. [Dependencies](#dependencies)
6. [Development](#development)
7. [Learn More](#learn-more)
8. [License](#license)

## Features

- **Component Creation**: Users can create new components with a name and multiple properties.
- **Component Deletion**: Components can be deleted directly from the diagram or the side panel.
- **Component Connections**: Components can be connected with edges, representing relationships or data flow.
- **MiniMap & Controls**: A MiniMap for navigation and control options like zoom and fit view.
- **Properties Management**: Each component has properties such as Confidentiality, Integrity, and more, which can be selected during creation.
- **Storage**: Store the node and edges of the diagram.
- **Responsive Design**: The interface is responsive and adjusts to different screen sizes.

## Installation

To set up the application locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Rushikesh-77/diagram-tool.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd diagram-tool
   ```

3. **Install Dependencies**:

   Ensure you have Node.js and npm installed. Then, install the necessary packages:

   ```bash
   npm install
   ```

## Usage

### Start the JSON Server: 

Before starting the application, you need to run the JSON server to serve the db.json file. Open a new terminal window and run the following command in the project directory:

```bash
npx json-server --watch db.json --port 5000
```

This will start the JSON server on port 5000. The application will interact with this server to read from and write to the db.json file.

### Starting the Application

To start the application in development mode, use the following command:

```bash
npm start
```

This will open the application in your default browser, typically at `http://localhost:3000`.

### Creating Components

1. Click on the **"CREATE COMPONENT"** button in the side panel.
2. A dialog will appear where you can enter the **Component Name** and select the **Properties**.
3. Click **"Add Component"** to add the component to the diagram. The component will be added at a random position within the diagram area.

### Connecting Components

1. Drag from the edge of one component node to another to create a connection.
2. The connection (edge) will appear, representing a relationship or data flow between the two components.

### Deleting Components

- **From the Diagram**: Click the **Delete** button on a component node to remove it from the diagram.
- **From the Side Panel**: Each component listed in the side panel also has a delete button for quick removal.

### Viewing Components

- **MiniMap**: The MiniMap in the diagram view allows for easy navigation and overview of the entire diagram.
- **Properties Table**: Below the diagram, a table lists all components and their associated properties for quick reference.

### Database Setup
- **Storage**: A db.json file has been set up in the project directory. This file is used to store the node and edges of the diagram. The initial structure of the db.json file is as follows:

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Dependencies

The application relies on the following major dependencies:

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [React Flow Renderer](https://reactflow.dev/): A library for building node-based diagrams.
- [Material-UI](https://mui.com/): React components for faster and easier web development.

## Development

### Project Structure

The project is structured as follows:

```
diagram-tool/
│
├── src/
│   ├── components/   # Reusable UI components
│   ├── assets/       # Static assets (images, fonts, etc.)
│   ├── App.js        # Main application component
│   ├── DiagramTool.js# Diagram tool component
│   └── index.js      # Entry point
│
├── public/           # Publicly accessible files (index.html, favicon, etc.)
│
├── package.json      # Project dependencies and scripts
└── README.md         # Documentation
```

### Customization

To customize the application:

- **Add New Properties**: Edit the `propertyOptions` array in `DiagramTool.js`.
- **Adjust Styling**: Modify the styles in the `sx` and `style` props or use a custom CSS file.

### Future Enhancements

- **Persistent Storage**: Save diagrams to local storage or a database.
- **Advanced Components**: Add support for different types of components with unique behaviors.
- **Exporting Diagrams**: Allow users to export diagrams as images or JSON files.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.