# React Redux

**Redux** is a predictable state container for javascript apps.

1. It is for JavaScript apps
2. It is a state container
3. It is predictable

## Redux Is For JavaScript Applications

**Redux** Is Not Tied To React, which can be used with React, Angular, Vue Or Even Vanilla JavaScript. **Redux** is a library for JavaScript applications. Its primary purpose is to manage the state of your application in a consistent and organized way, regardless of the framework you're using.

## Redux Is A State Container

**Redux** stores the state of your application. Consider a React app-state of a component. `State` of an app is the state represented by all the individual components of that app. **Redux** Will Store and manage the application state. **Redux** acts as a centralized store for the state of your entire application. Instead of having state scattered across different components or parts of your app, **Redux** keeps all the state in a single place called the `store.` This makes it easier to manage, access, and update the state, especially in large and complex applications.

## Redux Is Predictable

**Redux** makes state management predictable by enforcing strict rules on how the state can be updated. In **Redux**, the state is immutable, meaning it cannot be changed directly. Instead, you dispatch actions (plain JavaScript objects) that describe what changes should happen. 
These actions are processed by pure functions called `reducers` which take the current state and an action, and return a new state. This strict unidirectional data flow `(action → reducer → state)` makes it easier to understand how the state changes over time and debug the application.

### Redux Is Predictable In What Way?

**Redux** is a state container. The state of the application can change. Example: In a todo list app the item can go from state of pending to a state of completed. 
In **redux** all state transitions are explict and it is possible to keep track of them. In **Redux** the changes to your application's state become predictable.

**Redux Is A Predictable State Container For JavaScript Apps**

### Why Would You Want To Use Redux?

If you want to manage the state of your application in a predictable way, redux can help you.

### Why Would We Want To Use Redux In A React Application?

In React components have their own state, then **Why do we need another tool to help manage the state?** 

## Do We Really Have A Problem

React Context - Prevents Prop Drilling
useContext + useReducer?

React Redux is the official Redux UI binding library for react

### Summary

React is a library used to build user interfaces. Redux is a library for managing state in a predictable way in javascript applciations. 
React-redux is a library that provides bindings to use React and Redux together in an application.

## Store

It holds the state of your application. A store that holds the state of your application.

## Action

Describes what happend. An action that decribes the changes in the state of the application.

## Reducer

It ties store and actions together. A reducer which actually carries out the state transition depending on the action.

## Three Principles

1. **The state of your whole application is stored in an object tree within a single store.** it maintain our application state in a single object which would be managed by the redux store.

2. **The only way to change the state is to emit an action, an object describing what happend.** To update the state of your app, you need to let redux know about that with an action not allowed to directly update the state object.

3. **To specify how the state tree is transformed by actions, you write pure reducers.** `Reducer - (previousState, action) => newState`

## Actions

The only way your application can interact with the store. Carry some information from your app to the redux store.
Plain JavaScript Objects have a 'type' property that indicates the type of action being performed. The 'type' property is typically defined as string constants.

## Reducers

specify how the app's state changes in response to actions sent to the store. Function that accepts state and action as arguments, and returns the next state of the application. 
`(previousState, action) => newState`

## Redux Store

One store the entire application. The responsibilty of Redux Stores are
Holds application state. Allows access to state via getState(). Allows state to be updated via dispatch(action). Registers listeners via subscribe(listener). Handles unregistering of listeners via the function returned by subscribe(listener).

## Middleware

Middleware is the suggested way to extend Redux with custom functionality. It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.
Middleware use for logging, crash reporting, performing asynchronous tasks etc.

## More On Actions

### Synchronous Actions

In Synchronous Actions As soon as an action was dispatched, the state was immediately updated. if you dispatch the `BUY_CAKE` action, the numOfCakes was right away decremented by 1. Same with `BUY_ICECREAM` action as well.

### Asynchronous Actions

In Asynchronous API calls to fetch data from and end point and use that data in your application.

### Asynchronous Action Creators

AXIOS: request to an API end point

redux-thunk: Define async action creators