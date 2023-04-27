import React from "react";
import componentDefaults from "../../../defaults/ComponentDefaults";
import {Story} from "@ladle/react";
import {HeaderProps} from "./Header.types";
import Header from "./Header";
import Navbar from "../../navigation/Navbar";
import NavbarItem from "../../navigation/NavbarItem";
import NavbarDropdown from "../../navigation/NavbarDropdown";

export default {
    title: "element",
};

export const Default: Story<HeaderProps> = ({
    className,
    style
}) => {
    return (
        <Header>
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
        </Header>
    )
}

Default.storyName = "Header";

Default.args = {
    ...componentDefaults
};
