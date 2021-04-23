# Copy of FrontEnd

Created: Apr 23, 2021 12:28 AM

## Libraries:

- React → Used to create screen elements (screens + components)
- ReactDom → Integration of JSX code with DOM;
- Axios → HTTP requests
- React Redux → Control and centralization of states based on flux pattern
- Reduxsauce → Syntactic sugar for the creation of redux structures
- Redux Saga → Middleware for redux, which uses generators functions to create synchronous or asynchronous subroutines from an Action shot;
- Styled Components → Used to create stylized components;
- React Icons → Icon library

---

## Start

### Requirements:

- Node 10.0 >

### Inicialization

Using Yarn:

```jsx
$ yarn
$ yarn start
```

Using NPM

```jsx
$ npm install
$ npm start
```

---

# Directories

.**src**

- /components: General usage components
- /containers: Application views

![images/frontend/Untitled.png](images/frontend/Untitled1.png)

- / hooks: Custom hooks
- / mocks: Mocks used to assist in offline development;
- / services: Functions aimed at using services;
- / store: Files aimed at configuring Redux and Sagas;
- / utils: Auxiliary functions of general nature;
- App.js: where the states of the app are initialized and a call to the navigation flow (in our case, only the Main);
- Index.js: Where the application base is initialized as written in the DOM;

---

## Application Flow and General Libraries

**REDUX** 

- For every container in the application, in this case, "Main". It has its logical block, its reducer;
This reducer will be responsible for controlling the state of that part of the application. And inside it we will have:
    - Actions → The actions that, triggered by an action in the View, will be the changes made in the state of the reducer;
    - Dispatcher → Will be responsible for effecting the change triggered by the action;
    - Middleware → In our case, Saga is being used, which captures the action, and performs actions, previously subscribed to the saga.
    - State → The state of our reducer;

![images/frontend/riadAin.gif](images/frontend/riadAin.gif)

![images/frontend/Untitled%201.png](images/frontend/Untitled%201.png)

**REDUX SAGA**

- For greater control of routines, application status and reduction of unwanted renderings. The use of Redux Sagas was chosen, as this library uses generetors functions with the aid of effect functions, which help to use asynchronous actions and trigger other actions in a simplified way;

**VIS JS**

- To display the graphs, the Vis.JS library was used, as it has a simple initial configuration to use it and depends only on a declaration of the lines and nodes, for rendering it.

![images/frontend/Untitled%202.png](images/frontend/Untitled%202.png)

![images/frontend/Untitled%203.png](images/frontend/Untitled%203.png)

**STYLED COMPONENTS**

- This library is used for a simplified creation of stylized components, thus reducing the number of styling blocks in the logical part of the application and helps to maintain a pattern in the code;

---

## Main standards

---

- As the application is based on a recent version of React, they were function Components instead of class Components, as there is the availability of the use of hooks. Thus, lessening the need to use certain existing class-based component conventions;
- For states of a container (Screen), there is a folder in the same flame redux, where it has a reducer.js and saga.js.
    - reducer.js → focused on declaring the routines of each action and the state of the application
    - sagas.js → creation of subroutines of those declared in reducer.js;
        - At the end of the file, it is possible to find a default export with the call all ActionTypes subscriptions and their subroutines ('<Action> Saga');
- For supplying components from redux states, the following were used:
    - connect → Function responsible for injecting data into the component at the time of its declaration;
    - useSelector → Hook responsible for retrieving the state data for a component variable;
    - useDispatch → Hook responsible for instantiating a dispatch to a component variable for triggering an action;
- 'connected <Component>' → This convention is used to inject data into the component without having to declare the states in the component in the "parent" component. In order to avoid unwanted re-renders;
- For every container in the application, in this case, "Main". It has its logical block, its reducer;
This reducer will be responsible for controlling the state of that part of the application. And inside it we will have:
    - Actions → The actions that, triggered by an action in the View, will be the changes made in the state of the reducer;
    - Dispatcher → Will be responsible for effecting the change triggered by the action;
    - Middleware → In our case, Saga is being used, which captures the action, and performs actions, previously subscribed to the saga.
    - State → The state of our reducer;