# Redux Toolkit

**Redux is a predictable state container for javascript apps.**

## Redux is for javascript applications
Redux is not tied to react. Redux can be used with react, angular, vue or even vanilla javascript. Redux is a library for javascript applications.

## Redux is a state container
Redux stores the state of your application. State of an app is the state shared by all the individual components of that app. Redux will store and manage the application state.

## Redux is predictable
Redux is a state container. The state of the application can change. example in a todo list project the item which is in pending state after some operation it will become in completed state.
In redux a pattern is enforced to ensure all state transitions are explicit and can be tracked. The changes to your application's state become predictable.

## Why Redux?
If you want to manage the global state of your application in a predictable way redux can help you. The patterns and tools provided by redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur.
Redux guides you towards writing code that is predictable and testable, which helps give you confidence that your application will work as expected.

## What is Redux Toolkit?
Redux tool kit is the official opinionated batteries-included toolset for efficient redux development. It is also intended to be the standard way to write redux logic in your application.

## Why Redux Toolkit?
Redux is great but it does have a few shortcomings. Configuring redux in an app seems complicated. In addition to redux a lot of other packages have to be installed to get redux to do something useful. Redux requires too much boilerplate code.

**Redux Toolkit serves as an abstraction over redux. It hides the difficult parts ensuring you have a good developer experience.**

React is a library used to build user interfaces. Redux is a library for managing state in a predictable way in javascript applications. Redux toolkit is a library for efficient redux development. React Redux is a library that provides binding to use react and redux toolkit together in an application.

## When should i use redux in my react application?
You have large amounts of application state that are needed in many places in the app. The app state is updated frequently over time. The logic to update that state is updated frequently over time. The logic is to update that state may be complex. The app has a medium or large sized codebase, and might be worked on by many people.

## Three Principles

1. The global state of your application is stored as an object inside a single store.

2. The only way to change the state is to dispatch an action, an object that describes what happend.

3. To specify how the state tree is updated based on actions, you write pure reducers.

### Actions

The only way your application can interact with that store. Carry some information from your app to the redux store. This is the plain JavaScript Objects.
Have a 'type' property that describes something that happened in the application. The 'type' property is typically defined as string constants.

### Reducers

Specify how the app's state changes in response to actions sent to the store function that accepts state and action as arguments, and returns the next state of the application. `(previousState, action) => newState`

### Redux Store

One store for the entire application responsibilities

1. Holds application state
2. Allows access to state via `getState()`
3. Allows state to be updated via `dispatch(action)`
4. Registers listeners via `subscribe(listener)`
5. Handles Unregistering of listeners via the function returned by `subscribe(listener)`

