# RCQ Folder Generator

This script automates the creation of a new folder with predefined files for your RCQ (Route-Controller-Query) structure in a Node.js project.

## Features

- Creates a new folder within the `src/RCQ` directory
- Generates three files: `Query.js`, `Controller.js`, and `Router.js`
- Automatically populates these files with boilerplate code
- Ensures the `src/RCQ` parent directory exists

## Prerequisites

- Node.js installed on your system
- Access to the command line

## Installation

1. Clone this repository or download the script file.
   ```sh
   git clone https://github.com/yourusername/create-folder-script-new.git
   ```
2. Navigate to the directory containing the script.
   ```sh
   cd create-folder-script-new
   ```
3. Install Dependencies:
   ```sh
   npm install
   ```

## Usage RCQ By NPM

1. Install the package globally:
   ```sh
   npm i -g create-folder-script-new
   ```
2. Create a new RCQ folder:
   ```sh
   npx create-folder --namefolder=NewFolder
   ```
3. Result

The script will create the following structure:

```sh
src/
    └── RCQ/
        └── NewFolder/
            ├── Query.js
            ├── Controller.js
            └── Router.js
```

## Generated Files

- Query.js
  - Contains a basic query to select all items from a table named after your folder.
- Controller.js
  - Sets up a controller function to handle GET requests for all items.
- Router.js
  - Configures an Express router with a GET route for the new resource.

### Customization

- You can modify the script to change the content of the generated files or add more files as needed.

## Contributing

- Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/ibrataha8/rcq-folder-factory/issues) if you want to contribute.

## Contact

- For any questions or feedback, please contact ibrataha8@gmail.com.
