import React from "react";
import Checkbox from './Checkbox';
import {Story} from "@ladle/react";
import {CheckboxProps} from "./Checkbox.types";
import componentDefaults from "../../../defaults/ComponentDefaults";

export default {
    title: "form",
};

export const Default: Story<CheckboxProps> = ({
    checked,
    onChange,
    className,
    style
}) => {
    return (
        <Checkbox
            checked={checked}
            onChange={onChange}
            className={className}
            style={style}
        />
    )
}

Default.storyName = "Checkbox";

Default.args = {
    ...componentDefaults
};
