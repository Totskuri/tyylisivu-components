import React, {Fragment, useState} from "react";
import Drawer from './Drawer';

export const Default = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Fragment>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
            >
                Open drawer
            </button>
            <Drawer
                isOpen={isOpen}
                handleClose={() => setIsOpen(false)}
            >
                Container children
            </Drawer>
        </Fragment>
    )
}
