# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setting up the project

### `npm install` 

this will install all the dependencies in the project and libraries: such as MUI, React Hook Forms, React Router 6.8, axios, etc...

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

## Running unit tests

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


# Project Structure

the project has been split into the following folder structure:
    -assets:holds all images and icons for the application (this application did not need such files but no project can be set up without its assets folder).
    -Components: holds all components of different hierarchy such as Molecules and Organisms.
    -Services: specific services that will only be used by this part of the application
    -Pages: this folder holds the specific pages of the application as it is concidered the big container that holds all the components together. 
    -Routes: implements the lazy loading and adds the routes for the containers.
    -constants: holds all the constants and enums for the application
    
# Features

the project has *required requirements* and added *Extra Features* that have been implemented.

## Required Features:

### Build A Sign-Up form.

-The User enters: first name, last name, email, and password.

-All fields are required.

-Password validation:

    -Should be a minimum of eight characters,
    
    -Should contain lower and uppercase letters, 
    
    -Should not contain user’s first or last name
    
 -Basic Email Format Structure Validation
 
 -Send entered data as a POST request to https://demo-api.now.sh/users. following the schema provided
 
```shell
{
 firstName: "Thomas",
 lastName: "Shelby",
 email: "thomas@shelby.co.uk"
}
```

## Extra Features

### Application Level:

- Deployed the application on GitHub. [https://github.com/Bloodlesss/sign-up-form-typescript](https://github.com/Bloodlesss/sign-up-form-typescript).
- Used MUI, axios, React Hooks Form, react router 6.8 and other small libraries to accommodate the project needs.
- Added a loader to compensate the  gap in time between sending and recieving the HttpRequests.
- Added a result form that loads the returned result of the POST REQUEST to display the user his account credentials.
- Added Password strength tester to allow the user to know if his current password strong or not, while covering the basics.

### Technical Level:

- Added an API that validates if the email exists works and still alive or not and verifies its SMTP and MX records if on or not. **THIS API IS FREE AND CAN ONLY ALLOW 20 REQUESTS PER DAY**, after that the application will always consider the email invalid even if it is valid. [APILink](https://apilayer.com/marketplace/email_verification-api)
- Although the application is only one page module SignUp I have worked concidering that the app is gonna be recieving new and advanced features.
- Tests using Jest covering the basics of the application

### Future Plans

- Add dynamic language handling allowing the user to view the application with different languages.
- Add more tests to cover more of the scope of the application logic and design wise.

 
