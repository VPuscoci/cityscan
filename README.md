# CityScan web app

The CityScan web application helps users find their dream city by showing them real time weather information, best flights to popular destionations and much more.
[You can preview the app here](https://city-scan.vercel.app)

## Implementation details

Before starting to code I brainstormed a bit and wrote down the list of features, technical requirements and a moqup of the app on a [whiteboard](https://photos.app.goo.gl/9PjMt5Pc9HnJqJ1D7) (sorry for my handwriting :expressionless:).

The web app was created mobile first because most of the users are browsing the web from their mobile devices now.
The boilerplate code was generated using the `create-react-app` package in order to speedup the development process and maintain React best practices.

### Technical details 

- *Framework* -> React with Typescript
- *Styling* -> Tailwind, Styled components
- *State Management* -> React Hooks and React Query
- *Browser support* -> Latest versions of Google Chrome, Apple Safari, Microsoft Edge, Mozilla Firefox

## Future improvements

Due to the lack of time I was not able to implement all the features and technical requirements I wrote down at the beginning, so here is a list of the most important ones that should be added next:

Features:

- Add a `Choose city` button in the city detail page, that will ask the user to confirm that this city is the chosen one and take him to a last `Congratulations` screen 
- Allow user to choose current location and/or get the user's location via the browser API :sunny:
- Allow user to choose the flight departure dates :airplane:
- Find and implement another weather data API that has the data needed to generate a graph of the annual weather temperatures and sunrise/sunset times
- Allow user to choose the cities he would like to compare
  
Tech debt:
- Implement dynamic imports for city background images
- Load optimized images for mobile
- Add unit tests :pray:
- Create API proxy layer in order to improve security


## Local development

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn deploy`

The app will be deployed via Vercel and linked to the account that is setup via the Vercel wizzard.
