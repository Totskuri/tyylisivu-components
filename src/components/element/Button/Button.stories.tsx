import React from "react";
import Button from './Button';
import {action} from "@ladle/react";
import type {Story} from "@ladle/react";
import {ButtonProps} from "./Button.types";
import componentDefaults from "../../../defaults/ComponentDefaults";

export default {
    title: "element",
};

export const Default: Story<ButtonProps> = ({
    children,
    variant,
    disabled,
    className,
    style
}) => {
    return (
        <Button
            onClick={action('onClick')}
            variant={variant}
            disabled={disabled}
            className={className}
            style={style}
        >
            {children}
        </Button>
    )
}

Default.storyName = "Button";

Default.args = {
    children: 'Click me!',
    variant: 'default',
    disabled: false,
    ...componentDefaults
};

Default.argTypes = {
    variant: {
        options: ['default', 'primary', 'secondary', 'transparentDark', 'transparentLight', 'textDark', 'textLight'],
        control: {type: "select"},
        defaultValue: "default",
    },
};

