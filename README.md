# Code Incubator

Code Incubator was developed as a capstone project in the Thinkful Engineering Flex program.

## Purpose

The purpose of this application is to create a place to submit full-stack web development project ideas, receive feedback, and to help inspire future students. After an idea is submitted users can vote and comment on the idea.

## Demo

- [Code Incubator - https://code-incubator-app.mtberry16.now.sh/](https://code-incubator-app.mtberry16.now.sh/)

## Screenshots

#### 1. Landing Page

![Code Incubator Landing Page - Pre Login](/src/images/homepage-pre-login-sm.png)
![Code Incubator Landing Page - Post Login](/src/images/homepage-post-login-sm.png)

#### 2. Idea Page

![Code Incubator Idea Page - Details](/src/images/idea-page-sm.png)
![Code Incubator Idea Page - Feedback](/src/images/idea-page-2-sm.png)

## Future of App

The project is currently an MVP. To keep track of proposed features please visit the [GitHub Project](https://github.com/users/Thorn51/projects/2) for the project.

## API

The client is connected to the [Code Incubator API](https://github.com/Thorn51/code_incubator_api). It is dependent on fetching data from the PostgreSQL database provisioned to the server.

## Technologies Used

- React
- JSX
- JavaScript
- HTML
- CSS

## Client Scripts

The client was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run deploy`

Tests, builds and deploys the app to Zeit.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
