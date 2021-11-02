# [Section 9: Diving Deeper: Working with Fragments, Portals & "Refs"](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25598540#questions)

## JSX Limitations

### **Adjacent root level JSX elements return an error**

-   Adjacent elements must be wrapped in an outer-most element
-   Can't return more than one "root" JSX element
-   In JS, only 1 thing can be returned from a function / method

### Solution

1. Wrap the elements in an outer div (or any other outer wrapper element)

```javascript
    return (
        <div>
            <h2>Hi there!</h2>
            <p>This does not work :-(</p>
        </div>
    );
```
* GOTHA: div soup
    * Poor SEO
    * Poor accessiblilty

2. **Return a native JS array**

```javascript
    return (
        [
            <h2>Hi there!</h2>,
            <p>This does not work :-(</p>
        ]
    )
```
* GOTCHA: "key" is needed for each element in the array
    * Wrapping in a div is more convenient

3. **Create a "Wrapper" element that returns props.children (see Wrapper.js)**
* The children prop contains all the content passed between the opening
and closing tag of a component (built-in or custom)
* This eliminates a div from the DOM and cleans up the Elements tab in dev tools
4. 

## React Fragments

* Built-in wrapper component
* Fragemnts are an **empty wrapper component**. 
    * **Doesn't render** any real HTML element to the DOM
* Removes unnecessary divs

```javascript
import { Fragment } from 'react';
return (
    <Fragment>
        <h2>Hi there!</h2>
        <p>This does not work :-(</p>
    </Fragment>
);


//  OR

return (
    <React.Fragment>
        <h2>Hi there!</h2>
        <p>This does not work :-(</p>
    </React.Fragment>
);

//  OR

return (
    <>
        <h2>Hi there!</h2>
        <p>This does not work :-(</p>
    </>
);

// NOTE: THIS SYNTAX DOESN'T SUPPORT KEYS, <REACT.FRAGMENT> SYNTAX DOES
```

## React Portals
* Port components to a place on the DOM
* Render the HTML content to a specific part of the DOM
1. You need a place to port to
2. On the component should know to have a portal to the other component
* Similar to Fragments
* Imagine you have a modal that overalys the entire page.
    * Semantically this element should be higher up on the DOM than other elements

Checkout the portal from ErrorModal.js to index.html