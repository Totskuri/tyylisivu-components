import React from "react";
import Dropdown from './Dropdown';
import componentDefaults from "../../../defaults/ComponentDefaults";
import {Story} from "@ladle/react";
import {DropdownProps} from "./Dropdown.types";

export default {
    title: "navigation",
};

export const Default: Story<DropdownProps> = ({
    children,
    items,
    className,
    style
}) => {
    return (
        <Dropdown
            items={items}
            className={className}
            style={style}
        >
            {children}
        </Dropdown>
    )
}

Default.storyName = "Dropdown";

Default.args = {
    children: 'Dropdown children',
    items: 'Dropdown items',
    ...componentDefaults
};
