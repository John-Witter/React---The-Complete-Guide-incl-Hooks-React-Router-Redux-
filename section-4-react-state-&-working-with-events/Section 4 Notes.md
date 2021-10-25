## What is the difference between these two onClicks?

```
<button onClick={clickHandler()}>Change Title</button> // 1
<button onClick={clickHandler}>Change Title</button>   // 2
```

1. When the HTML is being parsed, clickHandler function is executed

2. When HTML is being parsed, clickHandler is registered as a function
    - When the button is clicked, clickHandler function is executed

## Convention for Naming Event Handler Functions

    end with "Handler"
    ex: clickHandler, submitHandler

## React registers state change through the component function for which the state change was registered

    Only the component function which triggered the state change is updated.
    Only the information which differs from the actual DOM will be re-rendered.

## If state update depends on previous state,
    use a function within the setState function to get access to prevState variable

ex:

```javascript
const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
        return {
            ...prevState,
            enteredTitle:e.target.value
        }
    });
};

...

return (
    <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} />
    </div>
)
```
React guarantees that the state snapshot given via updating w/prevState, in the 
inner function will always be the latest state snapshot, keeping all schedule
state updates in mind.


## Lifting State Up

* We can't pass data to sibling components.
* So far, we can only pass data from parent -> child and child -> parent
* Use props to send data from child1 -> parent
    * parent can now send data from child1 to child2, which is a sibling to child1
* [What is "Lifing State Up" in React?](https://www.freecodecamp.org/news/what-is-lifting-state-up-in-react/) freeCodeCamp article
