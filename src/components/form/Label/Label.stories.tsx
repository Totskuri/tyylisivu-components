import React from "react";
import Label from './Label';
import {Story} from "@ladle/react";
import {LabelProps} from "./Label.types";
import componentDefaults from "../../../defaults/ComponentDefaults";

export default {
    title: "form",
};

export const Default: Story<LabelProps> = ({
    children,
    text,
    className,
    style
}) => {
    return (
        <Label
            text={text}
            className={className}
            style={style}
        >
            {children}
        </Label>
    )
}

Default.storyName = "Label";

Default.args = {
    text: 'Label text',
    children: 'Label children',
    ...componentDefaults
};
