# Learn Redux

A simple React + Redux implementation. This will be turned into a free video series once the app is totally fleshed out.

## Running

First `npm install` to grab all the necessary dependencies. 

## Updating to latest packages and dependencies

Removed _react-router-redux_ package since it's deprecated

Installed _history_ as replacement to the browserHistory deprecated  from react-router v4 onwards 

Installed _react-router-dom_ for the { switch, route } exports

Installed _connected-react-router_ as replacement to Router from react-router that can take in the history prop. 
BrowserRouter from router-react-dom doesn't accept the history prop

Installed react-transition-group as replacement to react-addons-css-transition-group

Installed babel-transform-class-properties so that arrow functions work in ES6 class properties: see handleSubmit 
function issue due to the rebinding of this

Updated the following packages: 
* react and react-dom to ^v16
* react-redux to ^v5
* react-router to ^v4
* redux to ^4
* stylus-loader to ^3
* webpack to ^4
* webpack-dev-middleware to ^3
* webpack-hot-middleware to ^2

Removed react-addons-test-utils (depedency of expect-jsx) as it is no longer needed by React v16 

Then run `npm start` and open <localhost:7770> in your browser.

### Development Notes
* routing in the `combineReducers` of rootReducer (reducers/index.js) is replaced by the `connectRouter()` method of 
_connected-react-router_ in the createStore() process in store/index.js 
* since history is used in both reduxstagram.js and in store/index.js, a history object is created and exported from 
store/history.js to be more efficient
* IndexRoute is no longer part of react-router, everything is now done through Routes. To have child components 
switch based on path have a set of Routes inside the parent component. 
    * The new package for most front-end dev is react-router-dom and relies on two major routers: BrowserRouter and 
    HashRouter but since we are using redux and need to connect the store and the app, we use ConnectedRouter
    * A React Router component that does not have a router (Browser@Hash@Connected Router) as one of its ancestors will 
    fail to work.
    * BrowserRouter and HashRouter Router only expect to receive a single child element.
    * Routes goes inside of the routers and since Routers expect a single child element, you can use the<Switch> component to group <Route>s. The <Switch> will iterate over its children elements (the routes) and only render the first one that matches the current pathname.
    * {React.cloneElement(this.props.children, this.props)} - what the cloneElement is doing is cloning the children 
    that is passed down inside <Main> and passing it the props that is visible to <Main>. However. since we are 
    now using <Switch> and  <Route> and can't use the afore method, we have to pass this.props differently using the 
    render props instead of the compontent prop inside of <Route>
        * [Pass props to a component rendered by React Router](https://tylermcginnis.com/react-router-pass-props-to-components/)
        * [Passing props working method](https://github.com/ReactTraining/react-router/issues/4942#issuecomment-318837270)
    * Resource: [A Simple React Router v4 Tutorial](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)
    * [Example from above article](https://codesandbox.io/s/vVoQVk78)
* Resources used to update the packages: 
    * [Conquer navigation state with React-router and Redux](https://blog.logrocket.com/conquer-navigation-state-with-react-router-and-redux-f1beb9b8ea7c)
    * [Connected React Router Usage](https://github.com/supasate/connected-react-router#usage)
        * [example app.js](https://github.com/supasate/connected-react-router/blob/83bc910d40699fdb3f16d9d469476ebec0ca2c50/examples/basic/src/App.js)
        * [example rootReducer reducers/index.js](https://github.com/supasate/connected-react-router/blob/83bc910d40699fdb3f16d9d469476ebec0ca2c50/examples/basic/src/reducers/index.js)
        * [example createStore](https://github.com/supasate/connected-react-router/blob/83bc910d40699fdb3f16d9d469476ebec0ca2c50/examples/basic/src/index.js)   
    * [React Training](https://reacttraining.com/react-router/web/guides/redux-integration)  

    * [Value of this in React event handler](https://stackoverflow.com/questions/29732015/value-of-this-in-react-event-handler)
    * [Arrow Function syntax not working with webpack?
](https://stackoverflow.com/questions/42063854/arrow-function-syntax-not-working-with-webpack)
    *[Cannot read property 'bind' of undefined](https://stackoverflow.com/questions/39632811/cannot-read-property-bind-of-undefined-react-js)   
* With update to Webpack^4, 
    * made changes to webpack config files, module.loaders property to module.rules
    * change plugins webpack.NoErrorsPlugin() to new webpack.NoEmitOnErrorsPlugin(),
    * add mode option with developent and production
    * remove uglify config from webpack.config.prod.js since uglify is the default compression tool for Webpack 4 
    when mode is set to production

## Production Build

Run `npm build` to create a distro folder and a bundle.js file.
=======
# Learn Redux Starter files

__SEE LEARN REDUX FOLDER README.MD AND COMMIT MESSAGES FOR MY DETAILS IN UPDATED THE DEPENDENCIES AND WHAT CHANGED COMPARED TO THE VIDEOS__

This repo includes the `learn-redux` folder which is where you will build your application as well as a number of partially finished `client` folder contents that correspond with the **start** of each video. These stepped folders should be used to reference or restore your application if things aren't working 100%.

There are only folders for videos which have significant changes.

## Getting Started

Fork or download this repo and run `npm install` in the `learn-redux` folder with the `package.json` file.


## Pull Requests 

Pull requests that fix dependencies between the videos and this repo are welcome as long as they correspond with the code written in the videos.


## FAQ / Help

**Before anything**, make sure you are on the latest node. You can run `node -v` and if you have anything less than `5.x`, you'll need to update. The files will probably work on older versions, but in my experience 80% of issues go away with an update.

### Q: I'm getting: _warning.js:44 Warning: Main: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop._


**A:**: I haven't looked into why I didn't get this error, but it means that you should not pass down `key` or `ref` because those are props that are tied and unique to each element. For now, there is a [nice fix posted here](https://github.com/wesbos/Learn-Redux-Starter-Files/issues/6#issuecomment-222210005)

### Q: I'm getting Unexpected Token Error

**A:** You probably don't have the `.babelrc` file in your `learn-redux` folder. This makes sure that you have all the right transpile dependencies. [Grab it from here](https://github.com/wesbos/Learn-Redux-Starter-Files/blob/master/learn-redux/.babelrc).

### Q: How do I download these videos?

**A:** I made a video for [exactly this](https://www.youtube.com/watch?v=-eUd2k5M1B0). 

### Q: What theme and font are you using?

**A:** Cobalt2 and Operator Mono. I wrote a bit of info here → <http://wesbos.com/uses>
