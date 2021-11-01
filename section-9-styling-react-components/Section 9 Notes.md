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

```javascript

```
