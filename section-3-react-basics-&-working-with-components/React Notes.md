React is declarative, componenet based, js ui library

Vanilla JS DOM manipulation is imperaive


## Declarative
    * state what you want and the compiler does the rest
    * ex: tell jsx that you want to render a p tag w/in a div and it renders appropriately
    * more initial overhead, esp. for smaller, static projects

## Imperative
    * explicitly state each step that should occur
    * cumbersome, esp. for larger, dynamic projects
    * ex: create new div and p tag elements on the document -> set their inner html, append the p tag as a child of the div, ...

## React Components Named Capitalized Camel-Cased
    * ex: ExpenseItem.js    
    * lower-cased components in React are viewed as HTML components
    * ex: <H1 /> vs <h1> </h1>