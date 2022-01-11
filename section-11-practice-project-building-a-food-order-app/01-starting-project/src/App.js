import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

// create states for when the Cart is and isn't visible

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    // called when the Cart button is clicked
    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    return (
        <Fragment>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler} onHideCart={hideCartHandler} />
            <main>
                <Meals />
            </main>
        </Fragment>
    );
}

export default App;
