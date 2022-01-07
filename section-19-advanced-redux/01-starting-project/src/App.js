import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

// out here to avoid changing when the component re-renders
let isInitial = true; // used to avoid running useEffect on 1st render

function App() {
    const showCart = useSelector((state) => state.ui.cartIsVisible);

    // use notification to conditionally render the Notification component
    // and to send extra data to the Notification component
    const notification = useSelector((state) => state.ui.notification);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    // save cart data to firebase
    // each time the cart data changes
    useEffect(() => {
        const sendCartData = async () => {
            dispatch(
                uiActions.showNotification({
                    status: "pending",
                    title: "sending",
                    message: "Sending cart data!",
                })
            );
            const res = await fetch(
                "https://section-19-advanced-redux-default-rtdb.firebaseio.com/cart.json",
                {
                    method: "PUT",
                    body: JSON.stringify(cart),
                }
            );

            if (!res.ok) {
                throw new Error("Sending cart data failed.");
            }

            // if success, show success notification
            dispatch(
                uiActions.showNotification({
                    status: "success",
                    title: "Success!",
                    message: "Sent cart data successfully!",
                })
            );
        };

        if (isInitial) {
            isInitial = false;
            return; // don't run on the first render, don't send cart data
        }
            sendCartData().catch((error) => {
                dispatch(
                    uiActions.showNotification({
                        status: "error",
                        title: "Error!",
                        message: "Sending cart data failed!",
                    })
                );
            });
    }, [cart, dispatch]);

    return (
        <Fragment>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </Fragment>
    );
}

export default App;
