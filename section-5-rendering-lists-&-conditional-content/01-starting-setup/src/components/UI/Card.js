// to act as a shell around either Expenses or ExpenseItem

import './Card.js'

function Card (props) {
    const classes = 'card ' + props.className
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Card


/* PROPS CHILDREN */
/*
    'children' is a reserved name

    the value of the 'children' prop 
    is the content between the opening and closing tags of the custom component

        in this case (for ExpenseItem) 'children' refers to the divs and h2 
        b/t the opening and closing Card tags
*/

/*PROPS CLASSNAME */
/*
    for Card to use the className of ExpenseItem, or any other component:
    use:
        'props.className'    
*/