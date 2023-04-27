import React from "react";
import Navbar from './Navbar';
import componentDefaults from "../../../defaults/ComponentDefaults";
import {Story} from "@ladle/react";
import {NavbarProps} from "./Navbar.types";
import NavbarItem from "../NavbarItem";
import NavbarDropdown from "../NavbarDropdown";

export default {
    title: "navigation",
};

export const Default: Story<NavbarProps> = ({
    className,
    style
}) => {
    return (
        <Navbar
            icon="icon"
            iconToggled="iconToggled"
            className={className}
            style={style}
            brand="Tyylisivu"
        >
            <NavbarItem
                href="#"
            >
                Item 1
            </NavbarItem>
            <NavbarItem
                href="#"
            >
                Item 2
            </NavbarItem>
            <NavbarDropdown
                text="Dropdown"
            >
                <NavbarItem
                    key="DropdownItem1"
                    href="#"
                >
                    Dropdown item 1
                </NavbarItem>
                <NavbarItem
                    key="DropdownItem2"
                    href="#"
                >
                    Dropdown item 2
                </NavbarItem>
            </NavbarDropdown>
            <NavbarItem
                href="#"
            >
                Item 4
            </NavbarItem>
        </Navbar>
    )
}

Default.storyName = "Navbar";

Default.args = {
    ...componentDefaults
};
