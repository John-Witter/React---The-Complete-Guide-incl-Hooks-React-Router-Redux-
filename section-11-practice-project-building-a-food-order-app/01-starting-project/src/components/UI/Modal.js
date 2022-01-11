import { Fragment } from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const Modal = (props) => {
    // use React Portal for the backdrop
    // (that thing behind the modal overlay which blocks interaction with
    // the rest of the page)

    // use React Portal to render the Modal overlay
    // (to use the component anywhere but render the HTML elements in a
    // specific place in the DOM tree)

    // render Backrop and Overlay side by side

    const portalElement = document.getElementById("overlays");

    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReactDom.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    );
};

export default Modal;
