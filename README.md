## Introduction

MyReads can select and categorize books you have read, are currently reading, or want to read.
There are two pages: Home page and Search page.

### Home page

Home page shows three book thelves: Currently Reading, Want to Read and Read.
Each book has a control to select the shelf for the book, when you select a different shelf, it will move to that shelf.
When click a control, it always show the value of the current shelf the book is on.
On the right bottom of the Home page, there is dard green a "+" button, when you click it, it
bring you to the search page.

### Search page

Search page shows a search bar, when you type some key word and press 'Enter', it will show search results below the search bar.
There are up to 20 results on the search page.
Each result has a control. If the result is already on a shelf, it will show the same value.
If the result is not no any shelf, if you choose a shelf, it will add to the shelf.
When you click the 'back' button on the left of the search bar, it will go back to Home page.

### API

The api is provided by Udacity

## Requirement

Visual Studio Code (prefered)
Nodejs
npm
yard
Reactjs

## To get started :

    install all project dependencies with npm install
     start the development server with npm star

## Steps

1.  create-react-app myreads
2.  Move starter from Udacity: https://github.com/udacity/reactnd-project-myreads-starter
3.  yarn add react-router-dom
4.  yard add prop-types
5.  yarn add pubsub-js (publish a message, subsrribe from home page)

## API:    BooksAPI.js

### getAll Method: getAll()

Returns a Promise which resolves to a JSON object containing a collection of book objects.
This collection represents the books currently in the bookshelves in your app.

### update Method: update(book,shelf)

book: <Object> containing at minimum an id attribute
shelf: <String> contains one of ["wantToRead", "currentlyReading", "read"]
Returns a Promise which resolves to a JSON object containing the response data of the POST request

### search Method: search(query)

query: <String>
Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

### notice

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in SEARCH_TERMS.md. That list of terms are the only terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

### `yarn build` fails to minify
