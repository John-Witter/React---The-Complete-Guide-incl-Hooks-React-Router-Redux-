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

## Props

    * Pass Props (data, short for properties) into components
    * Allows components to be dynamic and reusable
    * ex:
    
```javascript
    function App () {
        ...
        const expenses = [
            {
                id: 'e1',
                title: 'Toilet Paper', 
                amount: 94.12, 
                date: new Date(2020, 7, 14)
            },
            {
                id: 'e2',
                title: 'New TV', 
                amount: 799.49, 
                date: new Date(2021, 2, 12)
            },
            {
                id: 'e3',
                title: 'Car Insurance', 
                amount: 294.67, 
                date: new Date(2021, 2, 28)
            },
            {
                id: 'e4',
                title: 'New Desk (Wooden', 
                amount: 450, 
                date: new Date(2021, 5, 12)
            },            
        ]

            <ExpenseItem
                title={expenses[0].title}
                amuont={expenses[0].amount}
                date={expenses[0].date}
            />
            <ExpenseItem
                title={expenses[1].title}
                amuont={expenses[1].amount}
                date={expenses[1].date}
            />
            <ExpenseItem
                title={expenses[2].title}
                amuont={expenses[2].amount}
                date={expenses[2].date}
            />
            <ExpenseItem
                title={expenses[3].title}
                amuont={expenses[3].amount}
                date={expenses[3].date}
            />
        ...
    }

    function ExpenseItem(props) {
        const {title, amount, date} = props
    }
        
```