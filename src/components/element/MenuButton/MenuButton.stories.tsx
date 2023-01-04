import React, {useState} from "react";
import MenuButton from './MenuButton';
import {action} from "@ladle/react";
import type {Story} from "@ladle/react";
import {MenuButtonProps} from "./MenuButton.types";
import componentDefaults from "../../../defaults/ComponentDefaults";

export default {
    title: "element",
};

export const Default: Story<MenuButtonProps> = ({
    disabled,
    className,
    style
}) => {
    const [toggled, setToggled] = useState(false);
    return (
        <MenuButton
            onToggle={(val) => setToggled(val)}
            toggled={toggled}
            disabled={disabled}
            className={className}
            style={style}
        />
    )
}

Default.storyName = "MenuButton";

Default.args = {
    disabled: false,
    ...componentDefaults
};
