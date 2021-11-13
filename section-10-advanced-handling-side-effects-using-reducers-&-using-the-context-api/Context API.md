# Context API

>¿Too much prop driling? !!Use Context!!

>¿Forwarding state through multiple components via props? !!Use Context!!



    ex: (in 06-usereducer-starting-project.zip [we're going to update this]) `isLoggedIn`:


    `isLoggedIn` is created in `App.js` and determines what is displayed on the screen.

    `isLoggedIn` is passed as props to the `MainHeader` component.

    `MainHeader` renders the `Navigation` component and passes `isLoggedIn` to `Navigation`.

    Finally, within `Navigation`, nav-links are conditionally renderred if `isLoggedIn` is true.