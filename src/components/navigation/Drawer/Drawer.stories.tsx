import React, {Fragment, useState} from "react";
import Drawer from './Drawer';
import componentDefaults from "../../../defaults/ComponentDefaults";
import {Story} from "@ladle/react";
import {DrawerProps} from "./Drawer.types";

export default {
    title: "navigation",
};

export const Default: Story<DrawerProps> = ({
    children,
    className,
    style
}) => {
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
                className={className}
                style={style}
            >
                {children}
            </Drawer>
        </Fragment>
    )
}

Default.storyName = "Drawer";

Default.args = {
    children: 'Drawer children',
    ...componentDefaults
};
