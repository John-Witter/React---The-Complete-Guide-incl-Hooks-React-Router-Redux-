# Learning Check: Working with Events & State

## Question 1:
    How should you NOT listen to events when working with React?

    1. Adding an event listener (e.g. via "addEventListener") manually.
    
    2. Setting an event handler function via props (e.g. onClick={...}).
    
    3. You can't listen to events, React is about outputting data only.

### Answer:
    1. Adding an event listener (e.g. via "addEventListener") manually.

    * This would be imperative code, you're not using React's features with this code and you would trigger some function that lives outside of React components and hence wouldn't be able to interact with React component state.

## Question 2:
    Which value should you pass to event listener props like onClick?

    1. The code that should execute when that event occurs.
    
    2. The result of calling a function that should execute when the event occurs.
    
    3. A pointer at the functino that should execute when the event occurs.

### Answer:
    3. A pointer at the functino that should execute when the event occurs.

    * You want to pass a "pointer" at the to-be-executed function as a value to onClick etc. 
    * Then, this function gets executed "on your behalf" by React when the event occurs.

## Question 3:
    How can you communicate from one of your components to a parent (i.e. higher level) component?

    1. You can accept a function via props and call it from inside the lower-level (child) component to then trigger some action in the parent component (which passed the function). 
    
    2. You can accept an event via props and trigger it from inside the lower-level (child) component to then trigger some action in the parent component (which passed the function). 
    
    3. You can't communicate up, only down - i.e. you can only pass props down to pass data down to a component. You can't trigger an action in a higher-level component.

### Answer:
        1. You can accept a function via props and call it from inside the lower-level (child) component to then trigger some action in the parent component (which passed the function). 

        * In JavaScript, functions are just objects (i.e. regular values) and hence you can pass them as values via props to a component. If that component then calls that function, it executes - and that's how you can trigger a function defined in a parent component from inside a child component.

## Question 4:
    How can you change what a component displays on the screen?

    1. Use a regular JS variable, change the value and output the variable's value in JSX.

    2. You can't change the output - components are static in React apps.

    3. Create some "state" value (via useState) which you can then change and ouput in JSX.
        
### Answer:
    3. Create some "state" value (via useState) which you can then change and ouput in JSX.

## Question 5:
    Why do you need this extra "state" concept instead of regular JS variables which you change and use?

    1. Because it's less code.

    2. Because standard JS variables don't cause React components to be re-evaluated.

    3. Because standard JS variables are not supported in React components.

### Answer:
    2. Because standard JS variables don't cause React components to be re-evaluated.
    
    * React doesn't care whether you changed some variable values. It'll not re-evaluate the component function. It only does that for changes to registered state values (created via useState)        


## Question 6:
    Which statement about useState is NOT correct?

    1. It receives an (optional) initial state value as an argument.

    2. Calling useState again will update the state value.

    3. It returns an array with exactly two elements



### Answer:
    2. Calling useState again will update the state value.
    
    * Calling useState again will simply create a new state.


## Question 7:
    How can you update component state (created via useState)?

    1. You can assign a new value to the state variable.

    2. You can call the state updating function which useState also returned.

    3. You can call useState again.

### Answer:
    2. You can call the state updating function which useState also returned.

    * useState returns an array with exactly two elements - the second element is always a function which you can call to set a new value for your state. Calling that function will then also trigger React to re-evaluate the component.


## Question 8:
    How much state may you manage in one single component?

    1. You can have as many state slices as you need / want.

    2. You should have at most 1 state (merge multiple states into a state object).

    3. You can have multiple state slices if at least one of them is an object.

### Answer:
    1. You can have as many state slices as you need / want.

    * There's no restriction at all.

## Question 9:
    What's wrong about this code snippet?

```javascript
const [counter, setCounter] = useState(1);
...
setCounter(counter + 1);
```

    1. There's nothing wrong with it.

    2. State can't be a number.

    3. If you update state that depends on the previous state, you should use the "function form" of the state updating function instead.

### Answer:
    3. If you update state that depends on the previous state, you should use the "function form" of the state updating function instead.

