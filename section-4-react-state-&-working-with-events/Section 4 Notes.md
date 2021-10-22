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