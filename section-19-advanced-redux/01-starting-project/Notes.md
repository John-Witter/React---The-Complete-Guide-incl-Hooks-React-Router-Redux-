# Side Effects, Async Tasks & Redux

>Reducers must be **pure**, **side-effect free**, **synchronous** functions

    Reducers should take input (Old State + Action) & return New State

## Where should side-effects and async tasks be executed?

>1. Directly into the **components** (e.g. ```useEffect()```) 
    
    Dispatch the action once the side-effect is done so that Redux doesn't know 
    about that side-effect

>2. Inside the **action creators**

    Create action creators that will allow you to perform side-effects and
    run async tasks w/o changing the reducer function (which must stay side-effect free)

    