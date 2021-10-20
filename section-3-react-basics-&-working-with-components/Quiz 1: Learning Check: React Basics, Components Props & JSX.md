## Question 1:
Which kind of code do you write when using React.js?
    
    1. Definitive JSX Code
    2. Imperative JavaScript Code
    3. Declarative JavaScript Code

    ### ANSWER

        * 3. Declarative JavaScript Code
        * With React.js, you define the "goal" (i.e. what should be shown on the screen) 
            and let React figure out how to get there.

## Question 2:
What is "JSX"?

    1. It's a standard JavaScript syntax
    2. It's a special, non-standard syntax which is enabled in React projects
    3. It's a special string which you can pass to React functions    

    ### ANSWER

        * 2. It's a special, non-standard syntax which is enabled in React projects
        * React projects like the ones we create via "create-react-app" support JSX syntax. 
            It gets compiled to standard JS code behind the scenes.

## Question 3
    Why is React all about "Components"?

    1. Every UI in the end is made up of multiple building blocks (= components),
          hence it makes sense to think about user interfaces as "combinations of components"  
    2. React projects are configured to only work with components, hence
        you have to use them when writing React code.
    3. Components offer better performance than "standard user interfaces" that
        don't user components.

    ### ANSWER

        * 1. Every UI in the end is made up of multiple building blocks (= components),
          hence it makes sense to think about user interfaces as "combinations of components"  

        "Components" are really just a way of thinking about user interfaces. 
        React embraces that concept and gives you tools to build components
            that you can then combine.

        
## Question 4
    What does "declarative" mean?

    1. "Declarative" is the same as "imperative"
    2. You define the individual steps that need to be taken to achieve a desired outcome
        (e.g. a target UI).
    3. You define the desire outcome (e.g. a target UI) and the the librarry (React)
        figure out the steps.

    ### ANSWER

        * 3. You define the desire outcome (e.g. a target UI) and the the librarry (React)
        figure out the steps.

        You define the target "state" (UI) and React figures out which JS commands 
            need to be executed to bring that result to life.

## Question 5
    What is a "React Component"

    1. It's a JavaScript function which typically returns HTML (JSX) code 
        that should be displayed
    2. It's a replacement for standard HTML which is supported by modern browsers.
    3. It's a JavaScript function that must not return anything

    ### ANSWER

        * 1. It's a JavaScript function which typically returns HTML (JSX) code 
            that should be displayed

         A component is just that: A JS function that typically returns some HTML 
            (or, to be precise: JSX) code which will be shown on the screen 
            when that component is used.

## Question 6
    How many custom React components must a React app have?

    1. At least 2
    2. At most 99
    3. That's totally up to you

    ### ANSWER

        * 3. That's totally up to you

        You can have as many React components as you want / need.

## Question 7
    Which statement is correct?

    1. With React, you build multiple sibling component trees that are then mounted
        into the same DOM node.
    2. With React, you build a component tree with root component that's mounted
        into a DOM node.
    3. With React, you always mount every component into it's own DOM node.

    ### ANSWER

        * 2. With React, you build a component tree with root component that's mounted
        into a DOM node.

        You build a component tree that has one root node.

## Question 8
    What does "component tree" mean?

    1. It means that you have a root node which then has more components nested beneath it.
    2. It means that you must always return more than one component or HTML element
        per component function.
    3. It means that you can build multiple components.

    ### ANSWER

        * 1. It means that you have a root node which then has more components nested beneath it.

        You build a tree by nesting components into each other - just as you 
            build a HTML tree when building a standard HTML document.

## Question 9
    How do you pass data between components?

    1. Via global JavaScript variables that are accessible in all files.
    2. Via "custom HTML attributes" (better known as "props").
    3. Via standard HTML attributes which you can use in non-React apps as well.
    ### ANSWER

        * 2. Via "custom HTML attributes" (better known as "props").

        You build your own "HTML elements" in the end, hence you can also define 
            your own attributes (called "props" in React's world)

## Question 10
    How can you output dynamic data in React components (i.e. in the returned JSX code)?

    1. You can use single curly braces (opening and closing) with any JS 
        expression between them.
    2. React has a special syntax that allows you to output variable values
        (i.e. values stored in variables) and nothing else: Opening and closing curly braces.
    3. You can't

    ### ANSWER

        * 1. You can use single curly braces (opening and closing) with any JS 
        expression between them.

        You can't put block statements (e.g. if statements) between those curly braces 
            but you can output any result of any JS expression by using this special feature.