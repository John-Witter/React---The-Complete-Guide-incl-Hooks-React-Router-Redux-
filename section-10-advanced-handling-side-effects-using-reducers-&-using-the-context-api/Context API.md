# Context API

> ### `React.createContext();`

> ¿Too much prop driling? !!Use Context!!

> ¿Forwarding state through multiple components via props? !!Use Context!!

    ex: (in 06-usereducer-starting-project.zip [we're going to update this]) `isLoggedIn`:


    `isLoggedIn` is created in `App.js` and determines what is displayed on the screen.

    `isLoggedIn` is passed as props to the `MainHeader` component.

    `MainHeader` renders the `Navigation` component and passes `isLoggedIn` to `Navigation`.

    Finally, within `Navigation`, nav-links are conditionally renderred if `isLoggedIn` is true.

> Can have multiple Contexts for multiple states in your app

    React.createContext(); takes a default Context

    Context is app-wide or component-wide state (often an object)

## How to use context in your app

1. Provide it
    - wrap (in JSX code) all components w/the context that need access to it
    - technically don't *need* a provider if context has a default value
    - a provider allows you to change context value
    - to do this, add a ```value``` prop to the provider
2. Consume it
    - hook into it
    - listen to it

> Provide example from `App.js`:

```javascript
return (
    <React.Fragment>
        <AuthContext.Provider value={{isLoggedIn: isLoggedIn}}>
            <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler} />}
                {isLoggedIn && <Home onLogout={logoutHandler} />}
            </main>
        </AuthContext.Provider>
    </React.Fragment>
);
```


### Consumer
* Takes a child which should be a function
* As an argument, you get your context data (ex: ```{isLoggedIn: false}```)