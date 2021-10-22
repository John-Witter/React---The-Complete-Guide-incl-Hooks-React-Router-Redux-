## What is the difference between these two onClicks?

```
<button onClick={clickHandler()}>Change Title</button> // 1
<button onClick={clickHandler}>Change Title</button>   // 2
```

1. When the HTML is being parsed, clickHandler function is executed

2. When HTML is being parsed, clickHandler is registered as a function
    * When the button is clicked, clickHandler function is executed


## Convention for Naming Event Handler Functions
    end with "Handler"    
    ex: clickHandler, submitHandler


## React registers state change through the component function for which the state change was registered

    Only the component function which triggered the state change is updated.
    Only the information which differs from the actual DOM will be re-rendered.